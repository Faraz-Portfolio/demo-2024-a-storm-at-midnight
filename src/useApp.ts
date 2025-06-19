// @ts-ignore
import { create } from "zustand";

export const useApp = create(() => ({
  loaded: false,
  started: true,
}));
