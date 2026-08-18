import React from 'react';

export const CircularCategories = () => {
  const categories = [
    { title: "الأدوية", icon: "💊", count: "120+ منتج" },
    { title: "العناية بالبشرة", icon: "🧴", count: "85+ منتج" },
    { title: "الزيوت الطبيعية", icon: "🌿", count: "40+ منتج" },
    { title: "الفيتامينات", icon: "🧪", count: "65+ منتج" },
    { title: "العناية بالشعر", icon: "الجمال", iconEmoji: "✨", count: "50+ منتج" },
  ];

  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
        الأقسام الرئيسية
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            {/* الدائرة المتحركة */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-emerald-950/80 to-[#050B08] border-2 border-emerald-800/40 group-hover:border-emerald-400 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <span className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                {cat.iconEmoji || cat.icon}
              </span>
              <span className="text-xs text-emerald-400 font-medium">{cat.count}</span>
            </div>
            
            {/* العنوان أسفل الدائرة */}
            <h3 className="mt-4 text-gray-200 font-bold group-hover:text-emerald-400 transition-colors">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};