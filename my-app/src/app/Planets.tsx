import React from 'react';
import PlanetsList from './PlanetsTable';
import { getPlanets } from './api/planets';

interface PlanetsProps {
    page: string;
}
const Planets = async (props : PlanetsProps) => {
    const { page } = props;
    return (
        <PlanetsList page={page}/>
    );
}

export default Planets;