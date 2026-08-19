'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CircularCategories } from '@/components/CircularCategories';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { AnimatedCards } from '@/components/AnimatedCards';
import { ProductsSection } from '@/components/ProductsSection';
import { TrustAndCTA } from '@/components/TrustAndCTA';
import { FullCatalog } from '@/components/FullCatalog'; // استيراد واجهة المتجر المتكامل

export default function Home() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#030705] text-white font-sans dir-rtl overflow-x-hidden">
      <Navbar />
      
      {/* تمرير دالة فتح المتجر لزر الهيرو العلوي */}
      <Hero onOpenCatalog={() => setIsCatalogOpen(true)} />
      
      <CircularCategories />
      <BackgroundVideo />
      
      <AnimatedCards />
      <ProductsSection />
      
      {/* تمرير دالة فتح المتجر لزر ابدأ الآن في نهاية الصفحة */}
      <TrustAndCTA onOpenCatalog={() => setIsCatalogOpen(true)} />

      {/* نافذة المتجر المتكامل والشامل للبحث والفلترة */}
      <FullCatalog isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />

      <footer className="bg-[#020503] border-t border-emerald-900/30 py-6 text-center text-gray-500 text-xs">
        جميع الحقوق محفوظة © {new Date().getFullYear()} PARAPHARMACY.
      </footer>
    </main>
  );
}