import React from 'react';
import SplitHero from './components/SplitHero';
import StorySection from './components/StorySection';
import MatchSection from './components/MatchSection';
import TrustSection from './components/TrustSection';
import ImpactSection from './components/ImpactSection';
import CreativeSection from './components/CreativeSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-charcoal bg-offwhite min-h-screen">
      <SplitHero />
      <StorySection />
      
      {/* New Sections */}
      <MatchSection />
      <TrustSection />
      <ImpactSection />
      <CreativeSection />

      <PrivacySection />
      <Footer />
    </div>
  );
};

export default App;