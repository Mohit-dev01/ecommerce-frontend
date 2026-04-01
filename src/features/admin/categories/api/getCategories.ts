// features/categories/api/getCategories.ts

import { api } from "../../../../lib/api-client";

export function getCategories() {
  return api.get("/categories");
}
