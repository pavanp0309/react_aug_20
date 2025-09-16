let div=document.createElement("div")
let img=document.createElement("img")
let p=document.createElement("p")
let btn=document.createElement("button")

img.src="www.a.com"
img.className="imgele"
p.innerText="heloo"
btn.innerText="click"
div.appendChild(img)
div.appendChild(p)
div.appendChild(btn)
console.log(div)

document.body.appendChild(div)

// Creating the structure in React 
// console.log(React.createElement(type,props,content))
// let div1=React.createElement("p",{id:"id1"},"hello")
// console.log(div1)//<p id>hello</p>

let card=React.createElement("div",{className:"c1"},
    React.createElement("img",{id:"id1",src:""}),
    React.createElement("p",{id:"id2"},"hello"),
    React.createElement("button",{id:"btn",onClick:""},"hello"),
    React.createElement("label",{htmlFor:""})

)
console.log(card)


const root = ReactDOM.createRoot(
  document.getElementById('root')
).render(card)

// Jsx 