'use client';

import React from 'react';
import { Leaf } from 'lucide-react';

export default function BrandLogo() {
  return (
    <a href="#hero" className="flex items-center gap-2.5 group transition-transform active:scale-95">
      <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
        <Leaf className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-black tracking-widest text-white font-mono group-hover:text-emerald-400 transition-colors">
          PARAPHARMACY
        </span>
        <span className="text-[9px] text-gray-400 font-light tracking-wider uppercase">
          HEALTH & CARE
        </span>
      </div>
    </a>
  );
}