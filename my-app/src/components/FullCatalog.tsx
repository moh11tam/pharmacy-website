"use client";
import React, { useState, useEffect } from 'react';
import { X, Search, ShoppingBag, Filter } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const FullCatalog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await supabase.from('products').select('*');
      if (data) setProducts(data);
      setLoading(false);
    };
    fetchAllProducts();
  }, []);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#030705]/95 backdrop-blur-xl overflow-y-auto p-4 sm:p-8 animate-in zoom-in-95 duration-300">
      <div className="max-w-6xl mx-auto">
        {/* هيدر الصفحة */}
        <div className="flex justify-between items-center mb-8 sticky top-0 bg-[#030705]/80 backdrop-blur-md py-4 border-b border-emerald-900/30">
          <h2 className="text-2xl font-bold text-white">متجرنا المتكامل</h2>
          <button onClick={onClose} className="p-2 bg-emerald-950/50 rounded-full hover:bg-emerald-900 border border-emerald-800">
            <X className="text-emerald-400" />
          </button>
        </div>

        {/* شريط البحث */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <Search className="absolute right-4 top-3.5 text-emerald-600" />
          <input 
            type="text"
            placeholder="ابحث عن منتجك المفضل..."
            className="w-full bg-[#050C09] border border-emerald-900/50 rounded-2xl py-3 pr-12 pl-4 text-white placeholder-emerald-800 focus:border-emerald-500 outline-none transition"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* شبكة المنتجات */}
        {loading ? (
          <div className="text-center text-emerald-500 py-20">جاري تحميل المنتجات...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-4 hover:border-emerald-500 transition group">
                <img src={p.image_url} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-white font-bold mb-1">{p.title}</h3>
                <p className="text-emerald-400 font-bold mb-3">{p.price}</p>
                <button className="w-full py-2 bg-emerald-950/50 border border-emerald-900 text-emerald-300 rounded-lg group-hover:bg-emerald-500 group-hover:text-black transition font-bold">
                  طلب الآن
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};