import { api } from "../../../lib/api-client";
import type { ApiResponse } from "../../auth/types/auth.types";
import type { Product } from "../types/product.types";

export async function getProduct(slug: string) {
  const response = await api.get<ApiResponse<Product>>(`/products/${slug}`);

  return response.data;
}
