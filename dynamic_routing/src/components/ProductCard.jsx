import React from 'react'
import { Link } from 'react-router-dom'


// child Component
const ProductCard = (props) => {
    const {title,description,price,category,images,id}=props
    // console.log(images)
  return (
<div className="col-sm-12 col-md-3 col-lg-3">
<div className="card" >
  <Link to={`/shop/${id}`}>
  <img src={images[0]} className="card-img-top" alt="..."/>
  </Link>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description.slice(0,100)}...</p>
    <p className="card-text">${price}</p>
    <p className="card-text">{category}</p>
    
    <a href="#" className="btn btn-primary">addtocart</a>
  </div>
</div>
</div>
  )
}

export default ProductCard
