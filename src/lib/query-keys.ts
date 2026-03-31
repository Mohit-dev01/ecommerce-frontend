export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },

  products: {
    all: ["products"] as const,
    detail: (slug: string) => ["products", slug] as const,
  },

  orders: {
    my: ["orders", "my"] as const,
    admin: ["orders", "admin"] as const,
  },
};
