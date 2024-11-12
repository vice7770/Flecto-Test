import React from 'react';
import PlanetsList from './PlanetsTable';
import { getPlanets } from './api/planets';

interface PlanetsProps {
    page: string;
}
const Planets = async (props : PlanetsProps) => {
    const { page } = props;
    const planets = await getPlanets(page);
    return (
        <PlanetsList planets={planets} />
    );
}

export default Planets;