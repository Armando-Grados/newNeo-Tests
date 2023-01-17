import style from "../Companies.module.scss";
import ImageCard from "../_children/ImageCard";
import { partnerComps } from "../../../utilities/home/Companies";
import uuid from "react-uuid";

const Partners = () => {
  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>Somos Partners</h2>

      <div className={style.companies_container}>
        <div className={style.companies_container}>
          {partnerComps.map((comp) => (
            <ImageCard company={comp} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
