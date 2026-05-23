import React from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '+918590616035';
const CONTACT_MESSAGE = encodeURIComponent("Hi! I have a question about zhatQ. Can you help me out?");

export default function Footer() {
  const contactLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${CONTACT_MESSAGE}`;

  return (
    <footer className="w-full border-t-[3px] border-[#111] bg-[#F4F0EB] mt-auto hand-drawn">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 font-bold text-sm text-[#111] uppercase tracking-wide">
        <p>© {new Date().getFullYear()} zhatQ. A product of <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00E676] transition-colors">Safora</a>.</p>
        <div className="flex gap-8 items-center">
          <Link to="/privacy" className="hover:text-[#00E676] hover:underline transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-[#00E676] hover:underline transition-colors">Terms</Link>
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00E676] hover:underline transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
