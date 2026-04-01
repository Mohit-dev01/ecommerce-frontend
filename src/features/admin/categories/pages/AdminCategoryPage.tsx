// pages/AdminCategoryPage.tsx

import { useState } from "react";
import { useCreateCategory } from "../hooks/useCreateCategories";

export default function AdminCategoryPage() {
  const createMutation = useCreateCategory();

  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const slug = name.toLowerCase().replace(/\s+/g, "-");

    createMutation.mutate({
      name,
      slug,
    });

    setName("");
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-bold mb-4">Create Category</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2">Create</button>
      </form>

      {createMutation.isSuccess && (
        <p className="text-green-600 mt-2">Category created</p>
      )}
    </div>
  );
}
