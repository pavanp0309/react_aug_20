import { createContext ,useState} from "react";


// creating the context/store for an app 

export let ThemeContext=createContext()
console.log(ThemeContext)
// createContext() api provides/returns 
//    provider
//    consumer



const ThemeProvider = ({children}) => {
    let [theme,setTheme]=useState(true)
    const toggleTheme=()=>{
        setTheme(!theme)
    }
  return (
    // to share the data we use Provider
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

