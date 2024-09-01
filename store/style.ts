
import { GateSelect } from "@/db/schemas/gates";
import { Style } from "@/lib/interfaces";
import { create } from 'zustand'

type State = {
    styles: Style[],
    gates: GateSelect[],
    isFormOpen: boolean;
    selectedStyleId: number;
}

type Action = {
    setStyles: (Styles: Style[]) => void;
    setGates: (Gates: GateSelect[]) => void;
    setIsFormOpen: (isFormOpen: boolean) => void;
    setSelectedStyleId: (selectedStyleId: number) => void;
}

export const useStyleStore = create<State & Action>((set) => ({
    styles: [],
    gates: [],
    setStyles: (data) => set(() => ({ styles: data })),
    setGates: (data) => set(() => ({ gates: data })),
    isFormOpen: false,
    setIsFormOpen(isFormOpen) {
        set(() => ({ isFormOpen }))
    },
    selectedStyleId: 0,
    setSelectedStyleId(selectedStyleId) {
        set(() => ({ selectedStyleId }))
    }
}))