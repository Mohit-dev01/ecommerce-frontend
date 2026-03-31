export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: {
    imageUrl: string;
    isPrimary: boolean;
  }[];
  category: {
    name: string;
    slug: string;
  };
};
