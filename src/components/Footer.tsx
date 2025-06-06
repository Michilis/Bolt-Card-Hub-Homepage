import React from 'react';
import { Zap, Github, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config/env';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-yellow-400" />
                <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl font-bold">
                {config.company.name} <span className="text-blue-400">BoltCard Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Powering the future of payments with Lightning Network infrastructure. 
              Secure, fast, and reliable BoltCard hosting for everyone.
            </p>
            <div className="text-sm text-gray-500">
              Powered by <span className="text-yellow-400 font-semibold">{config.company.name}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/docs" className="hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors duration-200">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/node" className="hover:text-white transition-colors duration-200">
                  Node Stats
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-3">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href={config.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Telegram
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href={`mailto:${config.company.supportEmail}`}
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 {config.company.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;