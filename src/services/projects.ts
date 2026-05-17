import { Project, ApiResponse } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function getAuthHeaders() {
  const { getToken } = await import("@clerk/nextjs/server").then(
    (m) => m.auth()
  );
  const token = await getToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// GET all projects
export async function getProjects(): Promise<Project[]> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/projects`, { headers });
  if (!res.ok) throw new Error("Failed to fetch projects");
  const data: ApiResponse<Project[]> = await res.json();
  return data.data;
}

// POST create project
export async function createProject(
  payload: Pick<Project, "name" | "description" | "prompt">
): Promise<Project> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create project");
  const data: ApiResponse<Project> = await res.json();
  return data.data;
}

// DELETE project
export async function deleteProject(id: string): Promise<void> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) throw new Error("Failed to delete project");
}