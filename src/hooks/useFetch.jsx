import { useState, useEffect } from "react"


const useFetch = (url) => {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          throw new Error("Error fetching data");
        }

      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDate();
  }, [url])

  return { movies, loading, error };
}

export default useFetch
