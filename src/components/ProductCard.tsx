import type { Product } from "../types/product.types";
export type { Product } from "../types/product.types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-line bg-amber-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
  
      <div className="flex h-52 items-center justify-center bg-light p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase text-main">
          {product.category}
        </span>

        <h3 className="line-clamp-2 text-lg font-semibold text-heading">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-heading">${product.price}</p>
          <p className="flex items-center gap-1 text-sm text-gray-600">
            <i className="fa-solid fa-star text-yellow-400"></i>
            {product.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;