import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import QuickConnectPanel from '../components/QuickConnectPanel';
import TutorialsSection from '../components/TutorialsSection';
import { updatePageSEO } from '../utils/seo';
import { pageSEO } from '../config/seo';

const Home = () => {
  useEffect(() => {
    updatePageSEO(pageSEO.home);
  }, []);

  return (
    <main>
      <HeroSection />
      <QuickConnectPanel />
      <TutorialsSection />
    </main>
  );
};

export default Home;