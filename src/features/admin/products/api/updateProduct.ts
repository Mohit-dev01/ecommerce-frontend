/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../../../lib/api-client";

export function updateProduct(id: string, data: any) {
  return api.put(`/products/${id}`, data);
}
