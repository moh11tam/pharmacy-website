'use client';

import React, { useState } from 'react';
import { Menu, X, Home, Pill, Sparkles, UserCheck, Shield, PhoneCall, Search } from 'lucide-react';
import BrandLogo from './BrandLogo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { title: "الرئيسية", icon: <Home className="w-4 h-4" />, href: "#hero" },
    { title: "منتجاتنا", icon: <Pill className="w-4 h-4" />, href: "#products" },
    { title: "خدماتنا", icon: <Sparkles className="w-4 h-4" />, href: "#services" },
    { title: "من نحن", icon: <UserCheck className="w-4 h-4" />, href: "#about" },
    { title: "لماذا نحن؟", icon: <Shield className="w-4 h-4" />, href: "#trust" },
    { title: "تواصل معنا", icon: <PhoneCall className="w-4 h-4" />, href: "#contact" },
  ];

  const filteredMenuItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#050B08]/90 border-b border-emerald-900/30 backdrop-blur-md shadow-lg">
        {/* الشعار */}
        <BrandLogo />

        {/* الروابط للشاشات الكبيرة */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-300 text-sm font-medium">
          <a href="#hero" className="hover:text-emerald-400 transition">الرئيسية</a>
          <a href="#products" className="hover:text-emerald-400 transition">منتجاتنا</a>
          <a href="#services" className="hover:text-emerald-400 transition">خدماتنا</a>
          <a href="#about" className="hover:text-emerald-400 transition">من نحن</a>
          <a href="#contact" className="hover:text-emerald-400 transition">تواصل معنا</a>
        </nav>

        {/* الأزرار الهامبرغر وتواصل معنا */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition shadow-lg active:scale-95"
          >
            تواصل معنا
          </a>

          {/* زر الهامبرغر للشاشات الصغيرة */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/60 transition"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* القائمة الجانبية عند الضغط على الهامبرغر */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/80 backdrop-blur-md">
          <div className="flex-1" onClick={() => setIsOpen(false)} />
          <div className="w-full max-w-xs bg-[#030705] h-full border-r border-emerald-900/40 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/30 mb-6">
                <BrandLogo />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-emerald-950/80 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="ابحث..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-emerald-950/30 border border-emerald-900/50 rounded-xl py-2.5 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-emerald-500/60"
                />
                <Search className="w-4 h-4 text-emerald-400 absolute right-3 top-3" />
              </div>

              <div className="space-y-1">
                {filteredMenuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-950/50 text-gray-300 hover:text-emerald-400 transition"
                  >
                    <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-900/40 text-emerald-400">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-white">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};