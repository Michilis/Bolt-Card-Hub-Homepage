import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickConnectPanel from '../components/QuickConnectPanel';
import TutorialsSection from '../components/TutorialsSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <QuickConnectPanel />
      <TutorialsSection />
    </main>
  );
};

export default Home;