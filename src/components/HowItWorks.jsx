import React from 'react';

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-6 bg-[#F4F0EB] border-b-[3px] border-[#111] overflow-hidden">
      <div className="max-w-4xl mx-auto relative">

        {/* The Paper Background */}
        <div
          className="relative bg-[#fffdf8] border-[3px] border-[#111] shadow-[8px_8px_0_0_#111] p-8 sm:p-16 transform -rotate-1 hand-drawn mx-auto max-w-3xl"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #e2e8f0 39px, #e2e8f0 40px)',
            backgroundPosition: '0 30px',
            fontFamily: "'Kalam', cursive",
          }}
        >
          {/* Red Margin Line */}
          <div className="absolute top-0 bottom-0 left-10 sm:left-12 w-[2px] bg-[#fca5a5] opacity-50"></div>

          {/* Hand-written Header */}
          <div className="pl-8 sm:pl-10 mb-14 relative mt-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111] transform -rotate-1 inline-block uppercase tracking-wide">
              How it works
            </h2>
            <svg className="absolute -bottom-3 left-2 w-32 sm:w-40 h-3 text-[#ff7f00]" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15Q50 5 100 10T195 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Flow Container */}
          <div className="pl-8 sm:pl-10 flex flex-col gap-10 text-2xl sm:text-3xl text-[#111] font-bold leading-relaxed">

            {/* Step 1 */}
            <div className="flex items-start gap-4 sm:gap-6 group">
              <div className="mt-1 text-[#ef4444] shrink-0 text-3xl sm:text-4xl">1.</div>
              <div className="mt-1">
                <span className="bg-[#fef08a] px-3 py-1 inline-block transform -rotate-1 shadow-[3px_3px_0_0_#111] border-[2px] border-[#111] hand-drawn uppercase tracking-tight text-xl sm:text-2xl">Shopify</span>
                <p className="mt-2 text-gray-800 leading-tight">Connect your existing store.</p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="pl-12 sm:pl-16 text-[#3b82f6] transform rotate-3 -mt-4 -mb-4">
              <svg width="30" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C30 20 10 35 20 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                <path d="M10 35L20 48L30 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 sm:gap-6 group">
              <div className="mt-1 text-[#ef4444] shrink-0 text-3xl sm:text-4xl">2.</div>
              <div className="mt-1">
                <span className="bg-[#bae6fd] px-3 py-1 inline-block transform rotate-1 shadow-[3px_3px_0_0_#111] border-[2px] border-[#111] hand-drawn-alt uppercase tracking-tight text-xl sm:text-2xl">zhatQ</span>
                <p className="mt-2 text-gray-800 leading-tight">We sync products & automate everything.</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="pl-14 sm:pl-20 text-[#3b82f6] transform -rotate-3 -mt-4 -mb-4">
              <svg width="30" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C5 20 30 35 20 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                <path d="M10 35L20 48L30 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 sm:gap-6 group">
              <div className="mt-1 text-[#ef4444] shrink-0 text-3xl sm:text-4xl">3.</div>
              <div className="mt-1">
                <span className="bg-[#bbf7d0] px-3 py-1 inline-block transform -rotate-2 shadow-[3px_3px_0_0_#111] border-[2px] border-[#111] hand-drawn uppercase tracking-tight text-xl sm:text-2xl">WhatsApp Store</span>
                <p className="mt-2 text-gray-800 leading-tight">Start selling instantly!</p>
              </div>
            </div>

          </div>

          {/* Doodles on the side */}
          <div className="absolute right-4 sm:right-12 top-20 opacity-40 transform rotate-12 hidden sm:block text-[#111]">
            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30H50M30 10V50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="4" strokeDasharray="6 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
