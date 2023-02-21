import style from "./HeroCases.module.scss";
import belcorp from "../../public/assets/Services/Cases/belcorp.jpg";

const HeroCases = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_leftSection}>
          <p>Caso de éxito</p>
          <h2>Rimac Seguros SOAT Servicio In housing de Publicidad Digital </h2>
          <button>Descargar el caso de éxito</button>
        </div>

        <div className={style.hero_container_rightSection}>
          <img src={belcorp.src} alt="belcorp" />
        </div>
      </div>
    </div>
  );
};

export default HeroCases;
