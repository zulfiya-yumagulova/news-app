import { useState, useEffect } from "react";
import Search from "./Components/Search.js";
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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [category]);

  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1 className="text-center mb-4 lg:text-6xl">
            {/* Capitalizing category */}
            News About
            {category.charAt(0).toLocaleUpperCase() + category.slice(1)}
          </h1>
          <Search searchText={(text) => setCategory(text)} />
        </div>
      </div>
      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-6xl">Loading....</h1>
      ) : (
        <div className="grid-container ">
          {articles.map((article, index) => {
            const { title, description, content, image, publishedAt, url } =
              article;
            const str = publishedAt.replace("T", " ");
            const datePublished = str.replace("Z", " ");
            return (
              <div className="articles-container" key={index}>
                <div className="grid-card">
                  <h2 className="title lg:text-4xl">{title}</h2>
                  <p className="description">{description}</p>
                  <img src={image} alt="" />
                  <p>
                    {article?.content?.substring(
                      0,
                      article?.content?.length - 15
                    )}
                    ...{" "}
                  </p>
                  <h4 className="date">
                    Published at <span id="date"> {datePublished}</span>{" "}
                  </h4>
                  <button className="btn-read">
                    <a href={url} target="_blank">
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
