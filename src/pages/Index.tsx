
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CampaignSection from '../components/CampaignSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <CampaignSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
