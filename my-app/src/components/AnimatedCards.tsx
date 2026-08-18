"use client";

import React, { useState } from 'react';
import { Pill, Sparkles, Truck, ShieldCheck, X } from 'lucide-react';

interface CardInfo {
  title: string;
  desc: string;
  fullDetails: string;
  icon: React.ReactNode;
}

export const AnimatedCards = () => {
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);

  const cards: CardInfo[] = [
    {
      icon: <Pill className="w-8 h-8 text-emerald-400" />,
      title: "أدوية موثوقة",
      desc: "توفير كافة المستلزمات الطبية المعتمدة بضمان الجودة.",
      fullDetails: "نحرص في صيدليتنا على توفير كافة الأدوية والمستلزمات الطبية الأصلية والمعتمدة رسمياً، مع الالتزام بمعايير التخزين العالمية لضمان فعاليتها وسلامتك وسلامة عائلتك."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-400" />,
      title: "منتجات تجميلية",
      desc: "أفضل الماركات العالمية للعناية بالبشرة والشعر.",
      fullDetails: "تشكيلة مختارة بعناية من أفضل الماركات العالمية والمحلية الموثوقة للعناية بالبشرة، الشعر، والجسم، لتمنحك العناية المثالية التي تستحقها."
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-400" />,
      title: "توصيل لكافة الولايات",
      desc: "شحن سريع وآمن يغطي جميع 58 ولاية جزائرية.",
      fullDetails: "نوفر خدمة توصيل سريعة وآمنة تغطي كافة مناطق ومدن الولايات الـ 58 للوطن، لضمان وصول طلبيتك حتى باب منزلكم في أسرع وقت ممكن."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "استشارات مجانية",
      desc: "توجيه وتوصيات صحية من قبل صيادلة متخصصين.",
      fullDetails: "فريق من الصيادلة المتخصصين جاهز دائماً لتقديم النصائح والاستشارات الصحية المجانية، ومساعدتك في اختيار المنتجات المناسبة لحالتك الصحية بكل أمان."
    }
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCard(card)}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-emerald-950/30 to-[#050C09] border border-emerald-900/40 hover:border-emerald-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)] overflow-hidden cursor-pointer"
            >
              {/* توهج متدرج خلف البطاقة يظهر عند التمرير */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* النافذة المنبثقة التفصيلية */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-[#030705] border border-emerald-800/60 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            
            {/* زر إغلاق النافذة */}
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 left-5 text-gray-400 hover:text-white bg-emerald-950/60 p-2.5 rounded-full border border-emerald-900/50 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* الأيقونة والعنوان داخل النافذة */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center shrink-0">
                {selectedCard.icon}
              </div>
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">تفاصيل الخدمة</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{selectedCard.title}</h3>
              </div>
            </div>

            {/* النص التفصيلي */}
            <div className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-4 sm:p-5 mb-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {selectedCard.fullDetails}
              </p>
            </div>

            {/* زر إغلاق أو تأكيد */}
            <button
              onClick={() => setSelectedCard(null)}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm rounded-xl transition duration-300 text-center shadow-lg shadow-emerald-950/50"
            >
              حسناً، فهمت
            </button>
          </div>
        </div>
      )}
    </>
  );
};