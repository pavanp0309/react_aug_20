# Props 
 Properties 


# example js 
function card(a,b,c,d){

}

<!-- function call -->
card("red","center","welcome",10)

# React 
function card(props){
    console.log(props)//{}
    console.log(props.color,prop.align) //normal p
    const {color,align,num}=props

}
<!-- function call -->
<card color="red" align="center" num={10} val={[]}/>