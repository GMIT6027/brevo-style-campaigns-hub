
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Complete Email Marketing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Everything you need to create, send, and optimize your email campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Email Campaign Builder",
                description: "Create beautiful emails with our drag-and-drop editor. No design skills required.",
                icon: "✉️"
              },
              {
                title: "Advanced Analytics",
                description: "Track opens, clicks, and conversions to optimize your campaigns for better results.",
                icon: "📊"
              },
              {
                title: "Automation Workflows",
                description: "Set up triggered emails based on customer behavior and engage at the right moment.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => navigate('/login')}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Stats />
      <Testimonials />
      
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to grow your business?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of marketers who have already taken their email marketing to the next level
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => navigate('/login')}
            >
              Sign Up with Google
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-gray-500">
              No credit card required. Free plan available.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
