"use client";
import React, { useState } from 'react';
import { X, ShoppingBag, ArrowLeft } from 'lucide-react';

export const CircularCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    { 
      title: "الأدوية", 
      icon: "💊", 
      count: "120+ منتج",
      subtitle: "منتجات دوائية موثوقة لاحتياجاتك الصحية.",
      description: "تصفح مجموعة المنتجات الدوائية المتوفرة لدينا، مع معلومات واضحة عن كل منتج لمساعدتك على الوصول إلى ما تبحث عنه بسهولة."
    },
    { 
      title: "العناية بالبشرة", 
      icon: "✨", 
      count: "85+ منتج",
      subtitle: "روتين عناية يبدأ من اختيارك الصحيح.",
      description: "اكتشف منتجات العناية بالبشرة من منظفات ومرطبات وسيرومات وواقيات شمس، لتمنح بشرتك عناية يومية متكاملة."
    },
    { 
      title: "الزيوت الطبيعية", 
      icon: "🌿", 
      count: "40+ منتج",
      subtitle: "لمسة من الطبيعة في روتين عنايتك.",
      description: "اكتشف تشكيلة من الزيوت الطبيعية والنباتية مثل زيت الأرغان، الخروع، جوز الهند وغيرها، للعناية بالشعر والبشرة والجسم."
    },
    { 
      title: "الفيتامينات", 
      icon: "💊", 
      count: "65+ منتج",
      subtitle: "ادعم نمط حياتك باختياراتك الغذائية الذكية.",
      description: "اكتشف مجموعة من الفيتامينات والمكملات الغذائية المختارة بعناية لتناسب مختلف احتياجاتك اليومية."
    },
    { 
      title: "العناية بالشعر", 
      icon: "💇", 
      count: "50+ منتج",
      subtitle: "كل ما يحتاجه شعرك ليبدو أكثر صحة وحيوية.",
      description: "اكتشف مجموعة مختارة من الشامبوهات، الزيوت، السيرومات ومنتجات العناية بالشعر وفروة الرأس، بعناية تناسب احتياجاتك اليومية."
    },
  ];

  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
        الأقسام الرئيسية
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((cat, idx) => (
          <div key={idx} onClick={() => setSelectedCategory(cat)} className="flex flex-col items-center group cursor-pointer">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-emerald-950/80 to-[#050B08] border-2 border-emerald-800/40 group-hover:border-emerald-400 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <span className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </span>
              <span className="text-xs text-emerald-400 font-medium">{cat.count}</span>
            </div>
            <h3 className="mt-4 text-gray-200 font-bold group-hover:text-emerald-400 transition-colors">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة التعريفية */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#030705] border border-emerald-800/60 w-full max-w-lg rounded-3xl p-8 relative shadow-2xl">
            <button onClick={() => setSelectedCategory(null)} className="absolute top-4 left-4 text-gray-400 hover:text-white">
              <X />
            </button>
            
            <div className="text-center">
              <div className="text-5xl mb-4">{selectedCategory.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCategory.title}</h3>
              <p className="text-emerald-400 font-medium mb-4">{selectedCategory.subtitle}</p>
              <p className="text-gray-400 text-sm mb-8">{selectedCategory.description}</p>
              
              <a href="#contact" onClick={() => setSelectedCategory(null)} className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition">
                <span>تصفح منتجات {selectedCategory.title}</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};