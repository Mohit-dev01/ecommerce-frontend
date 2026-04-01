import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../../lib/query-keys";
import { deleteProduct } from "../api/deleteProduct";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products.all,
      });
    },
  });
}
