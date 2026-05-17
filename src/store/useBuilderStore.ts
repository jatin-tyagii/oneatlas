import { create } from "zustand";
import { GenerationStatus, AIModel } from "@/types";

interface BuilderState {
  prompt: string;
  selectedModel: AIModel;
  generation: GenerationStatus;
  previewDevice: "desktop" | "tablet" | "mobile";
  previewUrl: string | null;
  setPrompt: (prompt: string) => void;
  setModel: (model: AIModel) => void;
  setGeneration: (generation: Partial<GenerationStatus>) => void;
  setPreviewDevice: (device: "desktop" | "tablet" | "mobile") => void;
  setPreviewUrl: (url: string | null) => void;
  resetBuilder: () => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  prompt: "",
  selectedModel: "gpt-4o-mini",
  generation: {
    status: "idle",
    progress: 0,
    message: "",
  },
  previewDevice: "desktop",
  previewUrl: null,
  setPrompt: (prompt) => set({ prompt }),
  setModel: (selectedModel) => set({ selectedModel }),
  setGeneration: (generation) =>
    set((state) => ({
      generation: { ...state.generation, ...generation },
    })),
  setPreviewDevice: (previewDevice) => set({ previewDevice }),
  setPreviewUrl: (previewUrl) => set({ previewUrl }),
  resetBuilder: () =>
    set({
      prompt: "",
      generation: { status: "idle", progress: 0, message: "" },
      previewUrl: null,
    }),
}));