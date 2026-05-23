import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F4F0EB] border-b-[3px] border-[#111] z-50 py-4 sticky top-0 hand-drawn-alt">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-black tracking-tight text-[#111] uppercase">zhatQ</span>
        </div>
        <div>
          <span className="bg-[#FFE135] text-[#111] px-5 py-2 border-[3px] border-[#111] text-sm font-bold tracking-widest uppercase shadow-[3px_3px_0_0_#111] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0_0_#111] transition-all cursor-default hand-drawn">
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
}
