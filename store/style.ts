
import { Style } from "@/lib/interfaces";
import { create } from 'zustand'

type State = {
    styles: Style[],
    isFormOpen: boolean;
    selectedStyleId: number;
}

type Action = {
    setStyles: (Styles: Style[]) => void;
    setIsFormOpen: (isFormOpen: boolean) => void;
    setSelectedStyleId: (selectedStyleId: number) => void;
}

export const useStyleStore = create<State & Action>((set) => ({
    styles: [],
    setStyles: (data) => set(() => ({ styles: data })),
    isFormOpen: false,
    setIsFormOpen(isFormOpen) {
        set(() => ({ isFormOpen }))
    },
    selectedStyleId: 0,
    setSelectedStyleId(selectedStyleId) {
        set(() => ({ selectedStyleId }))
    }
}))