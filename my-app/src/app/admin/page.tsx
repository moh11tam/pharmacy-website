"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, Upload, Loader2, Sparkles, Layers, Image as ImageIcon, Tag, DollarSign, FileText } from 'lucide-react';

const CATEGORIES = ["العناية بالشعر", "الزيوت الطبيعية", "الفيتامينات", "العناية بالبشرة"];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // جميع الأعمدة الموجودة في قاعدة البيانات
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageBase64, setImageBase64] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setUploading(true);

    try {
      // إدخال كل الأعمدة المطابقة لـ Supabase
      const { error } = await supabase.from('products').insert([
        {
          title,
          price,
          description,
          category: activeTab,
          image_url: imageBase64 || '/product-1.jpg',
        }
      ]);

      if (error) {
        alert(`خطأ أثناء الإضافة: ${error.message}`);
      } else {
        setTitle('');
        setPrice('');
        setDescription('');
        setImageBase64('');
        fetchProducts();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (confirm('هل أنت تأكد من حذف هذا المنتج؟')) {
      await supabase.from('products').delete().eq('id', id);
      fetchProducts();
    }
  };

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#030705] text-white p-4 sm:p-8 font-sans dir-rtl">
      
      {/* الهيدر */}
      <div className="max-w-7xl mx-auto mb-10 flex items-center justify-between border-b border-emerald-900/40 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-emerald-400 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-emerald-400" />
            لوحة إدارة المنتجات الشاملة
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            إضافة وإدارة سلع المتجر بكافة تفاصيلها
          </p>
        </div>
        <div className="bg-emerald-950/60 border border-emerald-800/40 px-4 py-2 rounded-xl text-emerald-300 text-xs font-bold flex items-center gap-2">
          <Layers className="w-4 h-4" />
          إجمالي المنتجات: {products.length}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* 1. نموذج الإضافة المحتوي على جميع الأعمدة */}
        <div className="lg:col-span-1 bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 h-fit shadow-2xl">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-emerald-900/30 pb-3">
            <Plus className="w-5 h-5 text-emerald-400" />
            إضافة منتج لـ: <span className="text-emerald-400">{activeTab}</span>
          </h2>

          <form onSubmit={handleAddProduct} className="space-y-4">
            
            {/* عمود: title */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-emerald-400" /> اسم المنتج (title)
              </label>
              <input
                type="text"
                required
                placeholder="مثال: شامبو طبي معالج"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#030705] border border-emerald-900/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* عمود: price */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> السعر (price)
              </label>
              <input
                type="text"
                placeholder="مثال: 2500 دج"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-[#030705] border border-emerald-900/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* عمود: description */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-emerald-400" /> الوصف (description)
              </label>
              <textarea
                placeholder="تفاصيل ووصف المنتج..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-[#030705] border border-emerald-900/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition h-24 resize-none"
              />
            </div>

            {/* عمود: image_url (عبر رفع صورة من جهازك) */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" /> صورة المنتج (image_url)
              </label>
              <div className="border-2 border-dashed border-emerald-900/60 rounded-xl p-4 text-center bg-[#030705] hover:border-emerald-500/50 transition cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {imageBase64 ? (
                  <div className="flex flex-col items-center">
                    <img src={imageBase64} alt="Preview" className="h-28 object-cover rounded-lg mb-2 border border-emerald-800/40" />
                    <span className="text-xs text-emerald-400 font-bold">تم اختيار الصورة</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 py-3">
                    <Upload className="w-6 h-6 text-emerald-500" />
                    <span className="text-xs text-gray-400">اختر صورة من حاسوبك</span>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full mt-6 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
            >
              {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
              <span>إضافة المنتج لقاعدة البيانات</span>
            </button>
          </form>
        </div>

        {/* 2. عرض المنتجات مقسمة حسب التبويبات */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* اختيار القسم (category) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#050C09] p-2 rounded-2xl border border-emerald-900/40">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`py-3 px-2 text-xs font-bold rounded-xl transition-all duration-300 text-center ${
                  activeTab === cat
                    ? 'bg-emerald-500 text-black shadow-lg font-extrabold'
                    : 'text-gray-400 hover:text-white hover:bg-emerald-950/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* عرض المنتجات */}
          <div className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 min-h-[400px]">
            <h3 className="text-md font-bold text-emerald-400 mb-4 flex items-center justify-between border-b border-emerald-900/30 pb-3">
              <span>قسم: {activeTab}</span>
              <span className="text-xs text-gray-500">العدد: {filteredProducts.length}</span>
            </h3>

            {loading ? (
              <div className="flex justify-center items-center py-20 text-emerald-400">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16 text-gray-500 text-sm flex flex-col items-center gap-2">
                <ImageIcon className="w-10 h-10 text-emerald-950" />
                <span>لا توجد منتجات مضافة لـ "{activeTab}" حتى الآن.</span>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#030705] border border-emerald-900/40 rounded-xl p-4 flex gap-3 items-start justify-between group hover:border-emerald-500/40 transition"
                  >
                    <div className="flex gap-3 overflow-hidden">
                      <img
                        src={item.image_url || '/product-1.jpg'}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border border-emerald-900/40 shrink-0"
                      />
                      <div className="space-y-1 truncate">
                        <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                        <p className="text-xs text-emerald-400 font-semibold">{item.price ? item.price : 'بدون سعر'}</p>
                        {item.description && (
                          <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition shrink-0"
                      title="حذف المنتج"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}