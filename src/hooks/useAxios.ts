import { useState, useEffect, useCallback } from "react";
interface UseFetchResult<T>{
  products: T[];
  loading:boolean;
  error:string | null;
  refresh: ()=> Promise<void>;
}
export function useFetch <T>(fetcher :()=> Promise<T[]> ) : UseFetchResult<T> {
  const [products, setProducts] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try{
      setProducts(await fetcher());
    }catch(err){
      setError(err instanceof Error ? err.message : "Failed to load");
    }
    finally{
      setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    const timer = setTimeout(() => {
      void fetchData();
    }, 0);

    return () => clearTimeout(timer);
  }, [fetchData]);

  return { products, loading, error, refresh: fetchData };
}
