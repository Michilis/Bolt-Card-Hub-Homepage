import { useEffect } from 'react';
import { config } from '../config/env';

const PlausibleAnalytics: React.FC = () => {
  useEffect(() => {
    // Only load analytics if domain is configured and not in debug mode
    if (!config.analytics.plausibleDomain || config.debug) {
      return;
    }

    // Check if script already exists
    if (document.querySelector(`script[src="${config.analytics.plausibleSrc}"]`)) {
      return;
    }

    // Create and append the Plausible script
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', config.analytics.plausibleDomain);
    script.src = config.analytics.plausibleSrc;
    
    // Add error handling
    script.onerror = () => {
      console.warn('Failed to load Plausible Analytics');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[src="${config.analytics.plausibleSrc}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PlausibleAnalytics; 