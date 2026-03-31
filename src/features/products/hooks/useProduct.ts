import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";
import { queryKeys } from "../../../lib/query-keys";

export function useProduct(slug: string) {
  return useQuery({
    queryKey: queryKeys.products.detail(slug),
    queryFn: () => getProduct(slug),
    enabled: !!slug,
  });
}
