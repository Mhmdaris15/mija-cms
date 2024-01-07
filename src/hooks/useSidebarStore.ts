import { create } from "zustand";

interface SidebarState {
    isOpen: boolean;
    toggle: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
    isOpen: true,
    toggle: () => set((state: SidebarState) => ({ isOpen: !state.isOpen })),
}));

export { useSidebarStore };
export type { SidebarState };
