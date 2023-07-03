import style from "./HeroCases.module.scss";
// import belcorp from "../../public/assets/Services/Cases/belcorp.jpg";

const HeroCases = ({ title, imgUrl, toolkitUrl }) => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_leftSection}>
          <p>Caso de éxito</p>
          <h2>{title}</h2>
          <a href={toolkitUrl}>
            <button>Descargar el caso de éxito</button>
          </a>
        </div>

        <div className={style.hero_container_rightSection}>
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default HeroCases;