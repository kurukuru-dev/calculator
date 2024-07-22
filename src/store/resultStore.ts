import { create } from "zustand";

export const useResultStore = create((set) => ({
  result: 0,
  setResult: (result: number) => set({ result }),
}));
