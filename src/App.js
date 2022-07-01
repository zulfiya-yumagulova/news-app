import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const data = await fetch(
          `https://gnews.io/api/v4/search?q=${category}&token=${apiKey}&lang=en`
        );
        const articles = await data.json();
        console.log(articles.articles);
        setArticles(articles.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <>
      {articles.map((article, index) => {
        const { title, description, content, image, publishedAt, url } =
          article;
        const str = publishedAt.replace("T", " ");
        const datePublished = str.replace("Z", " ");
        return (
          <div className="grid-container" key={index}>
            <div className="articles-container">
              <div className="grid-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} alt="" />
                <p>
                  {article?.content?.substring(
                    0,
                    article?.content?.length - 15
                  )}
                  ...{" "}
                </p>
                <h4>Published at {datePublished} </h4>
                <a href={url} target="_blank">
                  Read more
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
