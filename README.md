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

- [ ] **Mascotas de temporada**: gatos con disfraz de Halloween (calabaza, fantasma, bruja) que caminan por la parte baja de la página, al estilo de las mascotas del navegador.
  - Sprites SVG o PNG animados con CSS (`steps()` + `translateX`), sin librerías.
  - Se activa solo en un rango de fechas (p. ej. 20 oct – 2 nov) desde un archivo `src/data/seasons.ts`, para después agregar otras temporadas: Día de Muertos (cempasúchil, xoloitzcuintle), Navidad.
  - Botón para ocultarlas (se recuerda en `localStorage`) y desactivadas con `prefers-reduced-motion`.
  - Que no tapen contenido: `pointer-events: none`, detrás del footer.
  - Al pasar el mouse sobre un gato, que se detenga y maúlle con un globo de texto.
- [ ] Versión en inglés (`/en`) desde el mismo `src/data/cv.ts`.
- [ ] "Pregúntale a mi CV": chat con RAG sobre la experiencia (necesita backend y control de costos).
- [ ] Imagen Open Graph (vista previa para LinkedIn/WhatsApp).
- [ ] Probar en celular: tarjetas que se revelan al hacer scroll y la galería.
