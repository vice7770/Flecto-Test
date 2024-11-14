import React from 'react';
import PlanetsList from './PlanetsTable';

interface PlanetsProps {
    page: string;
}
const Planets = async (props : PlanetsProps) => {
    const { page } = props;
    return (
        <PlanetsList/>
    );
}

export default Planets;