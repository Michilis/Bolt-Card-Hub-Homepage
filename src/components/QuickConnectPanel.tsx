import React, { useState, useEffect } from 'react';
import { Copy, Check, Zap, Smartphone, Download } from 'lucide-react';
import QRCode from 'qrcode';
import { config } from '../config/env';

const QuickConnectPanel = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [qrLoading, setQrLoading] = useState(true);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setQrLoading(true);
        const lndhubUrl = `bluewallet:setlndhuburl?url=${encodeURIComponent(config.hubUrl)}`;
        
        const qrDataUrl = await QRCode.toDataURL(lndhubUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'M'
        });
        
        setQrCodeDataUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setQrLoading(false);
      }
    };

    generateQRCode();
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Connect</h2>
          <p className="text-lg text-gray-600">Connect your BoltCard to Azzamo's Lightning infrastructure</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Connection Details */}
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Hub URL</label>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-mono text-sm text-gray-800">
                    {config.hubUrl}
                  </div>
                  <button
                    onClick={() => copyToClipboard(config.hubUrl, 'hubUrl')}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors duration-200"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'hubUrl' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                  Setup Steps
                </h3>
                <ol className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    Download the Bolt Card Wallet app
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    Set Hub URL to: <code className="bg-blue-100 px-1 rounded text-xs ml-1">{config.hubUrl}</code>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    Write your Bolt Card via NFC
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                    Start making Lightning payments!
                  </li>
                </ol>
              </div>

              {/* App download buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={config.apps.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">iOS App</span>
                </a>
                <a
                  href={config.apps.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Android</span>
                </a>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-4">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                  {qrLoading ? (
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-sm text-gray-500">Generating QR...</p>
                    </div>
                  ) : qrCodeDataUrl ? (
                    <img 
                      src={qrCodeDataUrl} 
                      alt="BoltCard Hub QR Code"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="h-16 w-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm text-gray-500">QR Code Error</p>
                    </div>
                  )}
                  
                  {/* Center logo overlay */}
                  {qrCodeDataUrl && !qrLoading && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900 mb-1">Scan to Connect</p>
                <p className="text-xs text-gray-500">Compatible with BlueWallet and other Lightning apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickConnectPanel;