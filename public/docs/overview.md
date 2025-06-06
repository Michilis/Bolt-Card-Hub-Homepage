# Overview

## Introduction to Bolt Cards

Bolt Cards are physical, contactless Bitcoin Lightning payment cards that contain an NFC chip (specifically an NXP NTAG424 DNA) that works with the Lightning Network using the LNURL protocol. In simple terms, a Bolt Card functions like a debit card for Bitcoin: once linked to your Lightning wallet, you can tap the card on a compatible point-of-sale (POS) device to instantly pay a Lightning invoice from your balance.

This eliminates the need to scan QR codes or unlock an app at checkout – just "tap and go" with Bitcoin. Bolt Cards bring the familiar ease of contactless payments to Bitcoin Lightning, while keeping you in control of your money.

### How Bolt Cards Work

When you tap a Bolt Card on an NFC reader (such as a merchant's phone or terminal), the card shares a special Lightning withdrawal link (an lnurlw://… URL) with the device. The merchant's POS app then requests a payment from your card's service (the Bolt Card Hub). The hub, which is linked to your Lightning wallet or node, instantly sends a Lightning payment for the exact invoice amount to the merchant.

The card triggers your wallet to "push" sats to pay the invoice. Once the Lightning payment is sent, the merchant's app gets confirmation and the transaction is complete – typically within a second or two. All of this happens behind the scenes from a simple tap of the card.

### Security Features

The required NFC tag (NTAG424 DNA) provides cryptographic replay protection, meaning each payment tap uses a one-time code so the card's LNURL cannot be reused or cloned by malicious scanners. This gives Bolt Cards a security level suitable for everyday use, especially when combined with spending limits.

## 🔗 What is the Azzamo Bolt Card Hub?

Because Bolt Cards themselves are essentially keys that trigger payments, they need a backend service to actually fulfill those payments. This is where the Azzamo Bolt Card Hub comes in.

The Azzamo Bolt Card Hub is a specialized Lightning wallet server that connects your Bolt Card to your Lightning funds, enforcing your rules and handling payment requests. The Hub is essentially a fork of the LNDHub software (the backend used by BlueWallet) with added logic for Bolt Cards.

### Hub Information

- **Hub URL**: https://nfc.azzamo.net
- **API URL**: https://nfc.azzamo.net/api/
- **Web Interface**: https://nfc.azzamo.net
- **LNbits Demo Server**: https://azzamo.tips

### How the Hub Works

The Hub stores the cryptographic details of your card, listens for payment requests initiated by card taps, checks your spending limits, and then authorizes your Lightning node or wallet to send out the payment. Think of it as the "bridge" between your physical card and the Lightning Network.

When your card is tapped and an LNURL-withdraw request hits the Hub, the Hub:
1. Identifies your card
2. Verifies the one-time NFC code
3. Checks that the requested amount is within your set limits
4. Instructs the Lightning wallet to pay the invoice
5. Logs the transaction and enforces daily limits

## ⚡ Key Features

- **Quick BoltCard Connection** - Connect your BoltCard in seconds
- **Custodial Service** - No need to run your own Lightning node
- **Spending Limits** - Set per-transaction and daily limits for security
- **Real-time Payments** - Instant Lightning Network transactions
- **Compatible Apps** - Works with Bolt Card Wallet and LNbits
- **Multiple Funding Options** - Lightning payments, LNbits integration
- **Cryptographic Security** - NTAG424 DNA chip with replay protection
- **User-Friendly** - Simple tap-and-go payments

## 🛠️ Requirements

### Hardware
- **Android or iOS phone** with NFC support
- **Bolt Card** with NTAG424 DNA chip (available from vendors like LaserEyes.cards, CoinCorner, PlebTag, etc.)

### Software Options
- **Bolt Card Wallet App** (recommended for most users)
  - [Android](https://play.google.com/store/apps/details?id=com.boltcard.boltcard)
  - [iOS](https://apps.apple.com/us/app/bolt-card-wallet/id6446301845)
- **LNbits Interface** (for web-based management)
- **NFC Programming Apps** (for advanced setup)

### Funding Sources
- Any Lightning wallet (Zeus, Phoenix, Breez, Wallet of Satoshi, etc.)
- LNbits wallets
- Direct Lightning invoices
- Compatible Lightning nodes

## 🔒 Security & Trust Model

**Azzamo Bolt Card Hub is a custodial service**, similar to using a hosted LNbits or an exchange wallet. You are trusting Azzamo with custodial access to whatever funds you keep on the Hub. Many users start with a custodial Hub for convenience, then later may migrate to their own self-hosted setup.

### Security Best Practices
- **Set sensible spending limits** (per-transaction and daily)
- **Keep minimal balance** (only load what you need for near-term spending)
- **Monitor transactions** through app notifications
- **Use RFID-blocking sleeve** when not in use (optional)
- **Keep backup access** to your wallet credentials

## 🌐 Where to Use Bolt Cards

Bolt Card payments require the merchant to have an NFC-capable device and a Lightning point-of-sale app that supports LNURL-withdraw:

- **Breez POS** - Mobile app with point-of-sale mode
- **BTCPay Server** - LNURL-pay static codes
- **VoltPay** - Lightning payments app with NFC
- **LNbits TPoS** - Simple web POS for small vendors
- **CoinCorner PoS** - Merchant app with Bolt Card support
- **Wallet of Satoshi** - PoS mode with NFC receive
- **Bitcoin conferences and meetups**
- **Tech-forward merchants worldwide**

## 📊 Service Details

- **Uptime**: High availability Lightning infrastructure
- **Settlement**: Sub-second Lightning payments
- **Support**: Community-driven with Azzamo support
- **Fees**: No additional fees beyond standard Lightning routing
- **Limits**: User-configurable spending controls

## 🚀 Getting Started

Ready to set up your Bolt Card? Choose your preferred method:

1. **Recommended**: [Azzamo Hub + Bolt Card Wallet App](./getting-started.md)
2. **Advanced**: [LNbits Integration Method](./features.md#lnbits-integration)

---

*The Azzamo Bolt Card Hub provides a hosted solution for users who want to try Bolt Cards without deploying their own infrastructure. The Bolt Card system is open-source and can be self-hosted for users who prefer full sovereignty.*