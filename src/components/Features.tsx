
import React from 'react';
import { Mail, Zap, BarChart3, Users, Target, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Create beautiful, responsive emails with our drag-and-drop editor. Send at the perfect time with AI optimization."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Set up automated workflows that nurture leads and convert prospects into customers on autopilot."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed reports. See opens, clicks, conversions, and ROI in real-time."
    },
    {
      icon: Users,
      title: "Contact Management",
      description: "Organize and segment your audience with smart lists. Personalize messages for better engagement."
    },
    {
      icon: Target,
      title: "A/B Testing",
      description: "Test subject lines, content, and send times to optimize your campaigns for maximum performance."
    },
    {
      icon: Shield,
      title: "Deliverability",
      description: "Ensure your emails reach the inbox with our industry-leading delivery rates and reputation management."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that help you create, send, and optimize email campaigns that drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
