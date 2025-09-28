# SheruTov - Smart Business Services Website

A modern, responsive website for SheruTov built with React, TypeScript, and Tailwind CSS. The site provides information about smart business services with Hebrew RTL support.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and TypeScript for type safety
- **Component-Based Design**: Reusable and maintainable component structure
- **Responsive Layout**: Mobile-first design that works on all devices
- **RTL Support**: Full right-to-left text support for Hebrew content
- **Modern UI**: Clean, professional design with smooth animations
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout-related components
│   │   ├── Header.tsx   # Site header with navigation
│   │   ├── Footer.tsx   # Site footer with contact info
│   │   └── Layout.tsx   # Main layout wrapper
│   ├── ui/              # Generic UI components
│   │   ├── ServiceCard.tsx  # Service card component
│   │   └── Navigation.tsx   # Navigation component
│   └── index.ts         # Component exports
├── pages/               # Page components
│   └── HomePage.tsx     # Home page content
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces
├── assets/              # Static assets
├── App.tsx              # Main app component
├── App.css              # App-specific styles
├── index.css            # Global styles
└── main.tsx             # App entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Components

### Layout Components

#### `Layout`

Main wrapper component that provides consistent page structure with header and footer.

#### `Header`

Site header featuring:

- Brand logo/title with Hebrew text
- Navigation menu
- Responsive design
- Hover effects

#### `Footer`

Site footer including:

- Copyright information
- Contact details
- Professional styling

### UI Components

#### `ServiceCard`

Reusable card component for displaying services with:

- Title and description
- Hover animations
- Shadow effects
- Responsive design

#### `Navigation`

Flexible navigation component supporting:

- Multiple navigation items
- Active state indication
- RTL text direction
- Hover effects

### Pages

#### `HomePage`

Main landing page featuring:

- Hero section with call-to-action
- Services showcase
- Contact section
- Responsive grid layout

## 🌐 Internationalization

The website supports Hebrew text with RTL (Right-to-Left) layout:

- CSS direction property set to `rtl`
- Proper spacing classes for RTL
- Hebrew typography support

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Services Featured

1. **Task Management** (ניהול משימות)

   - Smart task management system
   - Advanced tracking and reporting

2. **Customer Service** (שירות לקוחות)

   - Automated response system
   - Real-time customer support

3. **Statistics & Reports** (סטטיסטיקות ודו"חות)
   - Performance tracking
   - Smart business insights

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, contact: support@sherutov.com

---

Built with ❤️ for modern businesses
