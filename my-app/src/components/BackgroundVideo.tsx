import React from 'react';

export const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden my-12 flex items-center justify-center">
      {/* 1. استدعاء الفيديو المحلي من مجلد public */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-105"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* 2. التدرجات الذكية لدمج حواف الفيديو تماماً مع الخلفية السوداء */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030705] via-transparent to-[#030705]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030705] via-transparent to-[#030705]" />
      <div className="absolute inset-0 bg-[#030705]/30 backdrop-blur-[1px]" />

      {/* 3. النص فوق الفيديو */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
          Innovation & Technology
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          تقنيات صيدلانية متطورة لرعايتك
        </h2>
        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
          نجمع بين الدقة الطبية وأحدث التقنيات لضمان وصول المنتجات الصحية المعتمدة إليك بأعلى معايير الجودة.
        </p>
      </div>
    </div>
  );
};