import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t-[3px] border-[#111] bg-[#F4F0EB] mt-auto hand-drawn">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 font-bold text-sm text-[#111] uppercase tracking-wide">
        <p>© {new Date().getFullYear()} zhatQ. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#00E676] hover:underline transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#00E676] hover:underline transition-colors">Terms</a>
          <a href="#" className="hover:text-[#00E676] hover:underline transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
