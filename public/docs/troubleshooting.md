# Troubleshooting

Common issues and their solutions to help you get your BoltCard working smoothly.

## 🔧 Card Connection Issues

### Card Not Linking to Wallet

**Problem**: Your Bolt Card won't connect to the wallet app.

#### Solutions:
1. **Check NFC Settings**
   - ✅ Enable NFC in phone settings
   - ✅ Ensure NFC is not in "reader mode only"
   - ✅ Try toggling NFC off and on again

2. **Verify Card Type**
   - ✅ Ensure card is NTAG424-DNA compatible
   - ✅ Check if card is blank or properly formatted
   - ✅ Try with a different card if available

3. **Phone Positioning**
   - ✅ Find your phone's NFC "sweet spot"
   - ✅ Remove thick phone cases or metal accessories
   - ✅ Hold card steady for 3-5 seconds
   - ✅ Try different angles and positions

4. **Device Compatibility**
   - ✅ Test with another NFC-enabled device
   - ✅ Update your phone's operating system
   - ✅ Restart the Bolt Card Wallet app

5. **API Configuration**
   - ✅ Confirm Hub URL: `https://nfc.azzamo.net/api/`
   - ✅ Check for typos in the URL
   - ✅ Ensure trailing slash is included
   - ✅ Verify internet connection is stable

### Card Reading Errors

**Problem**: Phone detects card but can't read the data.

#### Solutions:
1. **Clean the Card**
   - 🧽 Wipe card with soft, dry cloth
   - 🧽 Remove any dirt, oil, or residue
   - 🧽 Check for physical damage or scratches

2. **Reset NFC**
   - 📱 Turn NFC off for 10 seconds, then on
   - 📱 Restart your phone
   - 📱 Clear NFC cache (Android: Settings > Apps > NFC > Storage > Clear Cache)

3. **App Troubleshooting**
   - 🔄 Force close and reopen the app
   - 🔄 Log out and log back in
   - 🔄 Clear app cache and data
   - 🔄 Reinstall the app if necessary

## 📱 App Connection Problems

### App Won't Connect to Hub

**Problem**: Bolt Card Wallet app fails to connect to Azzamo Hub.

#### Solutions:
1. **Verify Hub URL**
   - ✅ Correct URL: `https://nfc.azzamo.net/api/`
   - ✅ Include the trailing slash (`/`)
   - ✅ Use HTTPS, not HTTP
   - ✅ No extra spaces or characters

2. **Network Connectivity**
   - 🌐 Check internet connection (WiFi/cellular)
   - 🌐 Try switching between WiFi and mobile data
   - 🌐 Disable VPN if active
   - 🌐 Check if firewall is blocking the connection

3. **App Configuration**
   - ⚙️ Clear app settings and reconfigure
   - ⚙️ Check app permissions (internet, NFC)
   - ⚙️ Update to latest app version
   - ⚙️ Restart app and try again

4. **Server Status**
   - 🔍 Check [Azzamo status page](https://nfc.azzamo.net/node)
   - 🔍 Try again in a few minutes
   - 🔍 Contact support if issue persists

### Slow App Performance

**Problem**: App is slow to load or respond.

#### Solutions:
1. **Device Resources**
   - 📱 Close other apps to free memory
   - 📱 Restart your phone
   - 📱 Check available storage space
   - 📱 Update device operating system

2. **Network Optimization**
   - 📶 Use strong WiFi connection when possible
   - 📶 Avoid congested networks
   - 📶 Clear network settings cache
   - 📶 Try different network if available

## 💳 Payment Issues

### Payment Failures

**Problem**: Payments fail when tapping the card.

#### Common Causes & Solutions:

1. **Insufficient Balance**
   - 💰 Check card balance in app
   - 💰 Top up if balance is low
   - 💰 Account for Lightning routing fees
   - 💰 Ensure balance exceeds payment amount

2. **Spending Limits**
   - 🚫 Check daily spending limits
   - 🚫 Verify per-transaction limits
   - 🚫 Adjust limits if necessary
   - 🚫 Wait for daily reset if limit reached

3. **Merchant Terminal Issues**
   - 🏪 Ensure terminal supports Lightning/LNURL
   - 🏪 Ask merchant to regenerate invoice
   - 🏪 Try different payment terminal
   - 🏪 Verify merchant's Lightning setup

4. **Network Connectivity**
   - 📡 Merchant needs internet connection
   - 📡 Check Lightning Network status
   - 📡 Try payment again after a moment
   - 📡 Use alternative payment if urgent

### Slow Payment Processing

**Problem**: Payments take longer than expected to process.

#### Solutions:
1. **Lightning Network Conditions**
   - ⚡ Check network congestion status
   - ⚡ Wait for routing to complete
   - ⚡ Try smaller payment amounts
   - ⚡ Consider alternative payment methods

2. **Merchant Setup**
   - 🏪 Merchant may have slow Lightning setup
   - 🏪 Ask merchant to check their node
   - 🏪 Verify merchant's internet connection
   - 🏪 Try different merchant if possible

## 🔒 Security Concerns

### Suspicious Activity

**Problem**: Unexpected transactions or security alerts.

#### Immediate Actions:
1. **Secure Your Account**
   - 🚨 Change wallet passwords immediately
   - 🚨 Review all recent transactions
   - 🚨 Disable affected cards temporarily
   - 🚨 Contact support immediately

2. **Investigation Steps**
   - 🔍 Check transaction history for details
   - 🔍 Verify merchant names and locations
   - 🔍 Look for patterns in suspicious activity
   - 🔍 Document all suspicious transactions

3. **Prevention Measures**
   - 🛡️ Set lower spending limits
   - 🛡️ Enable all security notifications
   - 🛡️ Monitor account regularly
   - 🛡️ Keep app updated

### Lost or Stolen Card

**Problem**: Your Bolt Card is lost or stolen.

#### Immediate Actions:
1. **Disable the Card**
   - 🚫 Open Bolt Card Wallet app
   - 🚫 Find the affected card
   - 🚫 Disable or delete the card
   - 🚫 Confirm card is deactivated

2. **Secure Your Funds**
   - 💰 Transfer remaining balance to new card
   - 💰 Change wallet passwords
   - 💰 Review recent transactions
   - 💰 Set up new card with different limits

3. **Report the Incident**
   - 📞 Contact Azzamo support
   - 📞 Report to local authorities if stolen
   - 📞 Monitor for unauthorized usage
   - 📞 Document the incident

## 🔧 Technical Issues

### NFC Not Working

**Problem**: NFC functionality stops working entirely.

#### Troubleshooting Steps:
1. **Phone Settings**
   - 📱 Check NFC is enabled in settings
   - 📱 Verify NFC payment apps are set correctly
   - 📱 Clear NFC service cache
   - 📱 Restart phone

2. **Hardware Issues**
   - 🔧 Test NFC with other cards/devices
   - 🔧 Check for physical damage to phone
   - 🔧 Remove phone case and try again
   - 🔧 Contact phone manufacturer if hardware issue

3. **Software Problems**
   - 💻 Update phone operating system
   - 💻 Update Bolt Card Wallet app
   - 💻 Clear app cache and data
   - 💻 Reinstall app if necessary

### Balance Not Updating

**Problem**: Card balance doesn't reflect recent transactions.

#### Solutions:
1. **Refresh the App**
   - 🔄 Pull down to refresh balance
   - 🔄 Close and reopen app
   - 🔄 Log out and log back in
   - 🔄 Check internet connection

2. **Network Delays**
   - ⏱️ Wait 1-2 minutes for updates
   - ⏱️ Check Lightning Network status
   - ⏱️ Verify transaction was successful
   - ⏱️ Contact support if delay persists

## 📞 Getting Help

### Self-Service Options

1. **Check Status Pages**
   - 🌐 [Azzamo Node Status](https://nfc.azzamo.net/node)
   - 🌐 [Lightning Network Status](https://mempool.space/lightning)
   - 🌐 App store reviews for known issues

2. **Community Resources**
   - 💬 User forums and discussion groups
   - 💬 Social media channels
   - 💬 Community troubleshooting guides

### Contact Support

#### When to Contact Support
- 🆘 Issues persist after trying solutions
- 🆘 Security concerns or suspicious activity
- 🆘 Lost funds or failed transactions
- 🆘 Technical problems with the service

#### How to Contact
1. **Telegram** (Fastest response)
   - 📱 [@azzamo](https://t.me/azzamo)
   - 📱 Include screenshots if helpful
   - 📱 Describe steps you've already tried

2. **Email Support**
   - 📧 [support@azzamo.net](mailto:support@azzamo.net)
   - 📧 Include detailed problem description
   - 📧 Attach relevant screenshots
   - 📧 Mention your wallet/card ID if safe to share

3. **GitHub Issues** (Technical problems)
   - 🐙 [github.com/azzamo](https://github.com/azzamo)
   - 🐙 For technical bugs and feature requests
   - 🐙 Include system information and logs

#### Information to Include
- 📋 **Device model** and operating system version
- 📋 **App version** you're using
- 📋 **Exact error messages** you're seeing
- 📋 **Steps to reproduce** the problem
- 📋 **Screenshots** of the issue (if helpful)
- 📋 **Transaction IDs** for payment issues

### Response Times

| Contact Method | Response Time | Best For |
|----------------|---------------|----------|
| **Telegram** | 1-4 hours | Urgent issues, quick questions |
| **Email** | 4-24 hours | Detailed problems, documentation |
| **GitHub** | 1-7 days | Technical bugs, feature requests |

## 🔍 Diagnostic Tools

### Built-in Diagnostics

1. **App Diagnostics**
   - 🔧 Connection test feature
   - 🔧 NFC functionality test
   - 🔧 Balance sync check
   - 🔧 Transaction history verification

2. **Card Health Check**
   - 💳 NFC chip integrity test
   - 💳 Authentication verification
   - 💳 Security feature check
   - 💳 Performance benchmarking

### External Tools

1. **NFC Testing Apps**
   - 📱 **TagInfo** (NXP) - Card information reader
   - 📱 **NFC Tools** - Basic NFC functionality test
   - 📱 **MIFARE Classic Tool** - Advanced card analysis

2. **Lightning Network Tools**
   - ⚡ **Lightning Network Explorer** - Network status
   - ⚡ **Node monitoring** - Check Azzamo node status
   - ⚡ **Payment tracking** - Trace Lightning payments

---

**Still having issues?** Don't hesitate to reach out to our support team. We're here to help you get your BoltCard working perfectly!