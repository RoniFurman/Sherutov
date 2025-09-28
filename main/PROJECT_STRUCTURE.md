# SheruTov - Smart Business Services

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout-related components
│   │   ├── Header.tsx   # Site header with navigation
│   │   ├── Footer.tsx   # Site footer
│   │   └── Layout.tsx   # Main layout wrapper
│   ├── ui/              # Generic UI components
│   │   ├── ServiceCard.tsx  # Service card component
│   │   └── Navigation.tsx   # Navigation component
│   └── index.ts         # Component exports
├── pages/               # Page components
│   └── HomePage.tsx     # Home page content
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared types
├── assets/              # Static assets
├── App.tsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles with Tailwind
└── main.tsx             # App entry point
```

## Features

- **Modern React with TypeScript**: Full type safety and modern React patterns
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component-based Architecture**: Reusable and maintainable components
- **RTL Support**: Right-to-left text direction for Hebrew content
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI/UX**: Clean, professional design with smooth animations

## Components

### Layout Components

- **Layout**: Main wrapper component that provides consistent page structure
- **Header**: Site header with branding and navigation
- **Footer**: Site footer with contact information and copyright

### UI Components

- **ServiceCard**: Reusable card component for displaying services
- **Navigation**: Flexible navigation component

### Pages

- **HomePage**: Main landing page with hero section and services

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Styling

The project uses Tailwind CSS for styling with:

- RTL (Right-to-Left) support for Hebrew text
- Responsive design patterns
- Modern color scheme with blue primary colors
- Smooth transitions and hover effects
- Consistent spacing and typography

## Type Safety

All components are fully typed with TypeScript interfaces:

- `ServiceCard`: Interface for service card data
- `NavigationItem`: Interface for navigation items
- Proper component prop typing throughout
