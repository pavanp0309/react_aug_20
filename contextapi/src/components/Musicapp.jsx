
import Album from './Album'
import { useContext } from 'react'
import { ThemeContext } from '../store/Store'

const Musicapp = ({darkmode,setDark}) => {
  console.log("musicapp.. is running")
   let {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div>
      {theme?"dark":"white"}
      <Album darkmode={darkmode} setDark={setDark}/>
      <button onClick={toggleTheme}>changetheme-4</button>
    </div>
  )
}

export default Musicapp
