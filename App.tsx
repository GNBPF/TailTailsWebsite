import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ModalOverlay from './components/ModalOverlay';
import SplitHero from './components/SplitHero';
import StorySection from './components/StorySection';
import MatchSection from './components/MatchSection';
import TrustSection from './components/TrustSection';
import ImpactSection from './components/ImpactSection';
import CreativeSection from './components/CreativeSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'none' | 'subscribe' | 'download'>('none');

  const openSubscribe = () => setActiveModal('subscribe');
  const openDownload = () => setActiveModal('download');
  const closeModal = () => setActiveModal('none');

  return (
    <div className="font-sans text-charcoal bg-offwhite min-h-screen">
      <Navbar onOpenWaitlist={openSubscribe} />
      
      <SplitHero />
      
      <div id="how-it-works">
        <StorySection />
      </div>
      
      <div id="mission">
        <MatchSection />
      </div>

      <div id="safety">
        <TrustSection />
      </div>

      <ImpactSection />
      
      <div id="stories">
        <CreativeSection />
      </div>

      <PrivacySection />
      
      <Footer 
        onOpenWaitlist={openSubscribe} 
        onOpenDownload={openDownload} 
      />

      <ModalOverlay 
        activeModal={activeModal} 
        closeModal={closeModal} 
        openSubscribe={openSubscribe} 
      />
    </div>
  );
};

export default App;