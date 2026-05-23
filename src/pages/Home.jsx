import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </>
  );
}
