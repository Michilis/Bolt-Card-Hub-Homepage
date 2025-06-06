import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { config } from '../config/env';

const ProxyDebugInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!config.debug) {
    return null; // Don't show when DEBUG is false
  }

  const debugInfo = {
    'Current URL': window.location.href,
    'Origin': window.location.origin,
    'Pathname': window.location.pathname,
    'Base Element': document.querySelector('base')?.href || 'None',
    'User Agent': navigator.userAgent,
    'Referrer': document.referrer || 'None',
    'Debug Mode': config.debug ? 'Enabled' : 'Disabled',
    'Environment': import.meta.env.MODE,
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-md">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Info className="h-4 w-4" />
            <span className="text-sm font-medium">Debug Info</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {isExpanded && (
          <div className="px-3 pb-3 space-y-2">
            {Object.entries(debugInfo).map(([key, value]) => (
              <div key={key} className="text-xs">
                <span className="text-gray-400">{key}:</span>
                <div className="text-green-400 break-all font-mono">{value}</div>
              </div>
            ))}
            
            <div className="mt-3 pt-2 border-t border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Test Paths:</div>
              {[
                './docs/overview.md',
                'docs/overview.md',
                '/docs/overview.md',
                `${window.location.origin}${window.location.pathname}docs/overview.md`
              ].map((path, index) => (
                <button
                  key={index}
                  onClick={async () => {
                    try {
                      const response = await fetch(path);
                      console.log(`Test fetch ${path}:`, response.status, response.statusText);
                      alert(`${path}: ${response.status} ${response.statusText}`);
                    } catch (error) {
                      console.error(`Test fetch ${path}:`, error);
                      alert(`${path}: Error - ${error}`);
                    }
                  }}
                  className="block w-full text-left text-xs text-blue-400 hover:text-blue-300 py-1 truncate"
                >
                  Test: {path}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProxyDebugInfo; 