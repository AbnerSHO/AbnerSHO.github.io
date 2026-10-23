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

## Pendientes

- [x] **Mascotas de temporada**: gatos con disfraz de Halloween que caminan al final de la página (20 oct – 1 nov).
  Temporadas en `src/data/seasons.ts`, dibujos en `src/components/CatSprite.astro`. Vista previa fuera de fecha: `/?temporada=halloween`.
- [ ] Más temporadas: Día de Muertos (cempasúchil, xoloitzcuintle) y Navidad.
- [ ] Versión en inglés (`/en`) desde el mismo `src/data/cv.ts`.
- [ ] "Pregúntale a mi CV": chat con RAG sobre la experiencia (necesita backend y control de costos).
- [x] Imagen Open Graph (`public/og.jpg`, plantilla en `scripts/og.html`)
- [ ] Probar en celular: tarjetas que se revelan al hacer scroll y la galería.
