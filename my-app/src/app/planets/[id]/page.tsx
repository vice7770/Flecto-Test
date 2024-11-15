import { getAllFilms, getAllResidents, getPlanetDetails } from '@/app/api/planets';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const data = getPlanetDetails(params.id);
  const planet = await data;
  const films = getAllFilms(planet.films as string[]);
  const filmsData = await films;
  const filmsList = filmsData.join(', ');
  const residents = getAllResidents(planet.residents as string[]);
  const residentsData = await residents;
  const residentsList = residentsData.join(', ');

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl p-4 md:p-8 border-2 border-foreground rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">
          {planet.name}
        </h1>
        {Object.entries(planet).map(([key, value]) => {
          if (key === 'created' || key === 'edited' || key === 'url' || key === 'films' || key === 'residents') return null;
          return (
            <div key={key} className="flex justify-between">
              <p className="text-sm md:text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">
                {key} : {value}
              </p>
            </div>
          );
        })}
        <div key='residents' className="flex justify-between">
          <p className="text-sm md:text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">
            residents : {residentsList}
          </p>
        </div>
        <div key='films' className="flex justify-between">
          <p className="text-sm md:text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">
            films : {filmsList}
          </p>
        </div>
      </div>
    </div>
  );
}