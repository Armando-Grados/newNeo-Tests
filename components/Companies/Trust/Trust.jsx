import abbott from "../../../public/assets/Trust/abbott.png";
import intersegura from "../../../public/assets/Trust/intersegura.png";
import protecta from "../../../public/assets/Trust/protecta.png";
import semana from "../../../public/assets/Trust/semana.png";
import rimac from "../../../public/assets/Trust/rimac.png";
import style from "../Companies.module.scss";
import uuid from "react-uuid";

const Companies = () => {
  const compImg = [rimac, protecta, abbott, semana, intersegura];

  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>
        Algunas empresas que ya confían en nosotros.
      </h2>

      <div className={style.companies_container}>
        {compImg.map((img) => {
          return (
            <div className={style.companies_container_img} key={uuid()}>
              <img src={img.src} alt={`companies`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
