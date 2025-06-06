import { SEOData } from '../utils/seo';
import { config } from './env';

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'Azzamo BoltCard Hub - Lightning Network NFC Payments',
    description: 'Connect your BoltCard in seconds with Azzamo\'s secure Lightning Network infrastructure. Fast, secure, and reliable Bitcoin contactless payments with NFC technology.',
    keywords: 'BoltCard, Lightning Network, Bitcoin, NFC payments, cryptocurrency, contactless payments, Lightning wallet, Bitcoin payments, Azzamo, NTAG424',
    canonicalUrl: `${config.hubUrl}/`,
    ogTitle: 'Azzamo BoltCard Hub - Lightning Network NFC Payments',
    ogDescription: 'The premier BoltCard hosting service. Connect your NFC card to the Lightning Network for instant Bitcoin payments.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Azzamo BoltCard Hub',
      'description': 'Lightning Network infrastructure for BoltCard NFC payments',
      'url': config.hubUrl,
      'logo': `${config.hubUrl}/logo.png`,
      'contactPoint': {
        '@type': 'ContactPoint',
        'email': config.company.supportEmail,
        'contactType': 'Customer Support'
      },
      'sameAs': [
        config.social.telegram,
        config.social.github
      ]
    }
  },

  node: {
    title: 'Lightning Node Status - Azzamo BoltCard Hub',
    description: 'Real-time status and connection details for Azzamo\'s Lightning Network node. Monitor uptime, capacity, and network connectivity for your BoltCard payments.',
    keywords: 'Lightning Node, Bitcoin node, Lightning Network status, node connectivity, BoltCard infrastructure, Bitcoin payments, node monitoring',
    canonicalUrl: `${config.hubUrl}/node`,
    ogTitle: 'Azzamo Lightning Node - Real-time Status & Connectivity',
    ogDescription: 'Monitor our Lightning Network node powering BoltCard payments. View real-time status, connection details, and network statistics.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Azzamo Lightning Node',
      'description': 'Enterprise-grade Lightning Network infrastructure',
      'provider': {
        '@type': 'Organization',
        'name': 'Azzamo'
      },
      'serviceType': 'Lightning Network Node',
      'areaServed': 'Worldwide',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': config.hubUrl,
        'serviceType': 'Lightning Network'
      }
    }
  },

  docs: {
    title: 'BoltCard Documentation - Setup Guide & FAQ | Azzamo Hub',
    description: 'Complete guide to setting up and using BoltCards with Azzamo Hub. Learn how to connect, configure, and use your NFC Lightning Network payment card.',
    keywords: 'BoltCard setup, Lightning Network tutorial, NFC card setup, Bitcoin payment setup, BoltCard FAQ, Lightning wallet setup, NTAG424 programming',
    canonicalUrl: `${config.hubUrl}/docs`,
    ogTitle: 'BoltCard Setup Guide & Documentation',
    ogDescription: 'Everything you need to know about setting up and using BoltCards with the Lightning Network. Step-by-step guides and troubleshooting.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Set Up a BoltCard',
      'description': 'Complete guide to setting up BoltCard for Lightning Network payments',
      'image': `${config.hubUrl}/images/boltcard-setup.jpg`,
      'totalTime': 'PT10M',
      'supply': [
        {
          '@type': 'HowToSupply',
          'name': 'BoltCard with NTAG424 chip'
        },
        {
          '@type': 'HowToSupply',
          'name': 'NFC-enabled smartphone'
        },
        {
          '@type': 'HowToSupply',
          'name': 'Lightning wallet with funds'
        }
      ],
      'tool': [
        {
          '@type': 'HowToTool',
          'name': 'Bolt Card Wallet App'
        }
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Install the Bolt Card Wallet App',
          'text': 'Download and install the official Bolt Card Wallet app from the app store'
        },
        {
          '@type': 'HowToStep',
          'name': 'Connect to Azzamo Hub',
          'text': 'Configure the app to connect to Azzamo\'s Lightning Network infrastructure'
        },
        {
          '@type': 'HowToStep',
          'name': 'Program Your Card',
          'text': 'Use NFC to link your physical BoltCard to your digital wallet'
        }
      ]
    }
  },

  privacy: {
    title: 'Privacy Policy - Azzamo BoltCard Hub',
    description: 'Learn how Azzamo BoltCard Hub protects your privacy and handles your data. Transparent privacy practices for Lightning Network payment services.',
    keywords: 'privacy policy, data protection, Bitcoin privacy, Lightning Network privacy, BoltCard privacy, cryptocurrency privacy',
    canonicalUrl: `${config.hubUrl}/privacy`,
    ogTitle: 'Privacy Policy - Azzamo BoltCard Hub',
    ogDescription: 'Our commitment to protecting your privacy while using BoltCard Lightning Network services.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy',
      'description': 'Privacy policy for Azzamo BoltCard Hub services',
      'publisher': {
        '@type': 'Organization',
        'name': 'Azzamo'
      },
      'dateModified': new Date().toISOString().split('T')[0]
    }
  },

  terms: {
    title: 'Terms of Service - Azzamo BoltCard Hub',
    description: 'Terms and conditions for using Azzamo BoltCard Hub Lightning Network services. Understand your rights and responsibilities.',
    keywords: 'terms of service, terms and conditions, Lightning Network terms, BoltCard terms, Bitcoin service terms, cryptocurrency terms',
    canonicalUrl: `${config.hubUrl}/terms`,
    ogTitle: 'Terms of Service - Azzamo BoltCard Hub',
    ogDescription: 'Terms and conditions governing the use of Azzamo BoltCard Hub Lightning Network services.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service',
      'description': 'Terms of service for Azzamo BoltCard Hub',
      'publisher': {
        '@type': 'Organization',
        'name': 'Azzamo'
      },
      'dateModified': new Date().toISOString().split('T')[0]
    }
  }
}; 