import React from 'react';
import { CheckCircle, Zap, Shield, Globe, Clock, Users, CreditCard, Smartphone } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Payments',
      description: 'Sub-second settlement times with enterprise-grade Lightning infrastructure',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Hardware Security Modules (HSM) and multi-signature wallet protection',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Global Lightning Network',
      description: 'Access to the entire Lightning Network ecosystem worldwide',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: CheckCircle,
      title: 'Hosted & Maintained',
      description: '99.9% uptime guarantee with full infrastructure management by Azzamo',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const features = [
    {
      icon: CreditCard,
      title: 'Multiple Cards',
      description: 'Create unlimited cards per account with individual balances'
    },
    {
      icon: Smartphone,
      title: 'NFC Compatible',
      description: 'Works with any NFC-enabled device and payment terminal'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Instant notifications and transaction history'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Expert support team available around the clock'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Azzamo BoltCard Hub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by Lightning experts, designed for the future of payments
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`${benefit.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${benefit.color}`} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Everything You Need for Lightning Payments
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to make Bitcoin payments as easy as tapping your card
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 rounded-lg p-2 mr-3">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">&lt;1s</div>
              <div className="text-gray-600 font-medium">Average Settlement</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;