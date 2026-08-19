"use client";
import React, { useState, useEffect } from 'react';
import { X, Search, ShoppingBag } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const FullCatalog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  
  // حالة التحكم بحقل البحث
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  
  // نص العنوان المتحرك
  const fullTitle = "كافة منتجاتنا في مكان واحد";
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    if (isOpen) {
      // جلب المنتجات
      const fetchProducts = async () => {
        const { data } = await supabase.from('products').select('*');
        if (data) setProducts(data);
        setLoading(false);
      };
      fetchProducts();

      // تأثير الكتابة البطيئة للعنوان
      let index = 0;
      setDisplayedTitle("");
      const timer = setInterval(() => {
        if (index <= fullTitle.length) {
          setDisplayedTitle(fullTitle.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#030705] overflow-y-auto">
      
      {/* الجزء الثابت (Sticky Header) - لا يتحرك مع الصفحة */}
      <div className="sticky top-0 z-50 bg-[#030705]/95 backdrop-blur-md border-b border-emerald-900/40 p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent h-8">
            {displayedTitle}
          </h2>
          
          <button onClick={onClose} className="p-2 bg-emerald-950/50 rounded-full border border-emerald-800 text-emerald-400 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* العدسة في الجانب وبجانبها العلامة التجارية المتدرجة */}
        <div className="flex items-center gap-4 justify-start">
          {!isSearchVisible ? (
            <div 
              onClick={() => setIsSearchVisible(true)}
              className="w-11 h-11 flex items-center justify-center bg-emerald-950/30 border border-emerald-800/50 rounded-full cursor-pointer hover:border-emerald-500 transition shrink-0"
            >
              <Search className="text-emerald-400 w-5 h-5" />
            </div>
          ) : null}

          {/* العلامة التجارية الشبه صيدلانية بتدرج لوني */}
          <span className="text-sm font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">
            DERMA-PHARMA
          </span>
        </div>

        {/* حقل البحث يظهر أسفل العدسة عند الضغط عليها */}
        {isSearchVisible && (
          <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
            <input 
              autoFocus
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full bg-[#050C09] border border-emerald-500 rounded-2xl py-3 px-4 text-white placeholder-emerald-800 outline-none transition text-sm"
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => !searchQuery && setIsSearchVisible(false)}
            />
          </div>
        )}
      </div>

      {/* منطقة المنتجات المتحركة تحت الهيدر الثابت */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        {loading ? (
          <div className="text-center text-emerald-500 py-20">جاري التحميل...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((p) => (
              <div key={p.id} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-4 hover:border-emerald-500 transition">
                <img src={p.image_url} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-white font-bold mb-1">{p.title}</h3>
                <p className="text-emerald-400 font-bold mb-3">{p.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};