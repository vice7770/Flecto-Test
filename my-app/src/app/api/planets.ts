import { PlanetsResponse, Planet } from '../types/api';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
};

export const getPlanets = async (): Promise<PlanetsResponse> => {
    const url = `https://swapi.dev/api/planets/`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}

export const getPlanetDetails = async (id: string): Promise<Planet> => {
    const url = `https://swapi.dev/api/planets/${id}/`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}