import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-roboto text-[#111] bg-[#F4F0EB] selection:bg-[#00E676] selection:text-[#111] relative">
      <GrainOverlay />
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full relative z-10">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
