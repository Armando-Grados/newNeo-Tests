import abbott from "../../../public/assets/Trust/abbott.png";
import intersegura from "../../../public/assets/Trust/intersegura.png";
import protecta from "../../../public/assets/Trust/protecta.png";
import semana from "../../../public/assets/Trust/semana.png";
import rimac from "../../../public/assets/Trust/rimac.png";
import style from "../Companies.module.scss";

const Partners = () => {
  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>
        Algunas empresas que ya confían en nosotros.
      </h2>

      <div className={style.companies_container}>
        <div className={style.companies_container_img}>
          <img src={rimac.src} alt="rimac" />
        </div>
        <div className={style.companies_container_img}>
          <img src={protecta.src} alt="protecta" />
        </div>
        <div className={style.companies_container_img}>
          <img src={abbott.src} alt="abbott" />
        </div>
        <div className={style.companies_container_img}>
          <img src={semana.src} alt="semana" />
        </div>
        <div className={style.companies_container_img}>
          <img src={intersegura.src} alt="intersegura" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
