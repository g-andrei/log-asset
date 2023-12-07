import { create } from "zustand";

type StoreState = {
  isOpen: boolean;
  openMenu: () => void;
};

const useStore = create<StoreState>((set) => ({
  isOpen: false,
  openMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useStore;
