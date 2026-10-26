// import { useState, useEffect } from "react";
// import type { Product } from "../components/ProductCard";
// import axios from "axios";
// import { type Product } from "../components/ProductCard";

// export const useAxios = (url) => {
//  const [products, setProducts] = useState<Product[]>([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState<string | null>(null);
//  useEffect(() => {
//     const controller = new AbortController();

//     const load = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const api =axios.create({
//           baseURL: import.meta.env.VITE_API_BASE_URL ||
//            `https://dummyjson.com`,
//            timeout: 10000,
//             headers: { 'Content-Type': 'application/json' },
//         });
   
//         const res = await api.get(url );
//         setProducts(res.data.products);
//         // setTotal(data.total);
//       } catch (err) {
//         if (err instanceof Error && err.name !== "AbortError") {
//           setError(err instanceof Error ? err.message : "faild to load");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//     return () => controller.abort();
//   }, [url]);
// }