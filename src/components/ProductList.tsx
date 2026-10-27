import  {  useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

import { useFetch } from "../hooks/useAxios";
import { productService } from "../services/product.service";

const limit = 8;
const ProductList = () => {
  const { products, loading, error } = useFetch(productService.getAll);
  console.log("Products from API:", products);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / limit);
  const skip = (page - 1) * limit;

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
