export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
};

export type CreateProductDto = Omit<Product, "id" | "rating" | "thumbnail"> & {
  thumbnail?: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};