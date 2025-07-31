# 🍽️ Bella Vista Restaurant Website

A modern, elegant, and fully responsive restaurant website showcasing fine dining excellence. Built with React, TypeScript, and SCSS, this project demonstrates contemporary web development practices with a focus on user experience and visual appeal.

https://github.com/user-attachments/assets/d09cc746-c758-4c49-bc26-03a12dbb149f

## 🌟 Features

### 🎨 Design & User Experience
- **Elegant Visual Design**: Rich color palette with browns, golds, and creams
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Intuitive Navigation**: Clean header with mobile-friendly hamburger menu
- **Accessibility**: Built with accessibility best practices

### 📱 Pages & Functionality
- **Home**: Hero section with call-to-action, welcome content, and features showcase
- **About**: Restaurant story, team member profiles, and company history
- **Menu**: Interactive menu with categories (Appetizers, Main Courses, Desserts)
- **Gallery**: Visual showcase of restaurant ambiance and cuisine
- **Events**: Information about special events and occasions
- **Reservations**: Table booking functionality
- **Testimonials**: Customer reviews and feedback
- **Contact**: Location, hours, and contact information

### 🛠️ Technical Features
- **React Router**: Client-side routing for seamless navigation
- **TypeScript**: Type-safe development with better IDE support
- **SCSS Variables**: Consistent theming and maintainable styles
- **Component Architecture**: Reusable and modular components
- **Modern Build Tools**: Vite for fast development and optimized builds

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript
- **Styling**: SCSS/Sass
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Code Quality**: ESLint with TypeScript support
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Footer.tsx       # Site footer
│   └── *.scss          # Component-specific styles
├── pages/               # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # Restaurant story and team
│   ├── Menu.tsx        # Interactive menu with categories
│   ├── Gallery.tsx     # Image gallery
│   ├── Contact.tsx     # Contact information
│   ├── Events.tsx      # Special events
│   ├── Reservations.tsx # Table booking
│   ├── Testimonials.tsx # Customer reviews
│   └── *.scss          # Page-specific styles
├── styles/              # Global styles and variables
│   ├── globals.scss    # Global styles and resets
│   ├── _variables.scss # SCSS variables for theming
│   └── safari-fixes.scss # Browser-specific fixes
└── assets/             # Static assets and images
```

## 🎨 Design System

### Color Palette
- **Primary**: `#8B4513` (Rich Brown) - Main brand color
- **Secondary**: `#D4AF37` (Elegant Gold) - Accent and highlights
- **Accent**: `#F5F5DC` (Beige/Cream) - Subtle backgrounds
- **Dark**: `#2C1810` (Dark Brown) - Text and contrasts
- **Light**: `#FFFFFF` (Pure White) - Clean backgrounds

### Typography
- **Primary Font**: Playfair Display (Serif) - Elegant headings
- **Secondary Font**: Source Sans Pro (Sans-serif) - Body text
- **Accent Font**: Dancing Script (Cursive) - Special elements

### Responsive Breakpoints
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 1024px and above
- **Large Desktop**: 1200px and above

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gpt-4.1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Zero-configuration deployment for Vite projects
- **Netlify**: Drag-and-drop deployment with continuous integration
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Scalable cloud hosting solution

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React functional component patterns with hooks
- Implement responsive design with mobile-first approach
- Use SCSS variables for consistent theming
- Write semantic HTML for accessibility

### Component Structure
- Keep components small and focused
- Use props interfaces for type safety
- Implement proper error handling
- Include loading states where appropriate

### Styling Conventions
- Use BEM methodology for CSS class naming
- Leverage SCSS mixins for reusable styles
- Follow the established color palette and typography
- Ensure cross-browser compatibility

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Features Implementation

### Interactive Menu System
The menu page features a dynamic category-based system with:
- Tab-based navigation between appetizers, mains, and desserts
- High-quality food images with hover effects
- Detailed descriptions and pricing
- Responsive grid layout

### Responsive Header
Smart navigation that:
- Transforms to hamburger menu on mobile
- Shows/hides based on scroll position
- Maintains active page highlighting
- Implements smooth transitions

### Performance Optimizations
- Optimized images with proper sizing
- Lazy loading for better performance
- Minimal bundle size with tree shaking
- Fast development with Vite HMR

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or suggestions about this project, please feel free to reach out or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

> This project showcases modern web development practices and serves as an excellent example of a professional restaurant website with elegant design and smooth user experience.
- Accessibility (a11y)
- SEO
- Performance
- Elegant typography & color palette
- High-quality images (replace placeholders)
- Smooth navigation & engaging animations
- Fully responsive design

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

---
Replace all placeholder images and content with your own for a unique, high-end dining experience.
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
