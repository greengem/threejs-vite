import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PlanetData } from '../../types';
import { useSpeedControl } from '../contexts/SpeedControlContext';

type PlanetsUpdaterProps = {
  setPlanetOrbitProgress: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  planets: PlanetData[];
};

// Define a global factor to adjust all orbit speeds
const ORBIT_SPEED_FACTOR = 50; // For example, this factor would increase the speeds by 20%

const PlanetsUpdater: React.FC<PlanetsUpdaterProps> = ({ setPlanetOrbitProgress, planets }) => {
  const { speedFactor } = useSpeedControl();
  const lastElapsedTimeRef = useRef(0);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTimeRef.current;
    lastElapsedTimeRef.current = elapsedTime;

    setPlanetOrbitProgress((prevOrbitProgress) => {
      return planets.reduce((acc, planet) => {
        // Apply the ORBIT_SPEED_FACTOR to each planet's orbit speed
        const orbitSpeedRadians = (((planet.orbitSpeed * ORBIT_SPEED_FACTOR) / 360) * (2 * Math.PI)) * speedFactor;
        acc[planet.name] = (prevOrbitProgress[planet.name] || 0) + orbitSpeedRadians * deltaTime;
        return acc;
      }, { ...prevOrbitProgress });
    });
  });

  return null;
};

export default PlanetsUpdater;
