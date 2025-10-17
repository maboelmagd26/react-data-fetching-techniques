import { useEffect, useState } from "react";
import RecipeUI from "./recipes/RecipeUI";
const Recipes = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [dirty, setDirty] = useState(false);
  const [touched, setTouched] = useState(false);
  const url = "https://dummyjson.com/recipes";
  async function fetchRecipe(q) {
    // conditions and starting points (loading and states)
    if (!q && !dirty) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${url}/${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Error response");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRecipe(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  console.log(Object.keys(data));
  return (
    <div className="c-div border flex flex-col align-v-col container">
      <input
        type="text"
        onChange={(e) => {
          const { value } = e.target;
          if (value !== query) {
            setDirty(true);
            setQuery(value);
          } else {
            setDirty(false);
          }
        }}
        onBlur={() => setTouched(true)}
        value={query}
        name="query"
        id="query"
        max={8}
      />
      {touched && dirty && query.length > 8 && (
        <p>you should enter 8 letters</p>
      )}
      {loading ? (
        <p>loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <RecipeUI data={data} />
      )}
    </div>
  );
};

export default Recipes;
