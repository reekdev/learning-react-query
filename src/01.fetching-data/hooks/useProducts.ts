import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const useProducts = () => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get<ProductResponse>("https://dummyjson.com/products")
        .then((res) => res.data),

    staleTime: 10 * 1000,
  });
};

export default useProducts;
