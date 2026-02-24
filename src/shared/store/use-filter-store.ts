import { create } from "zustand";

export interface FilterState {
  valueMin: number | null
  valueMax: number | null
  selectedCategories: number[]
  searchText: string
}

interface FilterStore {
  appliedFIlterState: FilterState

  updateFilter: (props: {
    key: keyof FilterState,
    value: string | number | number[]
    
    }) => void

  resetFilter: () => void
  
}

const defaultFilterValues = {
  searchText: '',
  selectedCategories: [],
  valueMax: null,
  valueMin: null
}

export const useUserFilterStore = create<FilterStore>((set) => ({
  appliedFIlterState: defaultFilterValues,

  updateFilter: ({key, value}) => {
    set((state) => ({
      appliedFIlterState: {...state.appliedFIlterState, [key]: value}

    }))
  },

  resetFilter: () => set({
    appliedFIlterState: defaultFilterValues,
  })
  
}))