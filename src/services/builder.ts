import { AIModel } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface GeneratePayload {
  prompt: string;
  model: AIModel;
  projectId?: string;
}

// Streaming generation
export async function generateApp(
  payload: GeneratePayload,
  onChunk: (chunk: string) => void,
  onDone: () => void,
  onError: (error: string) => void
) {
  try {
    const response = await fetch(`${API_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      onError("Generation failed");
      return;
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      onError("No response stream");
      return;
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        onDone();
        break;
      }
      const chunk = decoder.decode(value);
      onChunk(chunk);
    }
  } catch (err) {
    onError("Network error");
  }
}