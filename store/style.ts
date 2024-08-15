import { UserSelect } from '@/db/schemas/users'
import { create } from 'zustand'

type State = {
    companies: UserSelect[],
    filteredCompanies: UserSelect[]
}

type Action = {
    setCompanies: (companies: UserSelect[]) => void;
    setFilteredCompanies: (filteredCompanies: UserSelect[]) => void;
}

export const useCompaniesStore = create<State & Action>((set) => ({
    companies: [],
    setCompanies: (companies) => set(() => ({ companies: companies })),
    filteredCompanies: [],
    setFilteredCompanies: (filteredCompanies) => set(() => ({ filteredCompanies: filteredCompanies })),
}))