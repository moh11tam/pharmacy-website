"use client";
import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const fullText = "صحتك أولويتنا... والعناية بك تبدأ من هنا.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90); // السرعة بالعرض البطيء

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 py-20 text-center relative overflow-hidden">
      {/* توهج خلفية أخضر وأسود */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* العنوان المتحرك */}
      <div className="min-h-[120px] flex items-center justify-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight text-white tracking-wide">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse text-emerald-400">|</span>
        </h1>
      </div>

      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        اكتشف عالمًا من الرعاية الصحية الموثوقة، واحصل على منتجاتك الصحية والعناية الشخصية بسهولة مع خدمة تهتم بك في كل خطوة.
      </p>

      <div className="flex justify-center gap-4">
        <a href="#categories" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-2xl transition shadow-xl shadow-emerald-500/20">
          تصفح منتجاتنا
        </a>
        <a href="#contact" className="px-8 py-4 bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 hover:bg-emerald-900/60 font-semibold rounded-2xl transition">
          تواصل معنا
        </a>
      </div>
    </section>
  );
};