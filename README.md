# QA Consult Africa - Vue 3 Website

A modern Vue 3 Single Page Application (SPA) for QA Consult Africa, built with Vite and Tailwind CSS.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management
- **Vite** - Next generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Modern mobile touch slider
- **GSAP** - Professional-grade animation library
- **Lucide Vue** - Beautiful & consistent icon toolkit

## Features

- Responsive design optimized for all devices
- Modern animations and transitions
- Dynamic routing for services, team profiles, and articles
- SEO-friendly structure
- Fast performance with Vite's optimized build

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd qa-vue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
qa-vue/
├── public/
│   └── images/           # Static assets
├── src/
│   ├── assets/
│   │   └── css/          # Global styles
│   ├── components/       # Reusable components
│   ├── composables/      # Vue composables
│   ├── data/             # Static data files
│   ├── layouts/          # Page layouts
│   ├── router/           # Vue Router config
│   ├── views/            # Page views
│   ├── App.vue           # Root component
│   └── main.js           # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Pages

- **Home** - Landing page with hero slider, about, services, team, and blog sections
- **About** - Company information, mission, vision, and values
- **Services** - All services with detailed service pages
- **Team** - Team members with individual profile pages
- **Blog** - Articles and news with detail pages
- **Contact** - Contact form with company information

## Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  'qa-orange': '#F15A3B',
  'qa-blue': '#2B2E83',
  // ...
}
```

### Fonts

The project uses:
- **Lato** - Body text
- **Playfair Display** - Headings

Fonts are loaded from Google Fonts in `index.html`.

## License

All rights reserved. QA Consult Africa © 2024
