"use client";

import React, { useEffect, useState } from 'react';
import { Star, ArrowLeft, Loader2, X, ShoppingBag } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Product {
  id: string;
  title: string;
  category: string;
  rating?: string;
  image_url?: string;
  price?: string;
  description?: string;
}

// الفئات الرئيسية الثابتة للبطاقات الأربع
const categoriesData = [
  { id: "1", title: "شامبو طبي معالج", category: "العناية بالشعر", rating: "4.8", image: "/product-1.jpg" },
  { id: "2", title: "زيوت طبيعية مقوية", category: "الزيوت الطبيعية", rating: "5.0", image: "/product-2.jpg" },
  { id: "3", title: "مكمل الفيتامينات الشامل", category: "الفيتامينات", rating: "4.9", image: "/product-3.jpg" },
  { id: "4", title: "سيروم العناية بالبشرة", category: "العناية بالبشرة", rating: "4.9", image: "/product-4.jpg" },
];

export const ProductsSection = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // جلب كافة المنتجات من Supabase عند تحميل الصفحة
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        if (data) setAllProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOpenCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsModalOpen(true);
  };

  // تصفية منتجات الأدمن بحسب الفئة مع تنظيف النصوص لضمان المطابقة التامة
  const filteredProducts = allProducts.filter(
    p => p.category?.trim() === selectedCategory?.trim()
  );

  return (
    <section id="products" className="bg-[#050C09] py-20 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">اكتشف أفضل منتجاتنا</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            اختر القسم الذي يناسبك لرؤية المنتجات المتاحة فيه.
          </p>
        </div>

        {/* عرض البطاقات الأساسية الأربعة */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#030705] border border-emerald-900/40 rounded-2xl p-4 hover:border-emerald-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)] flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="h-52 w-full bg-emerald-950/20 rounded-xl mb-4 overflow-hidden relative border border-emerald-900/30">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-transparent to-transparent opacity-40" />
                </div>

                <div className="flex justify-between items-center text-xs mb-2 px-1">
                  <span className="text-emerald-400 font-semibold">{item.category}</span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2 px-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-900/30">
                <button
                  onClick={() => handleOpenCategory(item.category)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black font-bold text-xs flex items-center justify-center gap-2 transition duration-300 shadow-md"
                >
                  <span>استعراض منتجات القسم</span>
                  <ArrowLeft className="w-4 h-4 transition transform group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* النافذة المنبثقة الاحترافية لعرض تفاصيل المنتجات */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-[#030705] border border-emerald-800/60 w-full max-w-5xl rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* زر إغلاق النافذة */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 left-5 text-gray-400 hover:text-white bg-emerald-950/60 p-2.5 rounded-full border border-emerald-900/50 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* عنوان القسم داخل النافذة */}
            <div className="text-center mb-10">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950/40 border border-emerald-900/40 px-4 py-1.5 rounded-full">
                معرض المنتجات
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">قسم: {selectedCategory}</h3>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20 text-emerald-400">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400 flex flex-col items-center gap-3">
                <ShoppingBag className="w-14 h-14 text-emerald-900" />
                <p className="text-sm">لا توجد منتجات مضافة في هذا القسم حتى الآن.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-4 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300 shadow-xl"
                  >
                    <div>
                      {/* حاوية الصورة المتسقة لجميع الشاشات */}
                      <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4 border border-emerald-900/30 relative bg-emerald-950/20">
                        <img 
                          src={product.image_url || "/product-1.jpg"} 
                          alt={product.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { 
                            e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60"; 
                          }}
                        />
                      </div>

                      {/* السعر */}
                      <div className="mb-2">
                        <span className="text-emerald-400 font-extrabold text-sm bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800/40 inline-block">
                          {product.price ? product.price : 'السعر عند الطلب'}
                        </span>
                      </div>

                      {/* اسم المنتج */}
                      <h4 className="text-white font-bold text-base mb-2 group-hover:text-emerald-300 transition-colors line-clamp-1">
                        {product.title}
                      </h4>

                      {/* وصف المنتج */}
                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                        {product.description || 'لا يوجد وصف تفصيلي متاح لهذا المنتج حالياً.'}
                      </p>
                    </div>

                    {/* زر طلب الآن */}
                    <a 
                      href="#contact" 
                      onClick={() => setIsModalOpen(false)}
                      className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm rounded-xl transition duration-300 text-center shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 mt-2"
                    >
                      <span>طلب الآن</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};