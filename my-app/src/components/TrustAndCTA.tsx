import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

export const TrustAndCTA = () => {
  const trustPoints = ["منتجات موثوقة 100%", "خدمة احترافية ممتازة", "طلب سهل وسريع", "دعم ومساعدة متواصلة"];

  return (
    <>
      {/* قسم الثقة */}
      <section id="trust" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">لأن صحتك تستحق الثقة</h2>
          <p className="text-gray-400 text-sm">جودة نهتم بها، خدمة نعتز بها، وتجربة نضع فيها احتياجاتك أولًا.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-gray-200 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* قسم Call To Action */}
      <section id="contact" className="bg-gradient-to-b from-[#050C09] to-[#020503] text-white py-20 px-6 border-t border-emerald-900/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">جاهز لتجربة أسهل للعناية بصحتك؟</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            اكتشف منتجاتنا وتواصل معنا اليوم، واجعل احتياجاتك الصحية أقرب إليك.
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 text-xs mb-10 shadow-lg">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>مع إمكانية التوصيل إلى كافة الولايات الجزائرية 🇩🇿</span>
          </div>

          <div>
            <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 text-lg">
              ابدأ الآن
            </button>
          </div>
        </div>
      </section>
    </>
  );
};