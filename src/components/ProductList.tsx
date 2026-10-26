import React, { useEffect, useState } from "react";
import ProductCard, { type Product } from "./ProductCard";
import Pagination from "./Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const limit = 8;

const ProductList = ({ search }: { search: string }) => {
  const  nevagate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const api =axios.create({
          baseURL: import.meta.env.VITE_API_BASE_URL ||
           `https://dummyjson.com`,
           timeout: 10000,
            headers: { 'Content-Type': 'application/json' },
        });
   
        const res = await api.get("/products?skip=" + skip + "&limit=" + limit );
        setProducts(res.data.products);
        // setTotal(data.total);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err instanceof Error ? err.message : "faild to load");
        }
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [page, search]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };
  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error)
    return (
      <div className="py-20 text-center text-red-600">
        Error: {error}{" "}
        <button
          onClick={() => location.reload()}
          className="ml-2 rounded bg-main px-3 py-1 text-white"
        >
          Retry
        </button>
      </div>
    );

  if (products.length === 0)
    return <div className="py-20 text-center">No products found.</div>;
  return (
    <>
      <div className="mx-auto grid w-[90%] max-w-[1350px] grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
