import uuid from "react-uuid";
import style from "./Aquired.module.scss";

const Aquired = ({ resultTitle, resultDesc, resultImages }) => {
  return (
    <div className={style.aquired}>
      <div className={style.aquired_container}>
        <div className={style.aquired_container_header}>
          <h2>{resultTitle}</h2>
          <p>{resultDesc}</p>
        </div>

        <div className={style.aquired_container_stats}>
          {resultImages.map((imgSrc) => (
            <img src={imgSrc} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aquired;
