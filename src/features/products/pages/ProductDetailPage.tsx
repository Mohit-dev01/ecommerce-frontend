import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export default function ProductDetailPage() {
  const { slug } = useParams();

  const { data, isLoading } = useProduct(slug!);

  if (isLoading) return <div>Loading...</div>;

  const product = data?.data;

  if (!product) return <div>Not found</div>;

  return (
    <div className="p-6">
      <img
        src={product.images?.[0]?.imageUrl}
        className="h-80 w-full object-cover"
      />

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl">₹{product.price}</p>
    </div>
  );
}
