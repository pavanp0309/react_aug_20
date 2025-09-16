import ProductCard from "./ProductCard"

function ProductList(){
    function Likeme(){
         alert("u liked me")
    }
    return(
        <>
        <ProductCard 
        name={"Mixed Sprouts 200 g"} //string prop
        price={20} //number Prop
        offer={true} //boolean prop
        features={["Nutrient rich superfood","Fresh and crunchy texture","Versatile culinary ingredient"]}//array prop
        ProductInfo={{Brand:"Reliance",soldby:"Reliance Retail",Country:"india"}}//object prop 
        clikme={Likeme} //function Prop
        >
        {/* node prop(children Prop) */}
        <button className="btn btn-success">addtocart</button>
        </ProductCard>
        
        </>
    )
}

export default ProductList