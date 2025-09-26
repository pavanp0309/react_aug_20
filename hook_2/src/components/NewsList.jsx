import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const url = `${import.meta.env.VITE_NEWS_API_URL}search?q=example&lang=en&max=10&apikey=${import.meta.env.VITE_NEWS_API_KEY}`;

const NewsList = () => {
  const [news, setNews] = useState([]); // default empty array
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  return (
    <div className="container px-3">
      {news.map((article, index) => (
        <NewsCard key={index} articles={article} />
      ))}
    </div>
  );
};

export default NewsList;
