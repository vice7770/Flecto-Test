"use client"
import React from 'react';
import { Planet, PlanetsResponse } from './types/api';

interface PlanetsListProps {
    planets: PlanetsResponse;
}

const PlanetsList = (props : PlanetsListProps) => {
    const { results } = props.planets;
    return (
        <div>
            {
                results.map((planet : Planet) => {
                    return (
                        <div key={planet.name}>
                            <h2>{planet.name}</h2>
                            <p>Population: {planet.population}</p>
                            <p>Climate: {planet.climate}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PlanetsList;