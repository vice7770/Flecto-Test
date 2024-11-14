import { create } from 'zustand'

const usePlanetsStore = create((set) => ({
  isPlanetsSearchLoading: false,
  actions: {
    setIsSearchLoading: (isLoading : boolean) => {
        set({ isPlanetsSearchLoading: isLoading })
    }
  },
}));


export const usePlanetsActions = () => usePlanetsStore((state) => state.actions)

export const usePlanetsSearchIsLoading = () => usePlanetsStore((state) => state.isPlanetsSearchLoading)
