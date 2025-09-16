// import "./home.css" // external_css
import c from "./contact.module.css"

function Home(){
    let h2style={
        backgroundColor:"red",
        color:"gold"
    }
    // one value
    let bg="blue"
    let styles={
        bgs:{
            background:"red"
        },
        alignmen:{
            textAlign:"center"
        }
    }
    return(
        <>
        <h1 style={{color:"red",backgroundColor:"gold",textAlign:"center"}}>Hello</h1>
        <h2 style={h2style}>Hello</h2>
        <h2 style={{background:bg}}>Hello</h2>
        <h3 style={styles.bgs}>Hello</h3>
        <h3 style={styles.alignmen}>Hello</h3>
        <h3 style={{background:styles.bgs.background,textAlign:styles.alignmen.textAlign}}>Hello</h3>
        {/* external styles */}
        <p id="id1" className="c1">external css</p>
        <p className={c.c1}>Hii</p>
        </>
    )
}

export default Home