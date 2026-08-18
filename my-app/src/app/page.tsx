'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CircularCategories } from '@/components/CircularCategories';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { AnimatedCards } from '@/components/AnimatedCards';
import { ProductsSection } from '@/components/ProductsSection';
import { TrustAndCTA } from '@/components/TrustAndCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030705] text-white font-sans dir-rtl overflow-x-hidden">
      <Navbar />
      <Hero />
      <CircularCategories />
      <BackgroundVideo />
      
      {/* البطاقات الأصلية المتحركة والمنتجات */}
      <AnimatedCards />
      <ProductsSection />
      <TrustAndCTA />

      <footer className="bg-[#020503] border-t border-emerald-900/30 py-6 text-center text-gray-500 text-xs">
        جميع الحقوق محفوظة © {new Date().getFullYear()} PARAPHARMACY.
      </footer>
    </main>
  );
}