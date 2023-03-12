import uuid from "react-uuid";
import style from "./Results.module.scss";

const Results = ({ resultTitle, resultDesc, resultImages }) => {
  return (
    <div className={style.results}>
      <div className={style.results_container}>
        <div className={style.results_container_header}>
          <h2>{resultTitle}</h2>
          <p>{resultDesc}</p>
        </div>

        <div className={style.results_container_stats}>
          {resultImages.map((imgSrc) => (
            <img src={imgSrc} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
