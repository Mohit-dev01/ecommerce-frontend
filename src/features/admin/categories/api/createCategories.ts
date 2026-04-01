import { api } from "../../../../lib/api-client";

export function createCategory(data: { name: string; slug: string }) {
  return api.post("/categories", data);
}
