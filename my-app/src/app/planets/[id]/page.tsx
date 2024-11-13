import { getPlanetDetails } from '@/app/api/planets';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const data = getPlanetDetails(params.id);
  const planet = await data;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="p-8 border-2 border-foreground rounded-lg">
        <h1 className="text-4xl font-bold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">
          {planet.name}
        </h1>
        {Object.entries(planet).map(([key, value]) =>
            {
                if(key === 'created' || key === 'edited') return;
                return(
                    <div key={key} className="flex justify-between">
                        <p className="text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-foreground">{key} : {value}</p>
                    </div>
                );
         })}
      </div>
    </div>
  );
}