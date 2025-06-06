import React from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

// Import Prism languages
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-yaml';

// Utility to load markdown files
export const loadMarkdownFile = async (filename: string): Promise<string> => {
  try {
    const response = await fetch(`/docs/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return `# Error Loading Content\n\nFailed to load content from docs/${filename}`;
  }
};

// Custom renderer for marked
const renderer = new marked.Renderer();

// Custom heading renderer with anchor links
renderer.heading = (text: string, level: number) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  const className = {
    1: 'text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0',
    2: 'text-3xl font-bold text-gray-900 mb-4 mt-8',
    3: 'text-2xl font-semibold text-gray-900 mb-3 mt-6',
    4: 'text-xl font-semibold text-gray-900 mb-3 mt-4',
    5: 'text-lg font-semibold text-gray-900 mb-2 mt-4',
    6: 'text-base font-semibold text-gray-900 mb-2 mt-4'
  }[level] || 'text-base font-semibold text-gray-900 mb-2 mt-4';

  return `<h${level} id="${escapedText}" class="${className}">
    <a href="#${escapedText}" class="group flex items-center hover:text-blue-600 transition-colors duration-200">
      ${text}
      <span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-500">#</span>
    </a>
  </h${level}>`;
};

// Custom paragraph renderer
renderer.paragraph = (text: string) => {
  return `<p class="text-gray-600 leading-relaxed mb-4">${text}</p>`;
};

// Custom list renderer
renderer.list = (body: string, ordered: boolean) => {
  const tag = ordered ? 'ol' : 'ul';
  const className = ordered 
    ? 'list-decimal list-inside space-y-2 mb-6 text-gray-600 pl-4'
    : 'list-disc list-inside space-y-2 mb-6 text-gray-600 pl-4';
  return `<${tag} class="${className}">${body}</${tag}>`;
};

renderer.listitem = (text: string) => {
  return `<li class="leading-relaxed">${text}</li>`;
};

// Custom link renderer
renderer.link = (href: string, title: string | null, text: string) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  const titleAttr = title ? ` title="${title}"` : '';
  const className = 'text-blue-600 hover:text-blue-700 underline transition-colors duration-200';
  
  return `<a href="${href}" class="${className}"${target}${titleAttr}>${text}</a>`;
};

// Custom code renderer with syntax highlighting
renderer.code = (code: string, language: string | undefined) => {
  let highlightedCode = code;
  
  if (language && Prism.languages[language]) {
    try {
      highlightedCode = Prism.highlight(code, Prism.languages[language], language);
    } catch (error) {
      console.warn(`Failed to highlight code with language ${language}:`, error);
    }
  }

  const languageLabel = language ? `<div class="text-xs text-gray-400 mb-2 font-mono">${language}</div>` : '';
  
  return `<div class="relative mb-6">
    ${languageLabel}
    <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto border border-gray-700"><code class="text-sm font-mono">${highlightedCode}</code></pre>
  </div>`;
};

// Custom inline code renderer
renderer.codespan = (code: string) => {
  return `<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">${code}</code>`;
};

// Custom blockquote renderer
renderer.blockquote = (quote: string) => {
  return `<blockquote class="border-l-4 border-blue-500 pl-4 py-2 mb-6 bg-blue-50 text-gray-700 italic">${quote}</blockquote>`;
};

// Custom table renderer
renderer.table = (header: string, body: string) => {
  return `<div class="overflow-x-auto mb-6">
    <table class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
      <thead class="bg-gray-50">${header}</thead>
      <tbody class="bg-white divide-y divide-gray-200">${body}</tbody>
    </table>
  </div>`;
};

renderer.tablerow = (content: string) => {
  return `<tr class="hover:bg-gray-50 transition-colors duration-200">${content}</tr>`;
};

renderer.tablecell = (content: string, flags: { header: boolean; align: string | null }) => {
  const tag = flags.header ? 'th' : 'td';
  const className = flags.header 
    ? 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
    : 'px-6 py-4 whitespace-nowrap text-sm text-gray-900';
  const align = flags.align ? ` style="text-align: ${flags.align}"` : '';
  
  return `<${tag} class="${className}"${align}>${content}</${tag}>`;
};

// Custom horizontal rule renderer
renderer.hr = () => {
  return '<hr class="border-gray-300 my-8" />';
};

// Custom image renderer
renderer.image = (href: string, title: string | null, text: string) => {
  const titleAttr = title ? ` title="${title}"` : '';
  const altAttr = text ? ` alt="${text}"` : '';
  
  return `<div class="mb-6">
    <img src="${href}" class="max-w-full h-auto rounded-lg shadow-md mx-auto"${altAttr}${titleAttr} />
    ${text ? `<p class="text-center text-sm text-gray-500 mt-2 italic">${text}</p>` : ''}
  </div>`;
};

// Custom strong renderer
renderer.strong = (text: string) => {
  return `<strong class="font-semibold text-gray-900">${text}</strong>`;
};

// Custom emphasis renderer
renderer.em = (text: string) => {
  return `<em class="italic text-gray-700">${text}</em>`;
};

// Configure marked options
marked.setOptions({
  renderer,
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartypants: true,
});

// Enhanced markdown parser with proper HTML rendering
export const parseMarkdown = (markdown: string): React.ReactNode => {
  try {
    const html = marked(markdown);
    
    return (
      <div 
        className="markdown-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <h3 className="text-red-800 font-semibold mb-2">Error Parsing Content</h3>
        <p className="text-red-700 text-sm">
          There was an error parsing the markdown content. Please try refreshing the page.
        </p>
      </div>
    );
  }
};

// Utility to extract headings for table of contents
export const extractHeadings = (markdown: string): Array<{ id: string; text: string; level: number }> => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    
    headings.push({ id, text, level });
  }

  return headings;
};

// Utility to generate table of contents
export const generateTableOfContents = (headings: Array<{ id: string; text: string; level: number }>): React.ReactNode => {
  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
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
  );
};