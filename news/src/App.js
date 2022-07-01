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
          `https://gnews.io/api/v4/search?q=example&token=${apiKey}&lang=en`
        );
        const articles = await data.json();
        console.log(articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return <div className="App"></div>;
}

export default App;
