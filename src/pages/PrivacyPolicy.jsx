import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#F4F0EB] font-roboto text-[#111]">
      {/* Header */}
      <div className="w-full bg-[#F4F0EB] border-b-[3px] border-[#111] py-4 sticky top-0 z-50 hand-drawn-alt">
        <div className="max-w-4xl mx-auto px-6 flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 bg-white border-[3px] border-[#111] shadow-[3px_3px_0_0_#111] px-4 py-2 font-bold uppercase text-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#111] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0_0_#111] transition-all hand-drawn">
            <ArrowLeft size={18} weight="bold" />
            Back
          </Link>
          <span className="text-2xl font-black tracking-tight uppercase">zhatQ</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border-[3px] border-[#111] shadow-[8px_8px_0_0_#111] p-8 sm:p-12 hand-drawn">
          
          <div className="inline-block bg-[#FFB6C1] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-5 py-2 mb-8 hand-drawn-alt">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Privacy Policy</h1>
          </div>

          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-10">Last Updated: May 23, 2026</p>

          <div className="space-y-10 text-lg leading-relaxed">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">1. Introduction</h2>
              <p className="mt-4">
                zhatQ ("we," "our," or "us") is a product of <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. zhatQ is managed, maintained, and operated by <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a>.
              </p>
              <p className="mt-3">
                By accessing or using zhatQ, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our services immediately.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">2. Information We Collect</h2>
              <p className="mt-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and billing details when you register or contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and session duration.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers.</li>
                <li><strong>WhatsApp Data:</strong> Phone numbers and message metadata necessary to facilitate e-commerce transactions through WhatsApp on your behalf.</li>
              </ul>
            </section>

            {/* WhatsApp Communications */}
            <section>
              <div className="bg-[#E7FCE3] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] p-6 hand-drawn-alt">
                <h2 className="text-2xl font-black uppercase mb-4">3. WhatsApp & Messaging Communications</h2>
                <p className="mt-2">
                  By providing your phone number and opting in, you consent to receive communications from <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a> through WhatsApp and other messaging platforms. These communications may include:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Account notifications</li>
                  <li>Service updates</li>
                  <li>Customer support responses</li>
                  <li>Authentication messages</li>
                  <li>Appointment or booking updates</li>
                  <li>Transactional notifications</li>
                  <li>Other service-related communications</li>
                </ul>
                <p className="mt-4 font-bold">We do not send unsolicited spam messages.</p>
                <p className="mt-4">Users may opt out of WhatsApp communications at any time by:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Replying <strong>"STOP"</strong> to any WhatsApp message</li>
                  <li>Contacting our support team</li>
                  <li>Emailing us at <a href="mailto:hello@safora.com" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">hello@safora.com</a></li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">4. How We Use Your Information</h2>
              <p className="mt-4">We use your information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide, operate, and maintain the zhatQ platform</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you regarding updates, support, and promotions</li>
                <li>Improve and personalize your experience</li>
                <li>Detect and prevent fraud or unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">5. Data Sharing & Disclosure</h2>
              <p className="mt-4">We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform (e.g., hosting, analytics, payment processing).</li>
                <li><strong>Meta/WhatsApp:</strong> As required to facilitate WhatsApp Business API services.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong><a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline hover:text-[#00E676] transition-colors">Safora</a>:</strong> As zhatQ's parent company, Safora may access data for operational and administrative purposes.</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">6. Data Security</h2>
              <p className="mt-4">
                We implement industry-standard security measures to protect your personal information. However, no method of electronic storage or transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">7. Cookies & Tracking</h2>
              <p className="mt-4">
                We may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">8. Contact Us</h2>
              <p className="mt-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 bg-[#F4F0EB] border-[2px] border-[#111] shadow-[3px_3px_0_0_#111] p-5 hand-drawn">
                <p className="font-bold"><a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline hover:text-[#00E676] transition-colors">Safora</a> (Parent Company of zhatQ)</p>
                <p className="mt-1">Email: <a href="mailto:hello@safora.com" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">hello@safora.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
