# Bolt Card Hub Homepage

![Bolt Card Hub](https://img.shields.io/badge/Lightning%20Network-BoltCard-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)

## 🚀 Overview

The **Bolt Card Hub Homepage** is the front-facing web application for Azzamo's BoltCard Hub - a Lightning Network payment infrastructure platform. This homepage provides users with a seamless interface to connect their BoltCards, access documentation, monitor node status, and manage their Lightning Network payments.

### Key Features

- ⚡ **Quick BoltCard Connection** - Connect your BoltCard in seconds
- 📚 **Comprehensive Documentation** - Complete setup and usage guides
- 🔍 **Node Monitoring** - Real-time Lightning Node status and information
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🔒 **Secure Infrastructure** - Built with security and reliability in mind
- 📱 **Mobile Responsive** - Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 6.20.1
- **Icons**: Lucide React 0.344.0
- **QR Code Generation**: QRCode 1.5.3
- **Markdown Processing**: Marked 12.0.0
- **Code Highlighting**: Prism.js 1.29.0
- **Linting**: ESLint 9.9.1



## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Bolt-Card-Hub-Homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗️ Build and Deployment

### Production Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `env.example` and configure the following variables:

```env
# Add your environment-specific variables here
VITE_API_BASE_URL=your_api_url
VITE_NODE_URL=your_lightning_node_url
```

### Tailwind Configuration

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite Configuration

Build and development server settings are configured in `vite.config.ts`.

## 🌟 Features Deep Dive

### User Experience
- Responsive design for all devices
- Fast loading with Vite optimization
- Intuitive navigation and user flows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write descriptive commit messages
- Ensure all linting passes before committing

## 📄 License

This project is proprietary to Azzamo BoltCard Hub. All rights reserved.

## 🆘 Support

For support and questions:

- 📧 **Email**: support@azzamo.com
- 📖 **Documentation**: Available in the `/docs` section
- 🐛 **Issues**: Report bugs through the issue tracker