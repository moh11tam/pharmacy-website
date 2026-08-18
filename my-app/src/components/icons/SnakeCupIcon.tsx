import React from 'react';

export const SnakeCupIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`fill-none stroke-emerald-400 stroke-[1.5] stroke-linecap-round stroke-linejoin-round ${className}`}>
    {/* الكأس العصري */}
    <path d="M6 8h12M7 8l1 7a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4l1-7" />
    <path d="M9 19h6M12 19v3" />
    {/* الأفعى العصرية الملفوفة بتنسيق حدسي */}
    <path d="M12 2a2 2 0 0 0-2 2c0 1.5 2 2.5 2 4s-2 2.5-2 4a2 2 0 0 0 2 2" className="stroke-emerald-300 stroke-[2]" />
    <circle cx="12" cy="2.5" r="0.5" fill="#34d399" />
  </svg>
);