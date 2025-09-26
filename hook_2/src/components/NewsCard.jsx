import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({articles}) => {
  console.log(articles)
  const {id,title,description,image,content,publishedAt,source:{name}}=articles || {}
  return (
 <div className="card mb-3 mx-3">
 <Link className='nav-link' to={`/${id}`}>
   <img src={image} className="card-img-top" alt="..." width={"100%"} height={"250px"}/>
  <div className="card-body">
    <h5 className="card-title fs-3">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">Last updated {Date(publishedAt)} mins ago</small></p>
  </div>
 </Link>
</div>
  )
}

export default NewsCard
