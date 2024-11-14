import { useQuery } from '@tanstack/react-query';
import { getPlanets, getPlanetDetails } from '@/app/api/planets';
import { PlanetsResponse } from '@/app/types/api';

interface UseGetPlanetsProps {
  pageIndex: number;
  searchInputValue: string;
}

export const useGetPlanets = ({ pageIndex, searchInputValue }: UseGetPlanetsProps) => {
  return useQuery<PlanetsResponse>({
    queryKey: ['planets', pageIndex + 1, searchInputValue],
    queryFn: () => getPlanets({
      search: searchInputValue || '',
      page: (pageIndex + 1).toString(),
    }),
  });
};