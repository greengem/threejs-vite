// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const baseOrbitSpeed = 1;

const planetsData: PlanetData[] = [
  {
    id: 1,
    name: "Mercury",
    texturePath: "/images/bodies/mercury_2k.webp",
    position: new Vector3(1.5, 0, 0),
    radius: 0.1,
    rotationSpeed: 1,
    tilt: 0.00017,
    orbitSpeed: baseOrbitSpeed / 0.24,
    displayStats: {
      classification: "Terrestrial planet",
      orbitalPeriod: 88,
      meanDistanceFromSun: 0.39,
      accurateRadius: 2440,
      mass: 0.055,
      surfaceGravity: 0.38,
      rotationPeriod: 58.6,
      axialTilt: 0.034,
      numberOfMoons: 0,
      atmosphericComposition: "Trace amounts of hydrogen, helium, oxygen, sodium, calcium, potassium",
      surfaceTemp: "-173 to 427°C",
    },
    moons: [],
  },
  {
    id: 2,
    name: "Venus",
    texturePath: "/images/bodies/venus_surface_2k.webp",
    position: new Vector3(2.2, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 3.09639,
    orbitSpeed: baseOrbitSpeed / 0.62,
    displayStats: {
      classification: "Terrestrial planet",
      orbitalPeriod: 225,
      meanDistanceFromSun: 0.72,
      accurateRadius: 6052,
      mass: 0.815,
      surfaceGravity: 0.904,
      rotationPeriod: -243,
      axialTilt: 177.4,
      numberOfMoons: 0,
      atmosphericComposition: "Carbon dioxide, nitrogen",
      surfaceTemp: "462°C",
    },
    moons: [],
  },
  {
    id: 3,
    name: "Earth",
    texturePath: "/images/bodies/earth_2k.webp",
    position: new Vector3(3, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 0.40928,
    orbitSpeed: 0.6,
    displayStats: {
      classification: "Terrestrial planet",
      orbitalPeriod: 365.25,
      meanDistanceFromSun: 1,
      accurateRadius: 6371,
      mass: 1,
      surfaceGravity: 1,
      rotationPeriod: 23.93,
      axialTilt: 23.44,
      numberOfMoons: 1,
      atmosphericComposition: "Nitrogen, oxygen",
      surfaceTemp: "-88 to 58°C",
    },
    moons: [],
  },
  {
    id: 4,
    name: "Mars",
    texturePath: "/images/bodies/mars_2k.webp",
    position: new Vector3(4, 0, 0),
    radius: 0.13,
    rotationSpeed: 0.5,
    tilt: 0.43965,
    orbitSpeed: baseOrbitSpeed / 1.88,
    displayStats: {
      classification: "Terrestrial planet",
      orbitalPeriod: 687,
      meanDistanceFromSun: 1.52,
      accurateRadius: 3390,
      mass: 0.107,
      surfaceGravity: 0.376,
      rotationPeriod: 24.6,
      axialTilt: 25.19,
      numberOfMoons: 2,
      atmosphericComposition: "Carbon dioxide, nitrogen, argon",
      surfaceTemp: "-125 to 20°C",
    },
    moons: [],
  },
  {
    id: 5,
    name: "Jupiter",
    texturePath: "/images/bodies/jupiter_2k.webp",
    position: new Vector3(6, 0, 0),
    radius: 0.25,
    rotationSpeed: 0.2,
    tilt: 0.05463,
    orbitSpeed: baseOrbitSpeed / 11.86,
    displayStats: {
      classification: "Gas giant",
      orbitalPeriod: 11.86,
      meanDistanceFromSun: 5.20,
      accurateRadius: 69911,
      mass: 317.8,
      surfaceGravity: 2.528,
      rotationPeriod: 9.93,
      axialTilt: 3.13,
      numberOfMoons: 79,
      atmosphericComposition: "Hydrogen, helium",
      surfaceTemp: "-145°C",
    },
    moons: [],
  },
  {
    id: 6,
    name: "Saturn",
    texturePath: "/images/bodies/saturn_2k.webp",
    position: new Vector3(9, 0, 0),
    radius: 0.2,
    rotationSpeed: 0.1,
    tilt: 0.46653,
    orbitSpeed: baseOrbitSpeed / 29.46,
    rings: {
      texturePath: "/images/bodies/saturn_ring.png",
      size: [0.2, 0.46],
    },
    displayStats: {
      classification: "Gas giant",
      orbitalPeriod: 29.45,
      meanDistanceFromSun: 9.58,
      accurateRadius: 58232,
      mass: 95.2,
      surfaceGravity: 1.065,
      rotationPeriod: 10.7,
      axialTilt: 26.73,
      numberOfMoons: 82,
      atmosphericComposition: "Hydrogen, helium",
      surfaceTemp: "-178°C",
    },
    moons: [],
  },
  {
    id: 7,
    name: "Uranus",
    texturePath: "/images/bodies/uranus_2k.webp",
    position: new Vector3(13, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.07,
    tilt: 1.70622,
    orbitSpeed: baseOrbitSpeed / 84.01,
    displayStats: {
      classification: "Ice giant",
      orbitalPeriod: 84,
      meanDistanceFromSun: 11.22,
      accurateRadius: 25362,
      mass: 14.5,
      surfaceGravity: 0.886,
      rotationPeriod: -17.2,
      axialTilt: 97.77,
      numberOfMoons: 27,
      atmosphericComposition: "Hydrogen, helium, methane",
      surfaceTemp: "-224°C",
    },
    moons: [],
  },
  {
    id: 8,
    name: "Neptune",
    texturePath: "/images/bodies/neptune_2k.webp",
    position: new Vector3(17, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.06,
    tilt: 0.49428,
    orbitSpeed: baseOrbitSpeed / 164.8,
    displayStats: {
      classification: "Ice giant",
      orbitalPeriod: 164.8,
      meanDistanceFromSun: 30.07,
      accurateRadius: 24622,
      mass: 17.15,
      surfaceGravity: 1.14,
      rotationPeriod: 16.11,
      axialTilt: 28.32,
      numberOfMoons: 14,
      atmosphericComposition: "Hydrogen, helium, methane",
      surfaceTemp: "-214°C",
    },
    moons: [],
  },

];

export default planetsData;
