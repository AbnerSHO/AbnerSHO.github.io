# abnersho.github.io

Perfil profesional / CV dinámico de Abner Sánchez. Astro + Tailwind v4, desplegado en GitHub Pages.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde está cada cosa

- `src/data/cv.ts`: **fuente única** del contenido. El sitio (`/`) y el CV imprimible (`/cv`) salen de aquí.
- `src/assets/photos/`: fotos propias. Astro las optimiza a WebP en varios tamaños.
- `src/components/JuliaCard.astro` + `src/styles/global.css`: efecto de hover "julia" (en pantallas táctiles se activa al hacer scroll).

## Deploy

`.github/workflows/deploy.yml` publica en cada push a `master`.
En GitHub: Settings → Pages → Source: **GitHub Actions**.
