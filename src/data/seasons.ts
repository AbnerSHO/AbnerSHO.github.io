// Temporadas con mascotas que caminan en una franja fija al pie de la pantalla
// (ver SeasonalPets.astro). Las fechas son "MM-DD", inclusivas, y se evalúan en el
// navegador de quien visita con su fecha local. Un rango puede cruzar el año
// (p. ej. 11-03 → 01-06). Fuera de toda temporada no se muestra nada.
// Para ver una temporada en cualquier fecha: /?temporada=<id>

export interface Pet {
  /** Dibujo (ver CatSprite.astro). */
  sprite: 'cat-pumpkin' | 'cat-ghost' | 'cat-witch' | 'cat-santa' | 'cat-reindeer' | 'cat-elf';
  /** Lo que dice al pasarle el mouse encima. */
  says: string;
  /** Segundos que tarda en cruzar la pantalla. */
  duration: number;
  /** Segundos de retraso antes de salir. Negativo = arranca a medio camino. */
  delay: number;
}

export interface Season {
  id: 'halloween' | 'navidad';
  label: string;
  from: string;
  to: string;
  pets: Pet[];
}

export const seasons: Season[] = [
  {
    id: 'halloween',
    label: 'Halloween',
    from: '10-20',
    to: '11-02',
    pets: [
      { sprite: 'cat-pumpkin', says: '¡Miau-lloween! 🎃', duration: 26, delay: -4 },
      { sprite: 'cat-ghost', says: 'Buuu… miau 👻', duration: 34, delay: -17 },
      { sprite: 'cat-witch', says: '¿Dulce o truco? 🍬', duration: 30, delay: -27 },
    ],
  },
  {
    id: 'navidad',
    label: 'Navidad',
    from: '11-03',
    to: '01-06',
    pets: [
      { sprite: 'cat-santa', says: '¡Jo, jo, miau! 🎅', duration: 30, delay: -6 },
      { sprite: 'cat-reindeer', says: 'Miaudolfo, a tus órdenes 🦌', duration: 36, delay: -19 },
      { sprite: 'cat-elf', says: '¿Ya hiciste tu carta? 🎁', duration: 28, delay: -24 },
    ],
  },
];
