import { create } from "zustand";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  isLoaded: boolean;
  setUser: (user: User | null) => void;
  setLoaded: (loaded: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoaded: false,
  setUser: (user) => set({ user }),
  setLoaded: (isLoaded) => set({ isLoaded }),
}));