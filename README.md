# KOI - Ride to Conquer Cancer Data Platform

The KOI is a web app that tracks and visualizes participant data for "The Ride to Conquer Cancer" events. We're talking charitable cycling across multiple cities - basically helping cancer research while crushing it in the data game.

## Features

- Lightning-fast development with Vite - we're talking 10-100x faster hot reloads, no more waiting like LA traffic
- Multi-locale data tracking for 8+ cities across Canada and Australia - global domination mode activated
- Material Design UI with Angular Material components - sleek and smooth like a fresh Civic
- Secure authentication with JWT tokens - locked down tighter than my gaming PC
- Responsive design optimized for desktop and mobile - looks good on your rig or your phone
- Real-time data filtering and table visualizations - sort, filter, conquer
- International support for Toronto, Montreal, Vancouver, Alberta, Perth, Melbourne, Brisbane - world tour unlocked

## Quick Start

### Prerequisites

- Node.js 18+ - get that runtime ready
- npm 9+ - package manager on point

### Installation

```bash
# Grab those dependencies
npm install

# Fire up the dev servers (Vite + Express)
npm run start:dev

# Or run 'em separate:
npm run dev      # Vite dev server (port 3000)
npm start        # Express API server (port 4200)
```

### Build for Production

```bash
# Cook up that optimized production build
npm run build

# Test it locally
npm run preview

# Deploy with Express
NODE_ENV=production npm start
```

## Project Structure

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

## Tech Stack

### Frontend
- Angular 21 - Modern TypeScript framework, keeping it typed and tight
- Angular Material - Material Design components, clean UI vibes
- RxJS - Reactive programming, streams like a boss
- SCSS - Styled with modern CSS preprocessor, flexing that style

### Build & Development
- Vite 7.2 - Ultra-fast bundler and dev server, speed demon
- TypeScript 5.9 - Type-safe JavaScript, no runtime surprises
- @analogjs/vite-plugin-angular - Vite integration for Angular, smooth sailing

### Backend
- Node.js + Express - RESTful API server, reliable as my daily commute
- MongoDB + Mongoose - Database and ODM, storing data like a pro
- JWT - Secure authentication, tokens locked and loaded
- Axios - HTTP client, fetching data with style

## Authentication & Data Access

We're using JWT-based authentication with secure credential management - enterprise level security, no cap.

Note: Authentication credentials and API endpoints are configured via environment variables. Hit up the repo owner for access, keep it secure fam.

### Supported Event Locales

Multi-region support for charitable cycling events:
- Canada (Toronto, Montreal, Vancouver, Alberta)
- Australia (Perth, Melbourne, Brisbane)
- Walking Events (OneWalk Toronto)

## Data Visualization

Once you're authenticated, dive into:

- Interactive data tables with sorting and filtering - click, sort, filter like a data ninja
- Locale-specific views for different cities - zoom into your city
- Aggregated statistics across multiple events - see the big picture
- Responsive charts and visualizations - charts that adapt, mobile ready

## Performance

### Build Metrics

| Metric | Webpack (Old) | Vite (Current) | Improvement |
|--------|---------------|----------------|-------------|
| Cold Start | 30-60s | 1-2s | 30-60x faster |
| HMR | 2-5s | 50-200ms | 10-25x faster |
| Production Build | 45s | 18s | 2.5x faster |

### Bundle Size

Optimized production build with smart code splitting and tree-shaking - lean and mean, no bloat.

## Available Scripts

```bash
npm run dev          # Start Vite dev server (port 3000)
npm start            # Start Express API server (port 4200)
npm run start:dev    # Run both servers concurrently
npm run build        # Production build
npm run preview      # Preview production build
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Contributing

Wanna jump in and level up this project? Here's how:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Keep it clean, test your code, and let's build something epic together.

## Testing

We run tests to make sure everything's solid:

```bash
npm run test          # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run test:coverage # Check test coverage
```

Aim for high coverage - we're not shipping bugs on this ride.

## Deployment

For production deployment:

1. Build the app: `npm run build`
2. Set environment variables in your server
3. Deploy the `dist/` folder to your hosting platform
4. Configure MongoDB connection
5. Start the Express server: `NODE_ENV=production npm start`

We use Vercel for hosting, but it's flexible for other platforms.

## Troubleshooting

Running into issues? Common fixes:

- **Build fails**: Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- **Port conflicts**: Change ports in vite.config.ts or package.json scripts
- **Auth issues**: Double-check your .env variables
- **Performance**: Enable production mode and check bundle size

If you're stuck, check the issues tab or hit me up.

## Architecture Decisions

- **Vite over Webpack**: Speed and DX improvements were game-changing
- **Angular + Express**: Full-stack TypeScript consistency
- **MongoDB**: Flexible schema for event data across locales
- **JWT Auth**: Stateless authentication for scalability

## Roadmap

Future plans:
- Add more visualization types (charts, maps)
- Implement real-time updates with WebSockets
- Expand to more international locales
- Mobile app companion

Stay tuned for updates!
