import { useLocation } from "react-router-dom";
import styles from "../styles/MovieDetail.module.css";

const MovieDetail = () => {
  const data = useLocation().state;
  console.log(data);
  return (
    <div className={styles.detailContentWrapper}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.backgroundImage}>
          <img
            className={styles.background}
            src={data.background_image_original}
            alt="배경화면 이미지"
          ></img>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <img
          src={data.large_cover_image}
          alt="영화 포스터"
          className={styles.images}
        ></img>
        <div className={styles.detailInfo}>
          <h2>
            제목: {data.title_long} {data.title_english}
          </h2>
          <div className={`${styles.severalLines} ${styles.moviePlot}`}>줄거리: {data.description_full}</div>
          <div className={styles.ratingScore}>
          </div>
          <div>언어: {data.language}</div>
          <div>
            장르{" "}
            {Object.keys(data.genres).map((elements, i) => (
              <span key={i}>{data.genres[elements]} </span>
            ))}
          </div>
          <a
            href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${data.title}`}
          >
            네이버에 이 영화 검색하러 가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;