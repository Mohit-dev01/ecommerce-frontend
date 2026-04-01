import { api } from "../../../../lib/api-client";

export function deleteProduct(id: string) {
  return api.delete(`/products/${id}`);
}
