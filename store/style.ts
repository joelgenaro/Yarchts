
import { GateSelect } from "@/db/schemas/gates";
import { Style } from "@/lib/interfaces";
import { UserProfit } from "@/lib/types";
import { create } from 'zustand'

type State = {
    styles: Style[],
    gates: GateSelect[],
    userProfit: UserProfit,
    isFormOpen: boolean;
    selectedStyleId: number;
}

type Action = {
    setStyles: (Styles: Style[]) => void;
    setGates: (Gates: GateSelect[]) => void;
    setUserProfit: (userProfit: UserProfit) => void;
    setIsFormOpen: (isFormOpen: boolean) => void;
    setSelectedStyleId: (selectedStyleId: number) => void;
}

export const useStyleStore = create<State & Action>((set) => ({
    styles: [],
    setStyles: (data) => set(() => ({ styles: data })),
    gates: [],
    setGates: (data) => set(() => ({ gates: data })),
    userProfit: {} as UserProfit,
    setUserProfit(userProfit) {
        set(() => ({ userProfit }))
    },
    isFormOpen: false,
    setIsFormOpen(isFormOpen) {
        set(() => ({ isFormOpen }))
    },
    selectedStyleId: 0,
    setSelectedStyleId(selectedStyleId) {
        set(() => ({ selectedStyleId }))
    }
}))