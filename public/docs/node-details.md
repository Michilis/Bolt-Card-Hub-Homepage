# Node Details

Azzamo's Lightning node provides the backbone infrastructure for your BoltCard payments. Connect directly or open channels for improved routing and liquidity.

## 🔌 Connection Information

### Node Specifications

| Property | Value |
|----------|-------|
| **Public Key** | `033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025` |
| **Alias** | `AzzamoBoltNode` |
| **Network** | Bitcoin Mainnet |
| **Host** | `node.azzamo.net` |
| **Port** | `9735` |

### Connection URI

```
033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025@node.azzamo.net:9735
```

### API Endpoints

| Service | URL |
|---------|-----|
| **Hub API** | `https://nfc.azzamo.net/api/` |
| **Web Wallet** | `https://nfc.azzamo.net/wallet` |
| **Node Stats** | `https://nfc.azzamo.net/node` |

## 📊 Node Statistics

### Performance Metrics

- **Uptime**: 99.9% guaranteed
- **Average Settlement**: <1 second
- **Active Channels**: 142+ (and growing)
- **Total Capacity**: 15.2+ BTC
- **Node Age**: 3+ years of reliable operation

### Network Position

- **Well-connected** to major Lightning nodes
- **High liquidity** channels for reliable routing
- **Geographic diversity** for global reach
- **24/7 monitoring** and maintenance

## 🏗️ Infrastructure

### Hardware Specifications

- **Enterprise-grade** server hardware
- **Redundant power** and internet connections
- **SSD storage** for fast database operations
- **Hardware Security Module (HSM)** protection

### Security Features

#### Multi-layered Protection
- 🔒 **Hardware Security Module (HSM)** protected keys
- 🔒 **Multi-signature wallet** architecture
- 🔒 **Regular security audits** and monitoring
- 🔒 **Automated backup** and recovery systems
- 🔒 **Network isolation** and firewalls

#### Operational Security
- 🔐 **24/7 monitoring** with automated alerts
- 🔐 **Incident response** procedures
- 🔐 **Regular penetration** testing
- 🔐 **Compliance** with security standards

### Monitoring & Support

#### Real-time Monitoring
- ⚡ **24/7 automated monitoring** of all systems
- ⚡ **Real-time alerting** for any issues
- ⚡ **Proactive maintenance** windows
- ⚡ **Performance optimization** continuous

#### Support Availability
- 🆘 **24/7 support** for critical issues
- 🆘 **Technical support** via Telegram
- 🆘 **Email support** with quick response
- 🆘 **Community support** channels

## 🔗 For Node Runners

### Opening Channels

Connect your Lightning node to Azzamo for improved routing:

#### Benefits
- ⚡ **Reduced routing fees** for your payments
- ⚡ **Improved success rates** for transactions
- ⚡ **Access to liquidity** from our channels
- ⚡ **Better connectivity** to the Lightning Network

#### Recommended Channel Size
- **Minimum**: 1,000,000 sats (0.01 BTC)
- **Recommended**: 5,000,000+ sats (0.05+ BTC)
- **Large channels**: 50,000,000+ sats (0.5+ BTC)

#### Connection Command

For LND nodes:
```bash
lncli connect 033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025@node.azzamo.net:9735

lncli openchannel 033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025 5000000
```

For Core Lightning:
```bash
lightning-cli connect 033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025@node.azzamo.net:9735

lightning-cli fundchannel 033d8656219478701227199cbd6f670335c8d408a92ae88b962c49d4dc0e83e025 5000000
```

### Channel Management

#### Our Policies
- **Competitive fees** for routing
- **High availability** commitment
- **Fair channel management** practices
- **Long-term partnerships** preferred

#### What We Look For
- ✅ **Reliable nodes** with good uptime
- ✅ **Adequate liquidity** for mutual benefit
- ✅ **Professional operation** and monitoring
- ✅ **Community involvement** and reputation

## 🌐 Network Integration

### Lightning Network Position

#### Major Connections
- **ACINQ** (Phoenix, Eclair)
- **Bitfinex** (bfx-lnd0)
- **River Financial** 
- **OpenNode**
- **Wallet of Satoshi**

#### Routing Capabilities
- **Global reach** through strategic partnerships
- **Multiple paths** for payment reliability
- **Low-fee routes** for cost-effective transactions
- **High-capacity channels** for large payments

### API Integration

#### For Developers
- **RESTful API** for programmatic access
- **Webhook support** for real-time notifications
- **Rate limiting** for fair usage
- **Documentation** and examples available

#### Supported Operations
- **Card management** (create, update, delete)
- **Transaction monitoring** and history
- **Balance inquiries** and updates
- **Payment processing** and verification

## 📈 Performance Data

### Historical Uptime

| Period | Uptime | Downtime |
|--------|--------|----------|
| **Last 30 days** | 99.97% | 13 minutes |
| **Last 90 days** | 99.95% | 2.2 hours |
| **Last 365 days** | 99.92% | 7.3 hours |
| **All time** | 99.89% | 9.7 hours |

### Transaction Statistics

- **Average processing time**: 847ms
- **Success rate**: 99.7%
- **Peak transactions/hour**: 1,247
- **Total transactions processed**: 2.3M+

## 🔮 Future Developments

### Planned Upgrades

#### Short Term (Q1-Q2 2025)
- **Channel capacity expansion** to 25+ BTC
- **Additional geographic** redundancy
- **Enhanced monitoring** and alerting
- **API v2** with improved features

#### Medium Term (Q3-Q4 2025)
- **Multi-node setup** for redundancy
- **Advanced routing** algorithms
- **Custom channel policies** for partners
- **Integration** with more Lightning services

#### Long Term (2026+)
- **Global node network** expansion
- **Advanced analytics** and insights
- **Machine learning** for routing optimization
- **Next-generation** Lightning features

## 💰 Support the Infrastructure

### Donations Welcome

Help us maintain and improve the Lightning infrastructure:

- **Lightning Address**: `donate@azzamo.net`
- **LNURL**: Available on the [node page](https://nfc.azzamo.net/node)
- **Any amount** appreciated
- **Funds used for**: Infrastructure, development, support

### Why Donate?

- 🎯 **Maintain 99.9%** uptime guarantee
- 🎯 **Support free** BoltCard hosting
- 🎯 **Fund infrastructure** improvements
- 🎯 **Enable 24/7** technical support
- 🎯 **Expand global** Lightning Network

## 📞 Technical Support

### For Node Operators

If you're running a Lightning node and need help:

- 💬 **Telegram**: [@azzamo](https://t.me/azzamo)
- 📧 **Email**: [support@azzamo.net](mailto:support@azzamo.net)
- 🐙 **GitHub**: [github.com/azzamo](https://github.com/azzamo)

### For Developers

Building on our infrastructure:

- 📚 **API Documentation**: Available on request
- 🔧 **Integration Support**: Technical consulting
- 🎓 **Workshops**: Lightning development training
- 🤝 **Partnerships**: Long-term collaboration

---

*Powering the future of payments with reliable Lightning infrastructure.*