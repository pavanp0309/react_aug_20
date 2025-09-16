// import Button from "./components/Button"
// import PricingCard from "./components/PricingCard"
import ProductList from "./components/ProductList"
import Welcome from "./components/Welcome"

function App(){
  // let freefeature=["1 user","4 web mails","responsive website","free ssl"]

  return(
  <>

 <Welcome />
 <Welcome username="raju"/>
 <Welcome username={10}/>

{/* <ProductList/> */}



























  {/* <h1>Pricing Card</h1> */}
  {/* <div className="d-flex">
    <PricingCard type="Free plan" Utype="personal" amount={0} features={freefeature} Btn={"subscribe now"}/>
  <PricingCard type="Basic plan" Utype="business" amount={29} features={freefeature} Btn={"subscribe now"}/>
  <PricingCard type="Pro plan" Utype="enterprise" amount={49} features={freefeature} Btn={"subscribe now"}/>
  </div> */}









    {/* child component call */}
  {/* <Button name={"Home"} btncolor={"btn-warning"} icon={"🎭"}/>
  <Button name={"shorts"} btncolor={"btn-success"}  icon={"🧨"}/>
  <Button name={"subscriptions"} btncolor={"btn-warning"} icon={"🎎"}/>
  <Button name={"History"} btncolor={"btn-danger"} icon={"🧨🧨"}/>
  <Button name={"playlist"} btncolor={"btn-info"} icon={"🎎"}/>
  <Button name={"watchlater"} btncolor={"btn-success"} icon={"🎭"}/>
  <Button name={"liked videos"} btncolor={"btn-dark"} icon={"🥼"}/>
  <Button name={"downloads"} btncolor={"btn-secondary"} icon={"🎎"}/> */}
  </>
  )
}
export default App