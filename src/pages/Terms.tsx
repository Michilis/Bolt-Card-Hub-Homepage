import React, { useState, useEffect } from 'react';
import { FileText, ArrowLeft, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdownLoader';
import { config } from '../config/env';

const Terms = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch('/legal/terms-conditions.md');
        if (!response.ok) {
          throw new Error(`Failed to load terms and conditions: ${response.status}`);
        }
        const markdown = await response.text();
        setContent(markdown);
      } catch (error) {
        console.error('Failed to load terms and conditions:', error);
        setContent('# Terms & Conditions\n\nFailed to load terms and conditions content.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading terms and conditions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                <FileText className="h-4 w-4 mr-2" />
                Legal Terms
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Terms & Conditions
              </h1>
              <p className="text-lg text-gray-600">
                Terms of service for using Azzamo BoltCard Hub
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 lg:p-12 mb-8">
          <div className="prose prose-lg max-w-none">
            {parseMarkdown(content)}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about these terms and conditions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${config.company.supportEmail}`}
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              <a
                href={config.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-200"
              >
                Visit Website
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;