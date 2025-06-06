import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CreditCard, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToQuickConnect = () => {
    const quickConnectSection = document.querySelector('section:nth-of-type(2)');
    if (quickConnectSection) {
      quickConnectSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm">
          <Zap className="h-4 w-4 mr-2" />
          Lightning Network Infrastructure
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            BoltCard
          </span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> connected </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            instantly
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Enterprise-grade Lightning payments with Azzamo's secure infrastructure. 
          No complex setup—just tap and pay with Bitcoin.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            99.9% Uptime
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            Sub-second Payments
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            Bank-grade Security
          </div>
        </div>

        {/* Primary CTA */}
        <div className="space-y-4">
          <button
            onClick={scrollToQuickConnect}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Connect Your BoltCard
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <div className="text-center">
            <Link
              to="/docs"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Read the documentation
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Card visual */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <CreditCard className="h-8 w-8" />
                    <div className="text-right">
                      <div className="text-xs opacity-70">NFC</div>
                      <div className="w-6 h-4 border border-white/30 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm opacity-80 font-medium">BoltCard</div>
                    <div className="text-xl font-bold">⚡ Lightning Ready</div>
                    <div className="text-xs opacity-70">Powered by Azzamo</div>
                  </div>
                </div>
                
                {/* Card pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating payment confirmation */}
            <div className="absolute -top-4 -right-4 bg-green-400 rounded-2xl p-3 shadow-lg animate-bounce">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;