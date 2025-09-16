import React from 'react'
import ProductCard from '../components/ProductCard'
import { Products } from '../data/products'

const Home = () => {
  return (
    <div className='container'>
     <div className="row">
       {Products.products.map((ele)=><ProductCard
       key={ele.id} name={ele.title} imgurl={ele.images[0]} price={ele.price}/>)}
     </div>
    </div>
  )
}

export default Home
