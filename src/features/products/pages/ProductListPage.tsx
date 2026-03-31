import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

export default function ProductListPage() {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useProducts({ search });

  if (isLoading) return <div>Loading...</div>;

  const products = data?.data || [];

  return (
    <div className="p-6">
      <input
        className="mb-4 w-full border p-2"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {products.length === 0 && <p>No products found</p>}

      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4">
            <img
              src={p.images?.[0]?.imageUrl}
              className="h-40 w-full object-cover"
            />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
