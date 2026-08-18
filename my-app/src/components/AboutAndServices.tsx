import React from 'react';
import { Pill, Sparkles, Truck, UserCheck } from 'lucide-react';

export const AboutAndServices = () => {
  const services = [
    {
      icon: <Pill className="w-8 h-8 text-emerald-400" />,
      title: "الأدوية والمنتجات الصحية",
      desc: "منتجات صحية مختارة بعناية لتلبية احتياجاتك اليومية وفق أعلى المعايير."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-400" />,
      title: "العناية الشخصية",
      desc: "مجموعة متنوعة من منتجات العناية بالبشرة والجسم والشعر المعتمدة."
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-400" />,
      title: "توصيل سريع",
      desc: "استلم طلبك بسهولة أينما كنت، وفق نطاق التوصيل المتاح في الجزائر."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-emerald-400" />,
      title: "استشارة وتوجيه",
      desc: "مساعدة وإرشادات متخصصة لمساعدتك على اختيار المنتجات المناسبة."
    }
  ];

  return (
    <>
      {/* قسم تعريفي */}
      <section id="about" className="bg-[#050C09] py-20 border-y border-emerald-900/30 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3 block">
            ABOUT PHARMACY
          </span>
          <h2 className="text-3xl font-bold text-white mb-6">رعاية صحية أقرب إليك</h2>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light">
            في صيدليتنا، نؤمن بأن الحصول على المنتجات الصحية التي تحتاجها يجب أن يكون سهلًا، سريعًا، وموثوقًا. لذلك نسعى إلى توفير مجموعة متنوعة من المنتجات الصحية ومنتجات العناية الشخصية، مع تجربة بسيطة ومريحة لكل عميل.
          </p>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">كل ما تحتاجه لصحتك... في مكان واحد</h2>
          <p className="text-gray-400 text-sm">خدمات صيدلانية متكاملة لضمان راحتك وسلامتك</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-500/50 hover:bg-emerald-950/40 transition-all duration-300 text-right group">
              <div className="p-3 w-fit rounded-xl bg-emerald-950/80 border border-emerald-800/40 mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};