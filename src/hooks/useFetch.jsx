import { useState, useEffect } from "react"
import { updateMovieStore } from "./redux/MovieStore";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
          dispatch(updateMovieStore({ movies: data, isLoading: false }))
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
