import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Smartphone, CreditCard, Zap, ArrowRight, Users, CheckCircle, Play, ExternalLink } from 'lucide-react';
import { config } from '../config/env';

const TutorialsSection = () => {
  const steps = [
    {
      icon: Download,
      title: 'Download Bolt Wallet',
      description: 'Get the official app from your device\'s app store',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Smartphone,
      title: 'Scan QR or Enter URL',
      description: 'Connect to Azzamo Hub using the connection details above',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Zap,
      title: 'Create Wallet',
      description: 'Your Lightning wallet is created automatically',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: CreditCard,
      title: 'Connect Bolt Card',
      description: 'Hold your NFC card to your device to program it',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Play className="h-4 w-4 mr-2" />
            Get Started in Minutes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to know
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple 4-step process to get your BoltCard working with Lightning payments. 
            No technical knowledge required.
          </p>
        </div>

        {/* Main Tutorial Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16">
          {/* Tutorial Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Quick Setup Tutorial</h3>
              <p className="text-blue-100 text-lg">Follow these steps to activate your BoltCard</p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative group">
                    {/* Connection line (hidden on mobile) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                    )}
                    
                    <div className="relative z-10 text-center">
                      {/* Step number */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      
                      {/* Icon container */}
                      <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 w-fit mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                        <div className={`bg-gradient-to-r ${step.color} rounded-xl p-4`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        {step.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Success Banner */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎉 Done! You can now send and receive sats using your Bolt card
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                  Your BoltCard is now connected to the Lightning Network. Tap to pay at any compatible merchant or terminal worldwide.
                </p>
                
                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Instant payments</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Global compatibility</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Secure transactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download the Official App</h3>
            <p className="text-gray-600">Get the Bolt Card Wallet app to start using your Lightning payments</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href={config.apps.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            
            <a
              href={config.apps.android}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="text-xs text-green-100">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Support CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our expert support team is ready to help you set up your BoltCard and start making Lightning payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={config.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Users className="h-5 w-5 mr-2" />
                Join Telegram Support
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              
              <Link
                to="/docs"
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
              >
                View Full Documentation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">&lt;1s</div>
              <div className="text-gray-600 font-medium">Payment Speed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;