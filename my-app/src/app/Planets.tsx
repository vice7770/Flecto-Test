import React from 'react';
import PlanetsList from './PlanetsList';
import { getPlanets } from './api/planets';

const Planets = async () => {
    const data = getPlanets();
    const planets = await data;
    
    return (
        <div>
            <h1>Planets</h1>
            <PlanetsList planets={planets} />
        </div>
    );
}

export default Planets;