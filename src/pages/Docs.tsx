import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Settings, 
  Smartphone, 
  DollarSign, 
  CreditCard, 
  Server, 
  Shield, 
  HelpCircle, 
  ArrowRight, 
  ExternalLink, 
  Download,
  Zap,
  Globe,
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Play,
  FileText,
  Link as LinkIcon,
  Wrench,
  TrendingUp,
  Clock,
  ChevronRight,
  Home,
  Search,
  Menu,
  X,
  List,
  Eye
} from 'lucide-react';
import { config } from '../config/env';
import { loadMarkdownFile, parseMarkdown, extractHeadings, generateTableOfContents } from '../utils/markdownLoader';
import { updatePageSEO } from '../utils/seo';
import { pageSEO } from '../config/seo';
import ProxyDebugInfo from '../components/ProxyDebugInfo';

const Docs = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [docContent, setDocContent] = useState<{ [key: string]: string }>({});
  const [headings, setHeadings] = useState<{ [key: string]: Array<{ id: string; text: string; level: number }> }>({});
  const [loading, setLoading] = useState(true);

  const sections = [
    { id: 'overview', title: 'Overview', icon: BookOpen, file: 'overview.md' },
    { id: 'getting-started', title: 'Getting Started', icon: Play, file: 'getting-started.md' },
    { id: 'writing-cards', title: 'Writing Cards', icon: CreditCard, file: 'writing-cards.md' },
    { id: 'payments', title: 'Top-Up & Payments', icon: DollarSign, file: 'payments.md' },
    { id: 'node-details', title: 'Node Details', icon: Server, file: 'node-details.md' },
    { id: 'features', title: 'Features & Integrations', icon: Wrench, file: 'features.md' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: HelpCircle, file: 'troubleshooting.md' },
    { id: 'resources', title: 'Resources & Tutorials', icon: FileText, file: 'resources.md' },
    { id: 'support', title: 'Support', icon: Users, file: 'support.md' }
  ];

  const quickLinks = [
    { title: 'Quick Setup', section: 'getting-started', description: 'Get your BoltCard working in 5 minutes' },
    { title: 'Hub Connection', section: 'getting-started', description: `Connect to ${config.hubUrl}` },
    { title: 'Payment Guide', section: 'payments', description: 'Learn to fund and use your card' },
    { title: 'Troubleshooting', section: 'troubleshooting', description: 'Fix common issues quickly' },
    { title: 'Node Info', section: 'node-details', description: 'Lightning node technical details' },
    { title: 'Get Support', section: 'support', description: 'Contact our team for help' }
  ];

  useEffect(() => {
    updatePageSEO(pageSEO.docs);
    
    const loadAllDocs = async () => {
      setLoading(true);
      const content: { [key: string]: string } = {};
      const headingsMap: { [key: string]: Array<{ id: string; text: string; level: number }> } = {};
      
      try {
        // Load all markdown files
        await Promise.all(
          sections.map(async (section) => {
            try {
              const markdown = await loadMarkdownFile(section.file);
              content[section.id] = markdown;
              headingsMap[section.id] = extractHeadings(markdown);
            } catch (error) {
              console.error(`Failed to load ${section.file}:`, error);
              content[section.id] = `# ${section.title}\n\nFailed to load content from docs/${section.file}`;
              headingsMap[section.id] = [];
            }
          })
        );
        
        setDocContent(content);
        setHeadings(headingsMap);
      } catch (error) {
        console.error('Error loading documentation:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAllDocs();
  }, []);

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SidebarSection = ({ section }: { section: typeof sections[0] }) => {
    const Icon = section.icon;
    const isActive = activeSection === section.id;
    
    return (
      <button
        onClick={() => {
          setActiveSection(section.id);
          setSidebarOpen(false);
        }}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
          isActive
            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
        }`}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <span className="font-medium">{section.title}</span>
        {isActive && <ChevronRight className="h-4 w-4 ml-auto" />}
      </button>
    );
  };

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection);
  const previousSection = currentSectionIndex > 0 ? sections[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sections.length - 1 ? sections[currentSectionIndex + 1] : null;
  const currentHeadings = headings[activeSection] || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Debug Info Component (dev only) */}
      <ProxyDebugInfo />
      
      {/* Header - Not Sticky */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                <BookOpen className="h-4 w-4 mr-2" />
                Documentation
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {config.company.name} BoltCard Hub
              </h1>
              <p className="text-xl text-gray-600">
                Complete guide to Lightning Network payments
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowToc(!showToc)}
                className="hidden lg:flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                title="Toggle Table of Contents"
              >
                <List className="h-4 w-4 mr-2" />
                TOC
              </button>
              
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className={`lg:block ${sidebarOpen ? 'block' : 'hidden'} w-full lg:w-80 flex-shrink-0`}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-8">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Documentation
                </div>
                {filteredSections.map((section) => (
                  <SidebarSection key={section.id} section={section} />
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Quick Actions
                </div>
                <div className="space-y-2">
                  <Link
                    to="/"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Home className="h-4 w-4" />
                    <span>Back to Home</span>
                  </Link>
                  <Link
                    to="/node"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Server className="h-4 w-4" />
                    <span>View Node Stats</span>
                  </Link>
                  <a
                    href={config.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Users className="h-4 w-4" />
                    <span>Get Support</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-8">
              {/* Content Area */}
              <div className="flex-1 min-w-0">
                {/* Quick Links Grid - Only show on overview */}
                {activeSection === 'overview' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {quickLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(link.section)}
                        className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 text-left group"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          Read more
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Content Area */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 lg:p-12">
                  {/* Breadcrumb */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                    <span>Documentation</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 font-medium">
                      {sections.find(s => s.id === activeSection)?.title}
                    </span>
                  </div>

                  {/* Table of Contents for current section */}
                  {currentHeadings.length > 0 && activeSection !== 'overview' && (
                    <div className="lg:hidden mb-8">
                      {generateTableOfContents(currentHeadings)}
                    </div>
                  )}

                  {/* Section Content */}
                  <div className="prose prose-lg max-w-none">
                    {docContent[activeSection] ? (
                      parseMarkdown(docContent[activeSection])
                    ) : (
                      <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading content...</p>
                      </div>
                    )}

                    {/* Navigation between sections */}
                    {docContent[activeSection] && (
                      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                        <div>
                          {previousSection && (
                            <button
                              onClick={() => setActiveSection(previousSection.id)}
                              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                            >
                              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                              {previousSection.title}
                            </button>
                          )}
                        </div>
                        <div>
                          {nextSection && (
                            <button
                              onClick={() => setActiveSection(nextSection.id)}
                              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                            >
                              {nextSection.title}
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Table of Contents Sidebar */}
              {showToc && currentHeadings.length > 0 && (
                <div className="hidden lg:block w-64 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Contents</h3>
                      <button
                        onClick={() => setShowToc(false)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <nav className="space-y-2">
                      {currentHeadings.map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={`block text-sm hover:text-blue-600 transition-colors duration-200 ${
                            heading.level === 1 ? 'font-semibold text-gray-900' :
                            heading.level === 2 ? 'font-medium text-gray-800 pl-4' :
                            'text-gray-600 pl-8'
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need More Help?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our support team is ready to help you get the most out of your BoltCard experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={config.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Join Telegram
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href={`mailto:${config.company.supportEmail}`}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;