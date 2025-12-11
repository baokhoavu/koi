# 🎏 KOI - Ride to Conquer Cancer Data Platform

> A modern web application built for tracking and visualizing participant data for "The Ride to Conquer Cancer" charitable events across multiple cities.

[![Angular](https://img.shields.io/badge/Angular-21.0-dd0031?logo=angular)](https://angular.io/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)

## ✨ Features

- 🚀 **Lightning-fast development** with Vite (10-100x faster HMR)
- 📊 **Multi-locale data tracking** for 8+ cities across Canada and Australia
- 🎨 **Material Design UI** with Angular Material components
- 🔐 **Secure authentication** with JWT tokens
- 📱 **Responsive design** optimized for desktop and mobile
- 🎯 **Real-time data filtering** and table visualizations
- 🌍 **International support** for Toronto, Montreal, Vancouver, Alberta, Perth, Melbourne, Brisbane

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development servers (Vite + Express)
npm run start:dev

# Or run separately:
npm run dev      # Vite dev server (port 3000)
npm start        # Express API server (port 4200)
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy with Express
NODE_ENV=production npm start
```

## 📁 Project Structure

```
koi/
├── assets/app/          # Angular application source
│   ├── components/      # Reusable UI components
│   ├── services/        # Data services and API clients
│   ├── auth/           # Authentication logic
│   └── tables/         # Data table components
├── routes/             # Express API routes
├── models/             # MongoDB data models
├── public/             # Static assets
├── dist/               # Production build output
└── vite.config.ts      # Vite configuration
```

## 🔧 Tech Stack

### Frontend
- **Angular 21** - Modern TypeScript framework
- **Angular Material** - Material Design components
- **RxJS** - Reactive programming
- **SCSS** - Styled with modern CSS preprocessor

### Build & Development
- **Vite 7.2** - Ultra-fast bundler and dev server
- **TypeScript 5.9** - Type-safe JavaScript
- **@analogjs/vite-plugin-angular** - Vite integration for Angular

### Backend
- **Node.js + Express** - RESTful API server
- **MongoDB + Mongoose** - Database and ODM
- **JWT** - Secure authentication
- **Axios** - HTTP client

## 🔐 Authentication & Data Access

The application uses JWT-based authentication with secure credential management.

⚠️ **Note:** Authentication credentials and API endpoints are configured via environment variables. Contact the repository owner for access.

### Supported Event Locales

Multi-region support for charitable cycling events:
- 🇨🇦 Canada (Toronto, Montreal, Vancouver, Alberta)
- 🇦🇺 Australia (Perth, Melbourne, Brisbane)
- 🚶 Walking Events (OneWalk Toronto)

## 📊 Data Visualization

Authenticated users can access:

- **Interactive data tables** with sorting and filtering
- **Locale-specific views** for different cities
- **Aggregated statistics** across multiple events
- **Responsive charts** and visualizations

## 🎯 Performance

### Build Metrics

| Metric | Webpack (Old) | Vite (Current) | Improvement |
|--------|---------------|----------------|-------------|
| Cold Start | 30-60s | 1-2s | **30-60x faster** ⚡ |
| HMR | 2-5s | 50-200ms | **10-25x faster** 🔥 |
| Production Build | 45s | 18s | **2.5x faster** 🚀 |

### Bundle Size

Optimized production build with smart code splitting and tree-shaking.

## 🛠️ Available Scripts

```bash
npm run dev          # Start Vite dev server (port 3000)
npm start            # Start Express API server (port 4200)
npm run start:dev    # Run both servers concurrently
npm run build        # Production build
npm run preview      # Preview production build
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 📚 Documentation

- [Vite Migration Guide](./VITE_MIGRATION.md) - Complete migration details
- [Angular Documentation](https://angular.io/docs)
- [Vite Documentation](https://vitejs.dev/)

Originally developed for [CauseForce](http://www.causeforce.com/) to support [The Ride to Conquer Cancer](http://www.conquercancer.ca) participants but modernized further testing.

- **Moe Quraishi**
- **Christian Solis**
- **Kevin Tian**
- **Baokhoa Vu**

## 👨‍💻 Developer

## 📝 License

Private project - All rights reserved.

---

**Built with ❤️ for cancer research fundraising events**
