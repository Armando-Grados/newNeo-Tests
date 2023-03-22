import style from "./WhySolutions.module.scss";
import check from "../../public/assets/SVGs/check.svg";

const WhySolutions = ({ data }) => {
  return (
    <div className={style.ws}>
      <div className={style.ws_container}>
        <div>
          <h2 className={style.ws_container_title}>{data.title}</h2>
          <p className={style.ws_container_desc}>{data.desc}</p>
        </div>
        <div className={style.ws_container_reasons}>
          {data.reasons.map((reason, i) => (
            <div key={i} className={style.ws_container_reasons_reason}>
              <img src={check.src} alt="check" />
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySolutions;
