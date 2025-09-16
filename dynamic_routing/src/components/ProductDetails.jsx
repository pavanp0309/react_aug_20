import React from 'react'
import { data, useParams } from 'react-router-dom'
import { Data } from '../data/productData'
const ProductDetails = () => {
    let {id}=useParams()
    console.log(typeof parseInt(id))


    let pdata=Data.products.find(ele=>ele.id==parseInt(id))
    console.log(pdata)

  return (
    <div className='card p-3'>
      <h3>title:{pdata.title}</h3>
      <p>des:{pdata.description}</p>
      <p>rating:{pdata.rating}</p>
      <p>Price:{pdata.price}</p>
      <p>Cat:{pdata.category}</p>
      <p>stock:{pdata.stock}</p>
      <p>{pdata.tags[0]}</p>
    </div>
  )
}

export default ProductDetails
