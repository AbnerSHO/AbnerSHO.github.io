// Temporadas con mascotas que caminan al final de la página (ver SeasonalPets.astro).
// Las fechas son "MM-DD" y se evalúan en el navegador de quien visita, con su fecha local.
// Para verlas fuera de temporada: /?temporada=<id>

export interface Pet {
  /** Dibujo (ver los <symbol> en SeasonalPets.astro). */
  sprite: 'cat-pumpkin' | 'cat-ghost' | 'cat-witch';
  /** Lo que dice al pasarle el mouse encima. */
  says: string;
  /** Segundos que tarda en cruzar la pantalla. */
  duration: number;
  /** Segundos de retraso antes de salir. Negativo = arranca a medio camino. */
  delay: number;
}

export interface Season {
  id: string;
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
    to: '11-01',
    pets: [
      { sprite: 'cat-pumpkin', says: '¡Miau-lloween! 🎃', duration: 26, delay: -4 },
      { sprite: 'cat-ghost', says: 'Buuu… miau 👻', duration: 34, delay: -17 },
      { sprite: 'cat-witch', says: '¿Dulce o truco? 🍬', duration: 30, delay: -27 },
    ],
  },
];
