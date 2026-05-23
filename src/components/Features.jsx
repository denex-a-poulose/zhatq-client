import React from 'react';
import { Storefront, Lightning, ChatsCircle } from '@phosphor-icons/react';

export default function Features() {
  const features = [
    {
      title: "Instant Setup",
      description: "Launch your store in minutes without any coding. Just connect your WhatsApp Business account and start selling.",
      icon: <Lightning size={36} weight="fill" className="text-[#111]" />,
      bg: "bg-[#FFE135]"
    },
    {
      title: "Automated Replies",
      description: "Deliver 24/7 customer support. Automatically handle FAQs, order updates, and simple queries to save time.",
      icon: <ChatsCircle size={36} weight="fill" className="text-[#111]" />,
      bg: "bg-[#34B7F1]"
    },
    {
      title: "Full Storefront",
      description: "Manage your products, track inventory, and process orders entirely within the native WhatsApp ecosystem.",
      icon: <Storefront size={36} weight="fill" className="text-[#111]" />,
      bg: "bg-[#FFB6C1]"
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#F4F0EB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className={`bg-white p-8 border-[3px] border-[#111] shadow-[6px_6px_0_0_#111] hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-[8px_8px_0_0_#111] transition-all flex flex-col items-start group ${idx % 2 === 0 ? 'hand-drawn' : 'hand-drawn-alt'}`}>
            <div className={`p-4 border-[3px] border-[#111] ${feature.bg} shadow-[3px_3px_0_0_#111] mb-6 group-hover:scale-105 transition-transform ${idx % 2 !== 0 ? 'hand-drawn' : 'hand-drawn-alt'}`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-black text-[#111] mb-3 uppercase tracking-wide">{feature.title}</h3>
            <p className="text-[#111] font-medium leading-relaxed text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
