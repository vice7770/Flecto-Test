import { PlanetsResponse, Planet, People } from '../types/api';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
};

export const getPlanets = async ({search, page} : {search: string, page: string}): Promise<PlanetsResponse> => {
    const url = `https://swapi.dev/api/planets?search=${search}&page=${page}`;
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

export const getAllFilms = async (films: string[]): Promise<string[]> => {
    const filmPromises = films.map(async (film) => {
        const response = await fetch(film, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.title;
    });
    return Promise.all(filmPromises);
}

export const getAllResidents = async (people: string[]): Promise<string[]> => {
    const peoplePromises = people.map(async (person) => {
        const response = await fetch(person, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data : People = await response.json();
        return data.name;
    });
    return Promise.all(peoplePromises);
}