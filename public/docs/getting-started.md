# Getting Started

Follow these simple steps to connect your Bolt Card to the Azzamo Hub and start making Lightning payments.

## Step 1: Install the Bolt Card Wallet App

Download the official app from your device's app store to manage your Bolt Card.

### iOS App Store
- **Download**: [Bolt Card Wallet for iOS](https://apps.apple.com/us/app/bolt-card-wallet/id6446301845)
- **Requirements**: iOS 13.0 or later, NFC-enabled device

### Google Play Store
- **Download**: [Bolt Card Wallet for Android](https://play.google.com/store/apps/details?id=com.boltcard.boltcard)
- **Requirements**: Android 7.0 or later, NFC support

## Step 2: Connect to the Azzamo Hub

Configure the app to use Azzamo's Lightning infrastructure for your payments.

### Configuration Steps

1. **Open** the Bolt Card Wallet app
2. **Go to Settings** (usually in the menu or gear icon)
3. **Set the Hub URL** to:
   ```
   https://nfc.azzamo.net/api/
   ```
4. **Tap Connect** — your wallet is created automatically
5. **Verify connection** — you should see a success message

### Important Notes

- ✅ Make sure you enter the URL exactly as shown
- ✅ Include the trailing slash (`/`) in the API URL
- ✅ Ensure you have a stable internet connection
- ✅ The wallet creation is instant and secure

## Step 3: Write Your Bolt Card

Link your physical NFC card to your digital wallet for tap-to-pay functionality.

### Writing Process

1. **Tap "Connect Bolt Card"** in the app
2. **Hold your card** near the phone's NFC area
3. **Wait for scanning** — this may take a few seconds
4. **Confirm the link** — the card is now securely connected
5. **Test the connection** — try a small test payment

### Card Requirements

- **NTAG424-DNA** chips recommended for security
- **NFC-enabled** cards only
- **Blank or compatible** cards (some pre-programmed cards may not work)

### Troubleshooting Card Writing

If you encounter issues:

- **Enable NFC** in your phone settings
- **Try different positioning** — NFC sweet spots vary by device
- **Remove phone case** if it's thick or metallic
- **Use a different device** if available
- **Contact support** if problems persist

## Step 4: Fund Your Wallet

Add Lightning funds to start making payments.

### Top-Up Methods

1. **In-app top-up**: Tap "Top Up" in the wallet
2. **Generate invoice**: Choose amount or scan existing invoice
3. **Pay from any Lightning wallet**:
   - Zeus
   - Phoenix
   - Breez
   - Wallet of Satoshi
   - Blue Wallet
   - Muun
   - Any LNURL-compatible wallet

### Funding Tips

- ⚡ **Start small** — try 1,000-10,000 sats first
- ⚡ **Balance updates instantly** after payment
- ⚡ **Multiple funding sources** supported
- ⚡ **No minimum amount** required

## Step 5: Make Your First Payment

Test your setup with a small payment.

### Payment Process

1. **Find an NFC-compatible merchant** or terminal
2. **Merchant generates** Lightning invoice
3. **Tap your card** on the NFC reader
4. **Payment executes** automatically via LNURL-pay
5. **Receive confirmation** instantly

### Where to Use

- **BTCPay Server** terminals
- **LNPoS** devices
- **NFC-enabled** point-of-sale systems
- **Compatible merchants** worldwide

## ✅ Setup Complete!

You're now ready to use your Bolt Card for Lightning payments. Your card is:

- 🔗 **Connected** to Azzamo's Lightning infrastructure
- 💰 **Funded** and ready for payments
- 🔒 **Secure** with LNURL-auth protection
- ⚡ **Fast** with sub-second settlements

## Next Steps

- 📖 Read about [Payment Methods](./payments.md)
- 🔧 Explore [Advanced Features](./features.md)
- 🆘 Check [Troubleshooting](./troubleshooting.md) if needed
- 💬 Join our [Support Community](./support.md)

## Quick Reference

| Setting | Value |
|---------|-------|
| Hub URL | `https://nfc.azzamo.net` |
| API URL | `https://nfc.azzamo.net/api/` |
| Web Wallet | `https://nfc.azzamo.net/wallet` |
| Support | [support@azzamo.net](mailto:support@azzamo.net) |

---

*Need help? Contact us via [Telegram](https://t.me/azzamo) or [email](mailto:support@azzamo.net)*