import Arrow from "../../../public/assets/Aquired/arrow-up.png";
import style from "./Stat.module.scss";

const Stat = () => {
  return (
    <div className={style.stat}>
      <div className={style.stat_container}>
        <img
          src={Arrow.src}
          alt="Arrow"
          className={style.stat_container_img_inverted}
        />

        <h4>20%</h4>
      </div>

      <div className={style.stat_content}>
        <p>Disminución del Cost Per acquisition</p>
        <p>Mar - Jun 2022 vs Mar - Jun 2021</p>
      </div>
    </div>
  );
};

export default Stat;
