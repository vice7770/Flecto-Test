import React from 'react';
import { getPlanetDetails } from '@/app/api/planets';

interface PageProps {
    params: {
      id: string;
    };
}

export default async function Page({ params } : PageProps) {
    const data = getPlanetDetails(params.id);
    const planet = await data;
    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Population: {planet.population}</p>
            <p>Climate: {planet.climate}</p>
        </div>
    );
}