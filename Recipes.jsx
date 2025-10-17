import React, { useEffect, useState } from "react";
import RecipeUI from "./recipes/RecipeUI";
// import useFetch from "../hooks/useFetch.jsx";
const Recipes = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const url = "https://dummyjson.com/recipes";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setData(data);
      })
      .catch((_) => {
        setError("Error fetching Data");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading data</p>
      ) : (
        <RecipeUI data={data} />
      )}
    </div>
  );
};

export default Recipes;
