import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

export default function TermsAndConditions() {
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

          <div className="inline-block bg-[#34B7F1] text-[#111] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] px-5 py-2 mb-8 hand-drawn-alt">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Terms & Conditions</h1>
          </div>

          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-10">Last Updated: May 23, 2026</p>

          <div className="space-y-10 text-lg leading-relaxed">

            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">1. Agreement to Terms</h2>
              <p className="mt-4">
                By accessing or using zhatQ, a product of <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a>, you agree to be bound by these Terms and Conditions. zhatQ is managed, maintained, and operated by <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a>. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">2. Description of Service</h2>
              <p className="mt-4">
                zhatQ provides a platform that enables businesses to build and manage e-commerce storefronts on WhatsApp. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>WhatsApp-based storefront creation and management</li>
                <li>Automated chatbot replies for customer interaction</li>
                <li>Product catalog management</li>
                <li>Order processing and tracking</li>
                <li>Payment integration facilitation</li>
                <li>Analytics and reporting dashboards</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">3. User Responsibilities</h2>
              <p className="mt-4">As a user of zhatQ, you agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the platform in compliance with all applicable laws and regulations</li>
                <li>Not use the service for any unlawful, fraudulent, or malicious activity</li>
                <li>Comply with WhatsApp's Terms of Service and Business Policies</li>
                <li>Not send unsolicited or spam messages through our platform</li>
              </ul>
            </section>

            {/* WhatsApp Compliance */}
            <section>
              <div className="bg-[#E7FCE3] border-[3px] border-[#111] shadow-[4px_4px_0_0_#111] p-6 hand-drawn">
                <h2 className="text-2xl font-black uppercase mb-4">4. WhatsApp & Messaging Compliance</h2>
                <p className="mt-2">
                  By using zhatQ, you acknowledge that all communications sent through our platform via WhatsApp must comply with Meta's WhatsApp Business Policy and Commerce Policy. You are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Obtaining proper consent from your customers before sending messages</li>
                  <li>Providing clear opt-out mechanisms to your end users</li>
                  <li>Ensuring your product listings and business practices comply with applicable laws</li>
                  <li>Not engaging in prohibited business categories as defined by Meta</li>
                </ul>
                <p className="mt-4">
                  <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a> reserves the right to suspend or terminate accounts that violate these policies without prior notice.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">5. Intellectual Property</h2>
              <p className="mt-4">
                All content, features, and functionality of zhatQ — including but not limited to text, graphics, logos, icons, and software — are the exclusive property of <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a> and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">6. Limitation of Liability</h2>
              <p className="mt-4">
                zhatQ and <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a> shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your use or inability to use the service</li>
                <li>Any unauthorized access to your data</li>
                <li>Interruptions or errors in WhatsApp API services</li>
                <li>Actions taken by Meta/WhatsApp affecting your account</li>
                <li>Loss of profits, revenue, or data</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">7. Termination</h2>
              <p className="mt-4">
                We reserve the right to suspend or terminate your account at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">8. Modifications to Terms</h2>
              <p className="mt-4">
                <a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">Safora</a> reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of zhatQ after any modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn">9. Governing Law</h2>
              <p className="mt-4">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 bg-[#FFE135] inline-block px-3 py-1 border-[2px] border-[#111] shadow-[2px_2px_0_0_#111] hand-drawn-alt">10. Contact Us</h2>
              <p className="mt-4">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 bg-[#F4F0EB] border-[2px] border-[#111] shadow-[3px_3px_0_0_#111] p-5 hand-drawn">
                <p className="font-bold"><a href="https://safora.xyz" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] underline hover:text-[#00E676] transition-colors">Safora</a> (Parent Company of zhatQ)</p>
                <p className="mt-1">Email: <a href="mailto:admin@safora.xyz" className="text-[#128C7E] underline font-bold hover:text-[#00E676] transition-colors">admin@safora.xyz</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
