# FAQ and Troubleshooting

Common questions and solutions to help you get your Bolt Card working smoothly with the Azzamo Hub.

## 🔧 Setup and Prerequisites

### Q: Do I need to run my own Lightning node or can I use this without one?

**A:** You do not need your own node to use a Bolt Card. The Azzamo Hub and LNbits demo are options that allow you to use a Bolt Card without any infrastructure – they act as the Lightning node/wallet for you. This is great for getting started.

However, these are custodial services, meaning you have to trust the provider. For small amounts, that's fine. If you later want to be fully self-sovereign, you can run your own Bolt Card Hub on top of your node. Many users start custodial and migrate later.

### Q: My phone can't scan or write to the card – what am I doing wrong?

**A:** Common solutions:

1. **Check NFC is enabled** in your phone settings
2. **Grant NFC permissions** to the Bolt Card Wallet app if prompted
3. **Position correctly** - hold the card flat against the back of the phone, around the middle
4. **Be patient** - hold steady for 2-3 seconds, NFC antennas can be finicky
5. **Remove thick phone case** during programming
6. **Try different positioning** - move the card slowly until the phone picks it up

If still having trouble, try the dedicated Bolt Card NFC Creator/Programmer app which sometimes gives clearer instructions.

### Q: Can I reuse a Bolt Card that's already been set up somewhere else?

**A:** Yes, but you must wipe and reprogram it. The NTAG424 chip, once written with keys, is locked to those keys until intentionally overwritten.

To reuse a card:
1. Delete the card from the original service (if you have access)
2. When adding to a new service, the writing process will overwrite the old data
3. **Important**: You cannot modify the LNURL without proper authorization

**Warning**: Do NOT delete your card's keys unless the card is physically destroyed or you have overwritten it. If you lose the keys, your card would be fixed to that setup forever.

## ⚡ Payment and Usage Issues

### Q: How can I test that my Bolt Card is working?

**A:** The easiest test is a small payment:

1. **Use Breez app** on another phone in POS mode
2. **Charge 100 sats** and tap your card when it shows "Waiting for payment..."
3. **Check for confirmation** - you should see 100 sats deducted
4. **Alternative testing**: Use LNbits TPoS, BTCPay Server, or VoltPay apps

If the test fails:
- Check you have sufficient funds
- Verify your limits aren't set too low
- Ensure the receiving device supports LNURL-withdraw

### Q: The merchant's device isn't reading my card at all. What could be wrong?

**A:** Possible issues:

1. **Merchant app setup** - they might need to tap an "NFC Scan" button first
2. **Ask the merchant** if their app has special steps (Bolt Card is new, they might be learning too)
3. **Verify card programming** - scan with a Lightning wallet that can read LNURLs to confirm data
4. **Physical positioning** - try different angles, hold longer, or try slightly different positions
5. **Device compatibility** - some NFC readers have varying strength

### Q: My transactions aren't going through, even with sufficient balance.

**A:** Check these common issues:

#### Spending Limits
- **Per-transaction limit**: Is the amount higher than your per-tap limit?
- **Daily quota**: Have you hit your daily spending limit?
- **Solution**: Increase limits or wait for 24-hour reset

#### Balance Issues
- **Exact balance**: Check your actual wallet balance
- **Routing fees**: Keep extra sats for potential Lightning routing fees
- **Recent transactions**: Ensure previous payments haven't drained the balance

#### Technical Issues
- **Hub connectivity**: If Azzamo's Hub is down, payments will fail
- **Merchant problems**: Their Lightning setup might have issues
- **Test connectivity**: Open Bolt Card Wallet app to verify Hub connection

### Q: What if I lose my Bolt Card or it gets stolen?

**A:** Take immediate action to secure your funds:

#### Using LNbits
1. **Log into LNbits** and delete the Bolt Card entry
2. **Lower limits** to 1 sat if you can't delete immediately
3. **Deleting the auth entry** means future attempts to use the LNURL will be rejected

#### Using Azzamo Hub
1. **Disconnect the card** in the Bolt Card Wallet app
2. **Empty the wallet** by transferring funds to yourself via Lightning
3. **Contact Azzamo support** to fully remove the card from the backend
4. **Even with empty wallet**, any tap attempts will fail due to no balance

#### General Security
- Treat like cash - if someone finds it, they might not know what it is
- Your daily limits cap potential damage
- After loss, assume it's compromised and remove from service

## 🔒 Security and Best Practices

### Q: Is the Bolt Card secure?

**A:** Yes, Bolt Cards are designed with strong security:

#### Technical Security
- **NTAG424 chip** uses strong cryptography to prevent cloning/replay attacks
- **Unique encrypted codes** generated for each tap - eavesdroppers can't reuse data
- **LNURL-withdraw** means the card cannot pull arbitrary funds without hub approval

#### Usage Security
- **Possession-based** - anyone with the card can spend within your limits (like cash)
- **No PIN required** by default (for tap-and-go simplicity)
- **Spending limits** are your main protection against theft

#### Best Practices
- **Set reasonable limits** for security
- **Use RFID-blocking sleeve** when not in use (optional)
- **Monitor transactions** regularly
- **Keep minimal balance** like cash in a physical wallet

### Q: Can I set a PIN or some 2FA for card usage?

**A:** Basic Bolt Card usage doesn't require a PIN by design (for tap-and-go simplicity). However, the underlying tech supports adding a PIN code.

**Current status**: PIN features are experimental and not yet mainstream in the Bolt Card Wallet app or LNbits extension. Some projects like "GroundControl" server were introduced to allow requiring PIN entry after tapping.

**For most users**: Setting conservative spend limits and keeping the card safe provides sufficient security without PIN entry hassle.

### Q: Are there any fees for using the Azzamo Hub or LNbits demo?

**A:** **No additional fees** beyond standard Lightning Network routing fees:

- **Azzamo Hub**: Free service, no extra charges
- **LNbits demo**: Free beyond LN routing fees (typically just a few sats)
- **Lightning fees**: Standard network fees (usually minimal for small payments)
- **No processing fees**: Unlike legacy card systems (no 2% merchant fees)

**Note**: Third-party services you use to obtain sats (exchanges, other wallets) may have their own fees outside the Bolt Card system.

## 🛠️ Technical Issues

### Q: What if a payment fails – will it retry or do I get an error?

**A:** **Payment behavior**:

- **Failed payments** show as unpaid on merchant's app after timeout
- **No auto-retry** - prevents accidental duplicate payments
- **Safe to retry** - tap again if failure was due to transient network issue
- **Unique tokens** - hub prevents double-payment of same invoice

**Common failure reasons**:
- Insufficient balance or exceeded limits
- Merchant invoice expired
- Network connectivity issues

**Solution**: Resolve the underlying issue, then tap again.

### Q: How can I keep track of my card usage and manage multiple cards easily?

**A:** **Monitoring options**:

#### Bolt Card Wallet App
- **Transaction history** for each wallet/card
- **Push notifications** for each card use (enable in settings)
- **Balance tracking** in real-time

#### LNbits Interface
- **Detailed logs** of all withdrawals
- **Card usage statistics** in the Bolt Cards extension
- **Multiple cards view** on one page (better for managing families)

#### Multiple Cards
- **App limitation**: Currently one card per wallet, but multiple wallets supported
- **LNbits advantage**: Can see all cards on one dashboard
- **Naming convention**: Use clear names like "Alice's Card" vs "Bob's Card"

### Q: The official Bolt Card demo hub shut down – is Azzamo Hub reliable long-term?

**A:** **Context**: The official demo was overwhelmed by popularity and was meant for short-term testing only.

**Azzamo Hub reliability**:
- **Community service** - depends on Azzamo's commitment
- **Currently stable** - good solution for testing and moderate use
- **Not a bank** - don't leave large sums long-term on any third-party service

**Migration options**:
- **Standards-based** - LNURL and LNDHub make migration possible
- **Self-hosting** - can move to your own Bolt Card Hub later
- **Card reprogramming** - physical cards can be reprogrammed to new hubs

**Recommendation**: Start with Azzamo for convenience, consider self-hosting for larger amounts or long-term use.

## 📱 App and Connection Issues

### Q: App won't connect to Hub

**Problem**: Bolt Card Wallet app fails to connect to Azzamo Hub.

#### Solutions:
1. **Verify Hub URL**: Use exactly `https://nfc.azzamo.net/api/` (include trailing slash)
2. **Check internet connection** - try WiFi vs mobile data
3. **Disable VPN** if active
4. **Clear app cache** and restart
5. **Check Hub status** at https://nfc.azzamo.net

### Q: Card won't scan during setup

**Problem**: Phone detects card but can't read the data.

#### Solutions:
1. **Clean the card** with soft, dry cloth
2. **Reset NFC** - turn off for 10 seconds, then back on
3. **Restart phone** to clear NFC cache
4. **Try different device** if available
5. **Remove phone case** if thick or metallic
6. **Find NFC sweet spot** - varies by phone model

### Q: Payment processing is slow

**Problem**: Transactions take longer than expected.

#### Causes and Solutions:
1. **Lightning Network congestion** - wait for routing to complete
2. **Merchant setup issues** - they may have slow Lightning node
3. **Network connectivity** - ensure both devices have good internet
4. **Try smaller amounts** - large payments may need more routing time

## 🆘 Emergency Procedures

### Q: I see suspicious transactions on my card

**Immediate actions**:
1. **Disable the card** immediately via app or LNbits
2. **Review transaction history** for patterns
3. **Change wallet passwords**
4. **Transfer remaining funds** to a new wallet
5. **Contact Azzamo support** with details
6. **Set up new card** with different limits

### Q: I lost access to my wallet/app

**Recovery steps**:
1. **Find backup credentials** - LNbits URL or LNDHub connection string
2. **Reinstall app** and import wallet using backup
3. **Contact Azzamo support** if no backup available
4. **For LNbits**: Use the saved wallet URL to regain access

---

## 📞 Getting Help

### Support Channels
- **Email**: [support@azzamo.net](mailto:support@azzamo.net)
- **Telegram**: [@azzamo](https://t.me/azzamo)
- **Documentation**: Available in `/docs` section

### Community Resources
- **Bolt Card website**: [boltcard.org](https://boltcard.org)
- **GitHub repositories** for technical details
- **Lightning Network forums** and communities
- **r/lightningnetwork** subreddit

### Before Contacting Support
1. **Check this FAQ** for common solutions
2. **Try basic troubleshooting** (restart app, check internet)
3. **Note error messages** and steps that led to the issue
4. **Have ready**: Wallet details, transaction IDs, timestamps

---

**Remember**: Bolt Cards are cutting-edge technology. Every user's feedback helps improve the system. Don't be discouraged by initial setup challenges - the convenience of tap-and-go Bitcoin payments is worth it! ⚡