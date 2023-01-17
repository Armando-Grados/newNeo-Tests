import style from "../Companies.module.scss";

import uuid from "react-uuid";
import ImageCard from "../_children/ImageCard";
import { trustComps } from "../../../utilities/home/Companies";

const Partners = () => {
  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>
        Algunas empresas que ya confían en nosotros.
      </h2>

      <div className={style.companies_container}>
        {trustComps.map((comp) => (
          <ImageCard company={comp} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
