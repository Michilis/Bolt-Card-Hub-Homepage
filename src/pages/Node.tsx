import React, { useState, useEffect } from 'react';
import { Server, Copy, Check, ExternalLink, Zap, Shield, Clock, Users, Activity, Heart, QrCode } from 'lucide-react';
import QRCode from 'qrcode';
import { config } from '../config/env';
import { updatePageSEO } from '../utils/seo';
import { pageSEO } from '../config/seo';

interface NodeInfo {
  public_key: string;
  alias: string;
  first_seen: number;
  updated_at: number;
  color: string;
  sockets: string;
  active_channel_count: number;
  capacity: string;
  opened_channel_count: number;
  closed_channel_count: number;
}

const Node = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [nodeInfo, setNodeInfo] = useState<NodeInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donationQR, setDonationQR] = useState<string>('');

  useEffect(() => {
    updatePageSEO(pageSEO.node);
    
    const fetchNodeInfo = async () => {
      try {
        setLoading(true);
        const nodeResponse = await fetch(`https://mempool.space/api/v1/lightning/nodes/${config.node.pubkey}`);
        if (nodeResponse.ok) {
          const node = await nodeResponse.json();
          setNodeInfo(node);
        }
      } catch (err) {
        setError('Failed to fetch node data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    const generateDonationQR = async () => {
      try {
        // Generate QR code for Lightning address
        const lightningUrl = `lightning:${config.donation.lightningAddress}`;
        const qrDataURL = await QRCode.toDataURL(lightningUrl, {
          width: 160,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        setDonationQR(qrDataURL);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };

    fetchNodeInfo();
    generateDonationQR();
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const CopyableField = ({ label, value, field }: { label: string; value: string; field: string }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center space-x-3">
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-mono text-sm text-gray-800 break-all">
          {value}
        </div>
        <button
          onClick={() => copyToClipboard(value, field)}
          className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors duration-200 flex-shrink-0"
          title="Copy to clipboard"
        >
          {copiedField === field ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading node data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Server className="h-4 w-4 mr-2" />
            Lightning Node
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {config.company.name} Lightning Node
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade Lightning Network infrastructure powering your BoltCard
          </p>
        </div>

        {/* Node Status */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-gray-900">Node Status: Online</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-center text-gray-600 text-sm">All systems operational - Ready to process Lightning payments</p>
          {nodeInfo && (
            <div className="text-center mt-3">
              <p className="text-xs text-gray-500">
                Last updated: {new Date(nodeInfo.updated_at * 1000).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Connection Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Server className="h-5 w-5 mr-2 text-blue-600" />
            Connection Details
          </h2>
          
          <div className="space-y-6">
            <CopyableField 
              label="Node URI" 
              value={config.node.uri} 
              field="nodeUri" 
            />
            
            <CopyableField 
              label="Public Key" 
              value={config.node.pubkey} 
              field="publicKey" 
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              Security Features
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Hardware Security Module (HSM) protected
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Multi-signature wallet architecture
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Regular security audits and monitoring
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Automated backup and recovery systems
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-600" />
              Monitoring & Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                {config.network.supportHours} automated monitoring
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Real-time alerting system
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Proactive maintenance windows
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Technical support via Telegram
              </li>
            </ul>
          </div>
        </div>

        {/* Donation Section */}
        {config.features.enableDonations && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-3">
                <Heart className="h-4 w-4 mr-2" />
                Support {config.company.name}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Help Keep Our Infrastructure Running
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Your donations help us maintain reliable Lightning Network infrastructure for the BoltCard community
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Donation Info */}
              <div className="space-y-4">
                <CopyableField 
                  label="Lightning Address" 
                  value={config.donation.lightningAddress} 
                  field="lightningAddress" 
                />
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                    <Zap className="h-4 w-4 mr-2 text-orange-600" />
                    Why Donate?
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      Maintain {config.network.uptimeGuarantee} uptime guarantee
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      Support free BoltCard hosting
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      Fund infrastructure improvements
                    </li>
                  </ul>
                </div>
              </div>

              {/* Donation QR */}
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  {donationQR ? (
                    <img 
                      src={donationQR} 
                      alt="Lightning Donation QR Code" 
                      className="w-40 h-40 rounded-xl"
                    />
                  ) : (
                    <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Generating QR...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Lightning:</strong> {config.donation.lightningAddress}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">Scan with Lightning wallet</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">1K sats</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">10K sats</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">100K sats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Some real-time data may be unavailable. Displaying cached information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Node;