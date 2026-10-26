import React, { useEffect } from 'react'
import { useNavigate, useParams ,useSearchParams} from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const ProductDetails = () => {
    const {id} = useParams()
    const{data ,loading} = useAxios(`/products/${id}`)
   

    useEffect(()=>{
        console.log(api),[api]
    },[])
  return (
    <div>
      {api ?.title}
    </div>
  )
}

export default ProductDetails
