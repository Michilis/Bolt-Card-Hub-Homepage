# Getting Started: Setting Up Your Bolt Card

Welcome to the Azzamo Bolt Card Hub! This guide will walk you through setting up your Bolt Card for Lightning Network payments. Choose between the recommended mobile app method or the advanced LNbits method.

## Prerequisites

Before you begin, ensure you have:

### Required Items
- **Bolt Card (blank)** - An NFC card with NTAG424 DNA chip
  - Available from vendors like CoinCorner, LaserEyes.cards, PlebTag, etc.
  - Ensure the card is blank/unlinked (new cards are blank by default)
- **NFC-enabled smartphone** - Android or iPhone with NFC capability
- **Lightning funds** - Some sats for testing and payments

### Software Requirements
- **Bolt Card Wallet app** (recommended) - Available for [Android](https://play.google.com/store/apps/details?id=com.boltcard.boltcard) and [iOS](https://apps.apple.com/us/app/bolt-card-wallet/id6446301845)
- Or **LNbits web interface** for advanced users

## Method 1: Azzamo Hub + Bolt Card Wallet App (Recommended)

This is the easiest method for most users, providing a smooth mobile experience with the Azzamo-hosted Hub.

### Step 1: Install and Connect the App

1. **Download** the Bolt Card Wallet app from your device's app store
2. **Launch** the app on your phone
3. **Add a new Lightning wallet** in the app that connects to Azzamo's Hub

**Connection Options:**

**Option A: QR Code Connection**
- Visit [https://nfc.azzamo.net](https://nfc.azzamo.net) in your browser
- If a connection QR code is displayed, use the app's "Import Wallet" or "Scan" feature
- Scan the QR code to automatically configure the app

**Option B: Manual Connection**
- In the app, add a new Lightning wallet
- Select "Connect to a custom server" or similar option
- Enter the Hub URL: `https://nfc.azzamo.net/api/`
- The app will create a new account on the Hub automatically

### Step 2: Register Your Bolt Card

1. **Open** your newly connected wallet in the app
2. **Tap "Connect Bolt Card"** or similar option
3. **Hold your Bolt Card** to the back of your phone's NFC area
4. **Wait for scanning** - move the card slowly until detected
5. **Configure card settings**:
   - Give your card a nickname (e.g., "My Bolt Card")
   - Set spending limits:
     - **Per-transaction limit** (e.g., 20,000 sats)
     - **Daily limit** (e.g., 50,000 sats)
6. **Confirm creation** - the app will generate credentials for your card
7. **Program the card** - tap your card again when prompted to write the credentials

**Important:** Keep your spending limits reasonable for security. You can adjust them later if needed.

### Step 3: Fund Your Wallet

Your card is set up but needs funds to make payments:

1. **Open your wallet** in the Bolt Card Wallet app
2. **Tap "Receive"** to generate a Lightning invoice
3. **Set the amount** you want to load (start with 50,000 sats for testing)
4. **Pay the invoice** from another Lightning wallet:
   - Zeus, Phoenix, Breez, Wallet of Satoshi
   - Any Lightning-compatible wallet or exchange
5. **Confirm receipt** - funds will appear instantly in your app

### Step 4: Test Your Card

1. **Find a compatible merchant** or test environment:
   - Use Breez app in POS mode on another phone
   - Visit a Bitcoin meetup or conference
   - Find merchants with BTCPay Server or similar
2. **Create a small test payment** (100-1000 sats)
3. **Tap your card** on the merchant's NFC reader
4. **Confirm payment success** - should complete within 1-2 seconds

## Method 2: LNbits Integration (Advanced)

For users who prefer web-based management or want more control over card parameters.

### Step 1: Create LNbits Wallet

1. **Visit** [https://azzamo.tips](https://azzamo.tips) (Azzamo's LNbits server)
2. **Save your wallet URL** - LNbits creates a new wallet automatically
3. **Bookmark or write down** the wallet URL securely (anyone with this URL can access your funds)

### Step 2: Fund Your LNbits Wallet

1. **Click "Receive"** in LNbits to generate a Lightning invoice
2. **Pay the invoice** from another wallet to deposit sats
3. **Verify balance** appears in your LNbits wallet

### Step 3: Enable Bolt Cards Extension

1. **Click the menu (☰)** in LNbits
2. **Go to Extensions**
3. **Find and enable** the "Bolt Card" or "Boltcards" extension

### Step 4: Create Your Bolt Card

1. **Open the Bolt Card extension** from the menu
2. **Click the "+" button** to add a new card
3. **Fill in the form**:
   - **Wallet**: Select your LNbits wallet
   - **Card Name**: Give it a descriptive name
   - **Max transaction**: Set per-tap limit in sats
   - **Daily limit**: Set daily cumulative limit in sats
   - **Card UID**: Tap the "NFC" button to scan your card's chip ID
4. **Hold your card** to your phone when prompted to read the UID
5. **Click "Create Card"** - LNbits generates the LNURL and keys

### Step 5: Program Your Card

1. **Click the QR code icon** next to your card in LNbits to view the auth link
2. **Download** the "Bolt Card NFC Card Creator" app (Android) or "BoltCard NFC Programmer" (iOS)
3. **In the programming app**:
   - Select "Paste Auth URL" or similar option
   - Scan the QR code from LNbits or paste the URL
   - Press "Write Card"
   - Hold your Bolt Card to the phone's NFC area
4. **Confirm successful write**

### Step 6: Test Your Setup

Your card is now linked to your LNbits wallet! Test with a small payment using Breez POS mode or any LNURL-compatible merchant terminal.

## Using Your Bolt Card

### Making Payments

1. **Merchant prepares** Lightning invoice on their NFC-enabled device
2. **Tap your card** on their NFC reader
3. **Payment processes** automatically if within your limits
4. **Receive confirmation** - typically within 1-2 seconds

### Monitoring Usage

- **Bolt Card Wallet app**: View balance and transaction history
- **LNbits interface**: Check wallet balance and card usage statistics
- **Enable notifications**: Get alerts for each card use (recommended)

### Security Tips

- **Set reasonable limits** - protect against theft or loss
- **Monitor regularly** - check transactions frequently
- **Keep minimal balance** - only load what you need for near-term use
- **Use RFID sleeve** - optional protection when not in use
- **Backup credentials** - save wallet URLs and access info securely

## Troubleshooting Common Issues

### Card Won't Scan
- **Enable NFC** in phone settings
- **Try different positioning** - NFC areas vary by device
- **Remove phone case** if thick or metallic
- **Hold steady** for 2-3 seconds during scan

### Payment Fails
- **Check balance** - ensure sufficient funds
- **Verify limits** - payment might exceed per-tap or daily limit
- **Confirm merchant compatibility** - they need LNURL-withdraw support
- **Try smaller amount** - test with minimal sats first

### Connection Issues
- **Verify URLs** - ensure correct Hub or LNbits address
- **Check internet** - stable connection required
- **Restart app** - close and reopen if experiencing glitches

## Next Steps

- **Explore** [Payment Methods](./payments.md) for funding options
- **Learn about** [Advanced Features](./features.md) and integrations
- **Get help** from our [Support](./support.md) community
- **Read** [Troubleshooting](./troubleshooting.md) for common issues

## Quick Reference

| Service | URL |
|---------|-----|
| Azzamo Hub | `https://nfc.azzamo.net` |
| Hub API | `https://nfc.azzamo.net/api/` |
| LNbits Demo | `https://azzamo.tips` |
| Support | [support@azzamo.net](mailto:support@azzamo.net) |

---

**Remember:** The Azzamo Bolt Card Hub is a custodial service. Only keep amounts you're comfortable with for convenience, similar to cash in a physical wallet. For larger amounts or full sovereignty, consider self-hosting your own Bolt Card Hub.