import React from 'react'

const ProductCard = ({name,price,imgurl}) => {
  return (
 <div className="col-sm-12 col-md-3 col-lg-3">
     <div className="card" >
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price}</p>
    <a href="#" className="btn btn-primary">addtocart</a>
  </div>
</div>
 </div>
  )
}

export default ProductCard
