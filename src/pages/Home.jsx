import { useEffect } from "react";
import MovieList from "../components/MovieList";
import styles from "../styles/Home.module.css";
import useFetch from "../hooks/useFetch";


const Home = () => {
  const { movies, loading, error } = useFetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  if (loading) {
    return <div>Loading ...</div>
  }

  return (
    <div className={styles}>
      <MovieList data={movies.data} />
    </div>
  )
}


export default Home
