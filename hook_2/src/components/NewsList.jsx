import { useState ,useEffect} from 'react'
import NewsCard from './NewsCard'

let url = `${import.meta.env.VITE_NEWS_API_URL}search?q=example&lang=en&max=10&apikey=${import.meta.env.VITE_NEWS_API_KEY}`;

const NewsList = () => {
   //storing the news data coming from an api
  const [news,setNews]=useState([]) 
  const [loading,setLoading]=useState(false) 
  const [iserror,setIsError]=useState(false) 

  // Useffect For handling the SideEffect While fetching the News from an api
   useEffect(()=>{

   },[]) //empty  dependency :loads the data only once at mounting phase
 


  return (
    <div>
      
    </div>
  )
}

export default NewsList
