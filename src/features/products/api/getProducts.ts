import { api } from "../../../lib/api-client";
import type { ApiResponse } from "../../auth/types/auth.types";
import type { Product } from "../types/product.types";

export async function getProducts(params?: {
  search?: string;
  category?: string;
}) {
  const response = await api.get<ApiResponse<Product[]>>("/products", {
    params,
  });

  return response.data;
}
