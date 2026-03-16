# Planet Auto 

Built with **Vite + React + Tailwind CSS**.

## Tech Stack

- ⚡ [Vite](https://vitejs.dev/) – Lightning-fast dev server & bundler
- ⚛️ [React 18](https://react.dev/) – UI library
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/) – Utility-first styling
- 🔀 [React Router v6](https://reactrouter.com/) – Client-side routing
- 🖋️ [Lucide React](https://lucide.dev/) – Icon library
- 🔤 Google Fonts: **Barlow Condensed** (headings) + **DM Sans** (body)

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
Planet-auto/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mega-dropdown menus
│   │   ├── Hero.jsx            # Full-bleed hero with vehicle type links
│   │   ├── BrandLogos.jsx      # Brand tag cloud
│   │   ├── WhyChoose.jsx       # 4-card value propositions
│   │   ├── FeaturedInventory.jsx  # 6-vehicle inventory grid
│   │   ├── CTABanner.jsx       # Red financing CTA strip
│   │   ├── FinancingSection.jsx   # Split financing panel
│   │   ├── SellYourCar.jsx     # Sell your car split layout
│   │   ├── Testimonials.jsx    # Google review cards
│   │   ├── ContactSection.jsx  # Contact form + hours + info
│   │   └── Footer.jsx          # Full-width footer
│   ├── pages/
│   │   └── Home.jsx            # Assembles all sections
│   ├── App.jsx                 # Router + layout wrapper
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind directives + custom utilities
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Customisation

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    red:  '#D62B2B',   // Primary accent
    dark: '#111111',   // Dark backgrounds
    gray: '#1E1E1E',
    light: '#F5F5F5',  // Section backgrounds
  }
}
```

### Fonts
Swap the Google Fonts link in `index.html` and update `tailwind.config.js` → `fontFamily`.

### Vehicle Data
Inventory cards are driven by the `vehicles` array in `src/components/FeaturedInventory.jsx` — update with real data or connect to an API.

---

## License
Original brand belongs to Planet-Auto Cars.
Subhro Chatterjee 2026 
