# FitTrack — Static Fitness Landing (React + Tailwind)

This is a front-end-only static fitness website built with React, Vite, and Tailwind CSS. It includes pages for Home, Workouts, Nutrition, Progress, About, and Contact — all using mock data and no backend.

Quick start

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Then open the URL shown by Vite (usually http://localhost:5173).

Project structure (important files)

- `src/` — React source files
  - `components/` — reusable components (Navbar, Card, HeroSection, ProgressChart)
  - `pages/` — page components (Home, Workouts, Nutrition, Progress, About, Contact)
  - `context/ThemeContext.jsx` — light/dark theme toggle

Notes

- This is intentionally front-end-only and uses mock data for charts and content.
- To build production assets:

```bash
npm run build
```
