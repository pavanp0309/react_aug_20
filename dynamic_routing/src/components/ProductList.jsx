import React from 'react'
import { Data } from '../data/productData'
import ProductCard from './ProductCard'

// parent components
const ProductList = () => {
   
  return (
    <div className='container'>
        <div className="row">
      {
        Data.products.map((ele)=><ProductCard {...ele}/>)
      }
      </div>
    </div>
  )
}

export default ProductList
