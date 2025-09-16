
const PricingCard=(props)=>{
    console.log(props)//{type: 'Free plan', Utype: 'personal', amount: 0, features: Array(4), Btn: 'subscribe now'}
    const {type,Utype,amount,features,Btn}=props
    return(
<>
<div className="card shadow mx-1 my-1 p-3" style={{}}>
  <div className="card-body">
    <h2 className="card-title">
        <span className="fs-1 fw-bold">{type}</span><br />
        <span className="fs-6">{Utype}</span>
    </h2>
    <p className="card-text fs-2 fw-bold">${amount}</p>
     <ul>
        {/* itterating array props */}
        {features.map((ele,i)=><li key={i}>{ele}</li>)}
     </ul>
    <a href="#" className="btn btn-primary">{Btn}</a>
  </div>
</div>
</>
    )
}

export default PricingCard