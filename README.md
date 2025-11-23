# Portfolio App (React + Vite)

Modernized portfolio site built with React 18, TypeScript, and Vite for fast local dev and production builds.

## Getting Started

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the build
npm run typecheck  # TypeScript without emitting
```

## Project Structure

```text
/public/assets   # static assets (images, PDF, favicon)
/src
  App.tsx       # page layout + sections
  content.ts    # page data (links, projects, skills)
  main.tsx      # React entry point
  /styles       # CSS (migrated from the original site)
```

## Notes

- Animations are handled by `aos` and initialized in `App.tsx`.
- Global styling mirrors the original CSS, now imported through Vite for bundling and cache-busting.
