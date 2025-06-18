import { useEffect, useState } from "react";
import constants from "../utilities/constants";

function useFetchGiphy({category = constants.TRENDING, pagination = 0, query = "", limit = 25 }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (category === constants.TAGS && !query.trim()) {
      setData({});
      setLoading(false);
      return;
    }
    
    const fetchGifs = async () => {
      setLoading(true);
      try {
        const URL = `https://api.giphy.com/v1/gifs/${category}?api_key=${constants.KEY}&q=${query}&limit=${limit}&offset=${pagination * limit + 1}&rating=g&lang=en&bundle=messaging_non_clips`;
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Something went wrong, please try again later!");
        setData({});
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, [category, pagination, query, limit]);

  return { data, loading, error };
}

export default useFetchGiphy;
