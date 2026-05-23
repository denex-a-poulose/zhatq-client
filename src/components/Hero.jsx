import React, { useState } from 'react';
import { RocketLaunch, CheckCircle, StarFour, ArrowBendRightDown, SealCheck, Sparkle, Checks } from '@phosphor-icons/react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="w-full relative bg-[#F4F0EB] overflow-hidden border-b-[3px] border-[#111] hand-drawn-alt">
      
      {/* Brutalist Marquee */}
      <div className="w-full bg-[#FFE135] border-b-[3px] border-[#111] py-2 flex overflow-hidden whitespace-nowrap hand-drawn">
        <div className="animate-marquee flex gap-8 items-center font-black uppercase text-sm tracking-widest">
          <span>❖ WhatsApp E-Commerce</span>
          <span>❖ The Future of Retail</span>
          <span>❖ Instant Storefronts</span>
          <span>❖ Automated Growth</span>
          <span>❖ WhatsApp E-Commerce</span>
          <span>❖ The Future of Retail</span>
          <span>❖ Instant Storefronts</span>
          <span>❖ Automated Growth</span>
          <span>❖ WhatsApp E-Commerce</span>
          <span>❖ The Future of Retail</span>
          <span>❖ Instant Storefronts</span>
          <span>❖ Automated Growth</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* Decorative Vintage Elements */}
        <div className="absolute top-20 left-10 hidden xl:block">
          <StarFour size={64} weight="fill" className="text-[#111]" />
        </div>
        <div className="absolute bottom-24 right-12 hidden xl:block z-10">
          <div className="bg-[#FFB6C1] p-4 border-[3px] border-[#111] shadow-[6px_6px_0_0_#111] hand-drawn-alt">
            <Sparkle size={48} weight="fill" className="text-[#111]" />
          </div>
        </div>

        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center z-10 relative">
          
          <div className="bg-white border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-4 py-1 mb-10 flex items-center gap-2 transform -rotate-2 hand-drawn">
            <SealCheck size={24} weight="fill" className="text-[#34B7F1]" />
            <span className="font-bold text-sm tracking-widest uppercase">Verified Early Access</span>
          </div>

          {/* Brutalist Typography */}
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-bold tracking-tighter text-[#111] mb-10 flex flex-col items-start leading-[1.05]">
            <div className="flex items-center flex-wrap gap-x-3 gap-y-4">
              <span>Turn</span>
              <span className="inline-block bg-[#00E676] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-4 py-0 sm:py-1 transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111] transition-all cursor-default select-none hand-drawn">
                WhatsApp
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-x-3 gap-y-4 mt-2 sm:mt-4">
              <span>into a</span>
              <span className="inline-block bg-[#00E676] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-4 py-0 sm:py-1 transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111] transition-all cursor-default select-none hand-drawn-alt">
                storefront
              </span>
            </div>
          </h1>

          <p className="max-w-xl text-xl font-medium bg-white border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-6 py-5 mb-12 text-[#111] hand-drawn">
            We handle the bots, payments, and inventory. You handle the cash. Start selling directly in chat without writing a single line of code.
          </p>

          <div className="w-full relative">
            <div className="absolute -top-12 -right-8 hidden md:block animate-bounce">
              <ArrowBendRightDown size={64} weight="bold" className="text-[#111]" />
            </div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] text-lg font-bold text-[#111] focus:outline-none focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-[2px_2px_0_0_#111] transition-all placeholder-gray-500 bg-[#fff] hand-drawn"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#111] text-[#fff] px-8 py-4 border-[3px] border-[#111] shadow-[4px_4px_0_0_#00E676] font-black uppercase tracking-wide active:translate-y-[4px] active:translate-x-[4px] active:shadow-[0px_0px_0_0_#00E676] transition-all flex items-center justify-center gap-3 hover:bg-[#333] hand-drawn-alt"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="bg-[#00E676] text-[#111] px-6 py-5 border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] flex items-center gap-3 max-w-lg hand-drawn">
                <CheckCircle size={28} weight="fill" />
                <span className="font-bold text-xl uppercase tracking-wide">You're on the list!</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: WhatsApp Chat UI Mockup */}
        <div className="hidden lg:flex lg:col-span-5 relative mt-8 lg:mt-0 items-center justify-center z-0">
          <div className="w-full max-w-sm mx-auto border-[3px] border-[#111] shadow-[8px_8px_0_0_#111] bg-white overflow-hidden hand-drawn-alt">
            
            {/* Chat Header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3 border-b-[3px] border-[#111]">
              <div className="w-10 h-10 bg-[#00E676] border-[3px] border-[#111] flex items-center justify-center font-black text-[#111] text-sm hand-drawn">
                zQ
              </div>
              <div>
                <p className="text-white font-bold text-sm">zhatQ Store</p>
                <p className="text-[#a6d7c5] text-xs">online</p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] px-4 py-5 flex flex-col gap-3 min-h-[380px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c0b7' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Bot message */}
              <div className="max-w-[85%] self-start">
                <div className="bg-white border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] px-4 py-3 hand-drawn">
                  <p className="text-sm font-medium">Hey there! 👋 Welcome to <strong>zhatQ Store</strong>. What are you looking for today?</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">10:30 AM</p>
                </div>
              </div>

              {/* User message */}
              <div className="max-w-[75%] self-end">
                <div className="bg-[#DCF8C6] border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] px-4 py-3 hand-drawn-alt">
                  <p className="text-sm font-medium">I want to order sneakers 👟</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <p className="text-[10px] text-gray-500">10:31 AM</p>
                    <Checks size={14} className="text-[#34B7F1]" weight="bold" />
                  </div>
                </div>
              </div>

              {/* Bot product card */}
              <div className="max-w-[85%] self-start">
                <div className="bg-white border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] overflow-hidden hand-drawn">
                  <div className="bg-[#FFE135] h-24 border-b-[2px] border-[#111] flex items-center justify-center">
                    <span className="text-4xl">👟</span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-bold">Air Max Classic</p>
                    <p className="text-xs text-gray-600 mt-0.5">Premium leather • White/Black</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-black text-[#111]">₹4,999</span>
                      <span className="bg-[#00E676] text-[#111] text-xs font-bold px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">Buy Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* User message */}
              <div className="max-w-[75%] self-end">
                <div className="bg-[#DCF8C6] border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] px-4 py-3 hand-drawn-alt">
                  <p className="text-sm font-medium">I'll take it! 🔥</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <p className="text-[10px] text-gray-500">10:32 AM</p>
                    <Checks size={14} className="text-[#34B7F1]" weight="bold" />
                  </div>
                </div>
              </div>

              {/* Bot confirmation */}
              <div className="max-w-[85%] self-start">
                <div className="bg-white border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] px-4 py-3 hand-drawn">
                  <p className="text-sm font-medium">Order confirmed! ✅ Your tracking link has been sent. Thanks for shopping with zhatQ!</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">10:32 AM</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2 border-t-[3px] border-[#111]">
              <div className="flex-1 bg-white border-[2px] border-[#111] px-4 py-2 text-sm text-gray-400 font-medium hand-drawn">
                Type a message...
              </div>
              <div className="bg-[#00E676] p-2 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">
                <RocketLaunch size={20} weight="fill" className="text-[#111]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
