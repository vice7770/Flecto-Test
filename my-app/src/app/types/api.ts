interface Planet {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}

interface PlanetsResponse {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}

export type { Planet, PlanetsResponse };