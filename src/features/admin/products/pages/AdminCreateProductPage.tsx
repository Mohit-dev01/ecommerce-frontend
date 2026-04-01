import { useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { useCategories } from "../../categories/hooks/useCategories";

export default function AdminCreateProductPage() {
  const createMutation = useCreateProduct();

  type CreateProductForm = {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
  };
  const [form, setForm] = useState<CreateProductForm>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    categoryId: "",
  });
  const { data } = useCategories();
  const categories = data?.data?.data || [];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createMutation.mutate(form);
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        onChange={(e) => setForm({ ...form, price: +e.target.value })}
      />
      <input
        placeholder="Stock"
        type="number"
        onChange={(e) => setForm({ ...form, stock: +e.target.value })}
      />
      <select
        value={form.categoryId}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setForm({ ...form, categoryId: e.target.value })
        }
        className="border p-2 w-full"
      >
        <option value="">Select Category</option>

        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button className="bg-black text-white p-2">Create Product</button>
    </form>
  );
}
