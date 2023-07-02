import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/MovieList.module.css";

const MovieList = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.movieList}>
      <div className={styles.totalMovieCount}>
        {props.data?.movie_count}개의 영화
      </div>
      <ul>
        {props.data && props.data?.movies?.map((e) => (
          <li key={e.id}>
            <button onClick={() => {
              navigate("/movie", {
                state: { ...e }
              })
            }}>
            <img src={e.medium_cover_image} alt="영화 썸네일"/>
            <div className={styles.movieInfo}>
              <h3 className={styles.singleLine}>
                {e.title} ({e.title_english})
              </h3>
              <div className = {styles.score}>
                <p>평점 {e.rating}</p>
                <p className={styles.year}>{e.year}</p>
              </div>
              <div className={styles.genres}>
                {Object.keys(e.genres).map((elements, i) => (
                  <div key={i}>{e.genres[elements]}</div>
                ))}
              </div>
            </div>
            </button>
          </li>
      ))}
      </ul>
    </div>
  )
}

export default MovieList
