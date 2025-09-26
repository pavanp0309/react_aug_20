import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
const url = `${import.meta.env.VITE_NEWS_API_URL}search?q=example&lang=en&max=10&apikey=${import.meta.env.VITE_NEWS_API_KEY}`;

const NewsDetails = () => {
    const [news, setNews] = useState([]); // default empty array
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const {newsId}=useParams()
    console.log(newsId)
  
    useEffect(() => {
      async function fetchNews() {
        try {
          // Check if cached news is available
          const storedData = localStorage.getItem("news");
  
          if (storedData) {
            setNews(JSON.parse(storedData));
            // stop loading after fetching the data 
            setLoading(false);
          } else {
            // Fetch new data from API
            const res = await fetch(url);
            console.log(res)
            if (!res.ok) throw new Error("Failed to fetch news");
  
            const data = await res.json();
            setNews(data?.articles || []);
            localStorage.setItem("news", JSON.stringify(data?.articles || []));
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
          setIsError(true);
          setLoading(false);
        }
      }
  
      fetchNews();
    }, []);
  
    if (loading) return <p>Loading news...</p>;
    if (isError) return <p>Something went wrong while fetching news.</p>;

    let newsdata=news.find((ele)=>ele.id===newsId)
    console.log(newsdata)
    const {id,title,description,image,content,publishedAt,source:{name,country,}}=newsdata || {}
  return (
     <div className="card mb-3 mx-5 shadow-lg my-5 border border-primary">

   <img src={image} className="card-img-top" alt="..." width={"100%"} height={"250px"}/>
  <div className="card-body">
    <h5 className="card-title fs-3">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{content}</p>
    <p className="card-text">{name}~{country}</p>
    <p className="card-text"><small className="text-body-secondary">Last updated {Date(publishedAt)} mins ago</small></p>
  </div>

</div>
  )
}

export default NewsDetails
