import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

let url = `${
  import.meta.env.VITE_NEWS_API_URL
}search?q=example&lang=en&max=10&apikey=${import.meta.env.VITE_NEWS_API_KEY}`;
console.log(url);

const NewsList = () => {
  //storing the news data coming from an api
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const [iserror, setIsError] = useState(false);
  console.log(news)
  // Useffect For handling the SideEffect While fetching the News from an api
  useEffect(() => {
    // function to fetch the api_data
    async function fetchNews() {
      let data=localStorage.getItem("news")
      console.log(typeof data)
       if(!data){
          setNews(JSON.parse(data?.articles))
       }else{
        // fetch data only if new data is present
        await fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
          console.log(data)
          setNews(data?.articles)
          localStorage.setItem("news",JSON.stringify(data?.articles))
        })
        .catch((err)=>alert(err.name))
       }
    }
   
    // calling the Fetnews function
    fetchNews() 

  }, []); //empty  dependency :loads the data only once at mounting phase

  return(
    <div>
      {
        news?.map(articles=><NewsCard articles={articles} />)
      }
    </div>
  )
};

export default NewsList;
