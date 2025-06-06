import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BookOpen, Server, ArrowRight } from 'lucide-react';

const CallToActionStrip = () => {
  const handleConnectNow = () => {
    // This would typically open LNURL-auth flow
    alert('LNURL-auth connection flow would open here');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to activate your card?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users already using BoltCard with Azzamo's Lightning infrastructure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleConnectNow}
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Connect Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <Link
              to="/docs"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Read Docs
            </Link>
            
            <Link
              to="/node"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              <Server className="h-5 w-5 mr-2" />
              View Node
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionStrip;