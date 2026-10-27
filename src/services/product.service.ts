import axios from "axios";
import type {
    CreateProductDto,
    Product,
    ProductsResponse,
} from "../types/product.types";

const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL || "https://dummyjson.com/products",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});
export const productService = {
    getAll:()=> api.get<ProductsResponse>("/").then((r) => r.data.products),
    getById:(id:number)=> api.get<Product>(`/${id}`).then(r=>r.data),
    create:(data:CreateProductDto)=> api.post<Product>("/add",data).then(r=>r.data),
    update:(id:number,data:Partial<CreateProductDto>)=> api.put<Product>(`/${id}`,data).then(r=>r.data),
    delete:(id:number)=> api.delete(`/${id}`).then(r=>r.data),
    
};