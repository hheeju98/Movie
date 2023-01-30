import styles from "./Movie.module.css";

function MovieDetail({ coverImg, title, description, year, rating, runtime }) {
  return (
    <div className={styles.detail__outer}>
      <div className={styles.detail__background}>
        <div className={styles.detail__location}>
          <img className={styles.detail__size} src={coverImg} alt={title} />
        </div>
        <h2>제목 :{title}</h2>
        <h4>영화 소개: {description}</h4>
        <h5>개봉 년도: {year}</h5>
        <h5>평점: {rating}</h5>
        <h5>상영 시간 :{runtime}</h5>
      </div>
    </div>
  );
}

export default MovieDetail;
