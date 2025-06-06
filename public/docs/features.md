# Features & Integrations

The Azzamo Bolt Card Hub provides comprehensive Bolt Card management with multiple integration options for different user needs and technical preferences.

## 🏗️ Core Architecture

### Bolt Card Hub Technology
- **LNDHub Fork** - Based on proven BlueWallet backend technology
- **LNURL Protocol** - Standard Lightning Network URL for payments
- **NTAG424 DNA** - Cryptographic NFC chip with replay protection
- **Open Source** - Self-hostable for full sovereignty
- **Community Driven** - Azzamo provides hosted service for convenience

### Security Model
- **Custodial Service** - Azzamo holds funds like hosted LNbits or exchange
- **Cryptographic Protection** - Each tap generates unique encrypted codes
- **Spending Limits** - User-configurable per-transaction and daily limits
- **No PIN Required** - Tap-and-go simplicity by default
- **RFID Protection** - Optional blocking sleeves for additional security

## 🔌 Integration Methods

### Method 1: Bolt Card Wallet App + Azzamo Hub (Recommended)

#### Mobile App Features
- **Fork of BlueWallet** - Familiar interface with Bolt Card features
- **NFC Card Management** - Built-in scanning and programming
- **Real-time Notifications** - Push alerts for every card use
- **Multi-wallet Support** - Multiple cards via separate wallets
- **Balance Tracking** - Instant updates and transaction history

#### Hub Capabilities
- **LNDHub Compatible** - Standard Lightning wallet API
- **Card Registration** - Secure key generation and storage
- **Payment Processing** - Automated LNURL-withdraw handling
- **Limit Enforcement** - Per-tap and daily spending controls
- **Transaction Logging** - Complete payment history

#### Setup Process
1. Download Bolt Card Wallet app ([Android](https://play.google.com/store/apps/details?id=com.boltcard.boltcard) / [iOS](https://apps.apple.com/us/app/bolt-card-wallet/id6446301845))
2. Connect to `https://nfc.azzamo.net/`
3. Register card via NFC scan
4. Set spending limits and fund wallet
5. Start making tap-to-pay transactions

### Method 2: LNbits Integration (Advanced)

#### LNbits Features  
- **Web-based Management** - Browser interface for card control
- **Bolt Cards Extension** - Dedicated module for card management
- **Multiple Cards** - Link several cards to one wallet
- **Detailed Analytics** - Transaction logs and usage statistics
- **QR Code Programming** - Generate auth links for NFC writing

#### Azzamo LNbits Demo
- **Demo Server**: [https://azzamo.tips](https://azzamo.tips)
- **No Registration** - Instant wallet creation
- **Small Amounts** - Suitable for testing and light usage
- **Community Resource** - Free service for Bitcoin community

#### Setup Process
1. Visit [https://azzamo.tips](https://azzamo.tips) and save wallet URL
2. Fund wallet via Lightning invoice
3. Enable "Bolt Cards" extension
4. Create card entry with NFC scan
5. Use separate programming app to write card
6. Test with small payment

### Method 3: Hybrid Approach

#### Combined Benefits
- **LNbits for Management** - Web dashboard for detailed control
- **App for Convenience** - Mobile app connected to LNbits LNDHub
- **Flexible Funding** - Multiple top-up methods
- **Best of Both** - Web analytics + mobile notifications

## ⚡ Current Capabilities

### Card Management

#### Registration & Programming
- **NFC Scanning** - Read card UID automatically
- **Credential Generation** - Secure LNURL and keys creation
- **Card Writing** - Program NFC chip with payment data
- **Multi-device Support** - Use any NFC-enabled phone
- **Card Nicknames** - Custom names for easy identification


#### Transaction Monitoring
- **Real-time Alerts** - Instant notifications for card usage
- **Detailed History** - Complete log of all payments
- **Balance Tracking** - Live wallet balance updates
- **Export Capabilities** - Transaction data for accounting
- **Merchant Information** - Payment destination details when available

### Payment Processing

#### Lightning Network Integration
- **Instant Settlements** - Sub-second payment processing
- **LNURL-withdraw** - Standard protocol for card payments
- **Routing Optimization** - Efficient Lightning Network paths
- **Fee Minimization** - Low-cost transactions (usually few sats)
- **Global Compatibility** - Works anywhere Lightning is accepted

#### Merchant Compatibility
**Compatible Point-of-Sale Systems:**
- **Breez POS** - Mobile app with built-in NFC support
- **BTCPay Server** - LNURL-pay terminal integration
- **VoltPay** - Lightning payment app with NFC
- **LNbits TPoS** - Simple web-based terminals
- **CoinCorner PoS** - Dedicated merchant application
- **Wallet of Satoshi** - PoS mode with NFC receive
- **Any LNURL-compatible** merchant terminal

#### Transaction Flow
1. **Merchant Creates Invoice** - Lightning payment request
2. **Customer Taps Card** - NFC transmits LNURL to merchant device
3. **Hub Receives Request** - Merchant's device calls Azzamo Hub
4. **Verification Process** - Hub checks card, limits, and balance
5. **Payment Execution** - Lightning payment sent if approved
6. **Instant Confirmation** - Both parties receive payment confirmation

### User Experience

#### Mobile App Experience
- **Simple Setup** - Connect to Hub in minutes
- **Intuitive Interface** - Familiar wallet-style design
- **Quick Funding** - Generate Lightning invoices instantly
- **Push Notifications** - Real-time payment alerts
- **Offline Card Usage** - No phone needed during payments

#### Web Dashboard (LNbits)
- **Comprehensive Management** - Full card control via browser
- **Multiple Card View** - Manage family/business cards centrally
- **Advanced Analytics** - Detailed usage statistics
- **Bulk Operations** - Efficient management of many cards
- **QR Code Generation** - Programming codes for new cards

## 🌟 Advanced Features

### Multiple Card Management

#### Family/Business Use
- **Individual Cards** - Separate card per person
- **Shared Funding** - Common wallet funding multiple cards
- **Individual Limits** - Different spending controls per card
- **Centralized Monitoring** - View all card activity in one place
- **Easy Top-ups** - Bulk funding across multiple cards

#### Card Types & Use Cases
- **Personal Spending** - Daily purchases and payments
- **Gift Cards** - Prepaid cards for recipients
- **Travel Cards** - Dedicated cards for trips
- **Business Expense** - Employee spending cards
- **Event Cards** - Conference or meetup payments

### Security & Risk Management

#### Theft Protection
- **Immediate Disabling** - Instant card deactivation via app/web
- **Limit-based Damage Control** - Losses capped by spending limits
- **Empty Wallet Strategy** - Transfer funds to disable stolen card
- **Real-time Monitoring** - Instant alerts for suspicious activity
- **RFID Blocking** - Optional sleeve protection

#### Best Practices
- **Conservative Limits** - Set reasonable spending thresholds
- **Regular Monitoring** - Frequent transaction review
- **Minimal Balance** - Only keep needed funds on card
- **Secure Backups** - Save wallet access credentials safely
- **Update Apps** - Keep software current for security

### Integration Capabilities

#### API Access
- **LNDHub Protocol** - Standard Lightning wallet API
- **REST Endpoints** - Programmatic access to Hub features
- **Webhook Support** - Real-time payment notifications
- **Rate Limiting** - Proper API usage controls
- **Documentation** - Complete API reference available

#### Developer Tools
- **Open Source Components** - Self-hostable Bolt Card Hub
- **Standard Protocols** - LNURL, LNDHub compatibility
- **Testing Environment** - Demo servers for development
- **Community Support** - Active developer community
- **Documentation** - Setup guides and examples

## 🚀 Self-Hosting Options

### Running Your Own Hub

#### Why Self-Host?
- **Full Sovereignty** - Complete control over funds and data
- **Privacy** - No third-party data sharing
- **Custom Features** - Modify Hub for specific needs
- **Family/Business** - Private Hub for organization
- **Learning** - Understand Lightning Network technology

#### Requirements
- **Lightning Node** - LND node with admin access
- **Server Infrastructure** - VPS or dedicated hardware
- **Technical Knowledge** - Linux, Docker, and Lightning familiarity
- **Maintenance** - Regular updates and monitoring
- **Security** - Proper key management and backup procedures

#### Resources
- **GitHub Repository** - [boltcard/boltcard-lndhub-docker](https://github.com/boltcard/boltcard-lndhub-docker)
- **Documentation** - Setup guides and configuration examples
- **Community Support** - Help from experienced operators
- **Migration Path** - Move from Azzamo Hub to self-hosted


### Merchant Networks
- **Bitcoin Conferences** - Wide acceptance at Bitcoin events
- **Lightning Meetups** - Community gatherings and merchants
- **Tech-forward Businesses** - Early adopter merchants
- **Global Expansion** - Growing merchant acceptance worldwide

---

## 🎯 Getting Started

### Recommended Approach
1. **Start with Azzamo Hub** - Use hosted service for learning
2. **Test with Small Amounts** - Gain experience safely
3. **Explore LNbits** - Try web-based management
4. **Consider Self-hosting** - Move to own infrastructure when ready
5. **Share Knowledge** - Help grow the Bolt Card community

### Next Steps
- **Read** [Getting Started Guide](./getting-started.md) for setup
- **Check** [FAQ & Troubleshooting](./troubleshooting.md) for help
- **Visit** [Support](./support.md) for community resources
- **Explore** [Payment Methods](./payments.md) for funding options

---

*The Azzamo Bolt Card Hub bridges the gap between Bitcoin's cutting-edge Lightning Network and familiar contactless payment experiences. Whether you're an individual looking for convenient Bitcoin payments or a business exploring Lightning integration, the Hub provides flexible options to meet your needs.*