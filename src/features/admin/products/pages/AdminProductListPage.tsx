import { useProducts } from "../../../products/hooks/useProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

export default function AdminProductListPage() {
  const { data, isLoading } = useProducts({});
  const deleteMutation = useDeleteProduct();

  if (isLoading) return <div>Loading...</div>;

  const products = data?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <div className="space-y-3">
        {products.map((p) => (
          <div key={p.id} className="border p-4 flex justify-between">
            <div>
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>

            <button
              onClick={() => deleteMutation.mutate(p.id)}
              className="bg-red-500 text-white px-3 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
