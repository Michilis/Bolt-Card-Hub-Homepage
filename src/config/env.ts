// Environment configuration with fallbacks
export const config = {
  // Development Configuration
  debug: import.meta.env.VITE_DEBUG === 'true',
  devPort: parseInt(import.meta.env.VITE_DEV_PORT || '5176'),

  // Analytics Configuration
  analytics: {
    plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || '',
    plausibleSrc: import.meta.env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js',
  },

  // Hub Configuration
  hubName: import.meta.env.VITE_HUB_NAME || 'Azzamo BoltCard Hub',
  hubUrl: import.meta.env.VITE_HUB_URL || 'https://nfc.azzamo.net',
  hubApiUrl: import.meta.env.VITE_HUB_API_URL || 'https://nfc.azzamo.net/api/',
  webWalletUrl: import.meta.env.VITE_WEB_WALLET_URL || 'https://nfc.azzamo.net/wallet',

  // Lightning Node Configuration
  node: {
    pubkey: import.meta.env.VITE_NODE_PUBKEY || '033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025',
    alias: import.meta.env.VITE_NODE_ALIAS || 'AzzamoBoltNode',
    host: import.meta.env.VITE_NODE_HOST || 'node.azzamo.net',
    port: import.meta.env.VITE_NODE_PORT || '9735',
    uri: import.meta.env.VITE_NODE_URI || '033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025@node.azzamo.net:9735',
  },

  // Donation Configuration
  donation: {
    lightningAddress: import.meta.env.VITE_DONATION_LN_ADDRESS || 'donate@azzamo.net',
    lnurl: import.meta.env.VITE_DONATION_LNURL || 'lnurl1dp68gurn8ghj7um9wfmxjcm99e3k7mf0v9cxj0m385ekvcenxc6r2c35xvukxefcv5mkvv34x5ekzd3ev56nyd3hxqurzepexejxxepnxscrvwfnv9nxzcn9xq6xyefhvgcxxcmyxymnserxfq5fns',
  },

  // Company Information
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'Azzamo',
    website: import.meta.env.VITE_COMPANY_WEBSITE || 'https://azzamo.net',
    email: import.meta.env.VITE_COMPANY_EMAIL || 'info@azzamo.net',
    supportEmail: import.meta.env.VITE_COMPANY_SUPPORT_EMAIL || 'support@azzamo.net',
  },

  // Social Links
  social: {
    telegram: import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/azzamo',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/azzamo',
    nostr: import.meta.env.VITE_NOSTR_ADDRESS || 'azzamo.net',
  },

  // App Store Links
  apps: {
    ios: import.meta.env.VITE_IOS_APP_URL || 'https://apps.apple.com/us/app/bolt-card-wallet/id6446301845',
    android: import.meta.env.VITE_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.boltcard.boltcard',
  },

  // External Resources
  resources: {
    boltcardWebsite: import.meta.env.VITE_BOLTCARD_WEBSITE || 'https://boltcardwallet.com',
    plebtagTools: import.meta.env.VITE_PLEBTAG_TOOLS || 'https://plebtag.com/write-tags/',
    boltcardGithub: import.meta.env.VITE_BOLTCARD_GITHUB || 'https://github.com/boltcard/boltcard',
    lnbitsExtension: import.meta.env.VITE_LNBITS_EXTENSION || 'https://github.com/lnbits/lnbits-legend/tree/main/lnbits/extensions/boltcard',
  },

  // Network Configuration
  network: {
    bitcoinNetwork: import.meta.env.VITE_BITCOIN_NETWORK || 'Bitcoin Mainnet',
    uptimeGuarantee: import.meta.env.VITE_UPTIME_GUARANTEE || '99.9%',
    settlementTime: import.meta.env.VITE_SETTLEMENT_TIME || '<1s',
    supportHours: import.meta.env.VITE_SUPPORT_HOURS || '24/7',
  },

  // Feature Flags
  features: {
    enableDonations: import.meta.env.VITE_ENABLE_DONATIONS === 'true',
    enableNodeStats: import.meta.env.VITE_ENABLE_NODE_STATS === 'true',
    enableRealTimeData: import.meta.env.VITE_ENABLE_REAL_TIME_DATA === 'true',
    showBetaFeatures: import.meta.env.VITE_SHOW_BETA_FEATURES === 'true',
  },
} as const;

export default config;