# Writing Cards (Advanced)

This guide covers advanced methods for writing and configuring Bolt Cards. **For most users, we recommend using the [Bolt Card Wallet app](./getting-started.md) for the best experience.**

## ⚠️ Important Notice

**Advanced users only** — This method is not recommended for new users. The official Bolt Card Wallet app provides the safest and most reliable way to configure your cards.

## Manual Configuration Methods

### NFC Tools & Applications

#### Android Applications
- **NFC Tools Pro** — Professional NFC writing and reading
- **NXP TagWriter** — Official NXP application for NTAG chips
- **TagInfo** — For reading and verifying tag information
- **NFC TagInfo by NXP** — Detailed chip analysis

#### iOS Applications
- **NFC Tools** — Basic NFC operations (limited by iOS restrictions)
- **TagInfo** — Tag reading and verification

### Requirements for Manual Setup

Before attempting manual configuration:

- ✅ **NTAG424-DNA chip** for secure payments
- ✅ **LNURL-auth** from your Azzamo wallet
- ✅ **Understanding of LNURL protocols**
- ✅ **Access to NFC programming tools**
- ✅ **Technical knowledge** of NFC and Lightning Network

## LNURL-auth Configuration

### Generating LNURL-auth

1. **Create wallet** in Bolt Card Wallet app first
2. **Connect to Azzamo Hub**: `https://nfc.azzamo.net/api/`
3. **Generate LNURL-auth** string from your wallet
4. **Copy the LNURL** for manual encoding

### LNURL Format

The LNURL-auth should follow this format:
```
lnurl1dp68gurn8ghj7um9wfmxjcm99e3k7mf0v9cxj0m385ekvcenxc6r2c35xvukxefcv5mkvv34x5ekzd3ev56nyd3hxqurzepexejxxepnxscrvwfnv9nxzcn9xq6xyefhvgcxxcmyxymnserxfq5fns
```

## Batch Operations

### LNbits Integration

For managing multiple cards:

1. **Install LNbits** with Bolt Card extension
2. **Connect to Azzamo** as external service
3. **Configure batch operations** for multiple cards
4. **Use API endpoints** for programmatic access

### NFC-Brrr Tools

Community tools for bulk operations:

- **Batch writing** multiple cards
- **Template management** for consistent setup
- **Quality assurance** testing
- **Inventory management** features

## Advanced Configuration

### Custom LNURL-auth Encoding

For developers and advanced users:

```bash
# Example encoding process (simplified)
# 1. Generate keypair for card
# 2. Create LNURL-auth URL
# 3. Encode as LNURL
# 4. Write to NTAG424-DNA
```

### Security Considerations

- 🔒 **Use NTAG424-DNA** only for secure payments
- 🔒 **Verify chip authenticity** before writing
- 🔒 **Test thoroughly** before deployment
- 🔒 **Keep backup** of configuration data

## Chip Specifications

### NTAG424-DNA Features

- **Secure Dynamic Messaging (SDM)** for tamper detection
- **AES-128 encryption** for secure communication
- **Unique chip identifier** for authentication
- **Counter-based** anti-replay protection

### Memory Layout

| Section | Size | Purpose |
|---------|------|---------|
| Header | 16 bytes | Chip configuration |
| NDEF | Variable | LNURL-auth data |
| Counter | 4 bytes | Anti-replay protection |
| Signature | 32 bytes | Cryptographic signature |

## Testing & Verification

### Verification Steps

1. **Read tag** with TagInfo app
2. **Verify LNURL** format and encoding
3. **Test authentication** with Lightning wallet
4. **Confirm payment flow** with small amount
5. **Check security features** (SDM, counter)

### Common Issues

| Problem | Solution |
|---------|----------|
| Tag not recognized | Verify NTAG424-DNA chip |
| LNURL invalid | Check encoding and format |
| Authentication fails | Regenerate LNURL-auth |
| Payment errors | Test with different wallet |

## Professional Services

### Bulk Card Programming

For businesses needing large quantities:

- **Contact Azzamo** for bulk services
- **Custom branding** options available
- **Quality assurance** testing included
- **Technical support** during deployment

### Integration Support

- **API documentation** for developers
- **Custom integration** consulting
- **Technical workshops** available
- **Ongoing support** contracts

## Tools & Resources

### Recommended Hardware

- **NFC-enabled Android device** (preferred)
- **NTAG424-DNA cards** from reputable suppliers
- **NFC reader/writer** for desktop use (optional)

### Software Tools

- [NFC Tools Pro](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) (Android)
- [TagInfo](https://play.google.com/store/apps/details?id=com.nxp.taginfolite) (Android/iOS)
- [LNbits](https://lnbits.com/) with Bolt Card extension

### Documentation

- [NTAG424-DNA Datasheet](https://www.nxp.com/docs/en/data-sheet/NTAG424_DNA.pdf)
- [LNURL Specifications](https://github.com/lnurl/luds)
- [Bolt Card Protocol](https://github.com/boltcard/boltcard)

## Support for Advanced Users

If you need help with advanced configuration:

- 💬 **Telegram**: [@azzamo](https://t.me/azzamo)
- 📧 **Email**: [support@azzamo.net](mailto:support@azzamo.net)
- 🐙 **GitHub**: [github.com/azzamo](https://github.com/azzamo)

---

**Remember**: For most users, the [official Bolt Card Wallet app](./getting-started.md) provides the safest and most reliable experience.