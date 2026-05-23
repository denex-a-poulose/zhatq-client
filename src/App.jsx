import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-roboto text-[#111] bg-[#F4F0EB] selection:bg-[#00E676] selection:text-[#111] relative">
        <GrainOverlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
