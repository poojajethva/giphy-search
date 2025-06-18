import { useEffect, useState } from "react";
import constants from "./constants";

function useFetchGiphy({category = constants.TRENDING, pagination = 0, query = ""}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      try {
        const URL = `https://api.giphy.com/v1/gifs/${category}?api_key=${constants.KEY}&q=${query}&limit=${constants.LIMIT}&offset=${pagination * constants.LIMIT}&rating=g&lang=en&bundle=messaging_non_clips`;
        const response = await fetch(URL);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, [category, pagination, query]);

  return { data, loading, error };
}

export default useFetchGiphy;
