/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../../../lib/api-client";

export function createProduct(data: any) {
  return api.post("/products", data);
}
