function ProductCard(props) {
    console.log(props)
    const {ProductInfo,children,
        clikme,features,name,offer,
   price
}=props
  return(
    <div>
        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        {/* rendering the Boolean values */}
        <p className="card-text">{offer?"availabe":"not available"}</p>
        <h5>Features</h5>
        {/* rendering the array */}
        <ul>
            {features.map((ele)=><li>{ele}</li>)}
        </ul>
        {/* object rendering-1st way */}
        <p>Brand:{ProductInfo.Brand}</p>
        <p>soldby:{ProductInfo.soldby}</p>
        <p>Country:{ProductInfo.Country}</p>

        {/* object Rendering 2nd way */}
        {
            Object.entries(ProductInfo).map(([key,value])=><p>{`${key}:  ${value}`}</p>)
        }
        {/* rendering the functions */}
        <button className="btn btn-danger" onClick={()=>clikme()}>♥</button>
        {children}
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default ProductCard;
