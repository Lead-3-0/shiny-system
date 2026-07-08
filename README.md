# Shiny System - Advanced Funnel Builder

A modern, feature-rich funnel builder application with real-time analytics, node-based workflow design, and comprehensive automation capabilities.

## Features

- **Visual Funnel Builder**: Drag-and-drop node-based interface for creating conversion funnels
- **Real-time Analytics**: Track visitors, leads, conversions, and revenue in real-time
- **Multiple Node Types**: Landing pages, forms, email sequences, analytics, and more
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **State Management**: Zustand-based state management for efficient data flow
- **API Integration**: RESTful API integration with error handling and retry logic
- **Dark Mode Support**: Built-in light and dark theme support
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundle size

## Tech Stack

- **Frontend**: React 18, Vite
- **State Management**: Zustand
- **Data Visualization**: Recharts
- **UI Components**: Custom CSS with responsive design
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Reviewone-ui/shiny-system.git
cd shiny-system

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Development

```bash
# Run development server
npm run dev

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Lint code
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Sidebar/        # Node library sidebar
│   ├── Canvas/         # Main canvas area
│   ├── TopBar/         # Top navigation
│   ├── Analytics/      # Analytics dashboard
│   ├── FunnelSettings/ # Funnel configuration
│   └── UI/             # Reusable UI components
├── hooks/              # Custom React hooks
├── services/           # API and external services
├── store/              # Zustand state stores
├── nodes/              # Node definitions and registry
├── styles/             # Global styles and components
├── utils/              # Utility functions
└── App.jsx             # Main app component
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## API Documentation

The application communicates with a backend API. Key endpoints:

- `GET /api/funnels` - List all funnels
- `POST /api/funnels` - Create new funnel
- `GET /api/funnels/{id}` - Get funnel details
- `PUT /api/funnels/{id}` - Update funnel
- `DELETE /api/funnels/{id}` - Delete funnel
- `GET /api/funnels/{id}/analytics` - Get funnel analytics

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@shinysystem.com or open an issue on GitHub.
