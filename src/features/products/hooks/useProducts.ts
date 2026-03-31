/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { queryKeys } from "../../../lib/query-keys";

export function useProducts(params: any) {
  return useQuery({
    queryKey: [...queryKeys.products.all, params],
    queryFn: () => getProducts(params),
  });
}
