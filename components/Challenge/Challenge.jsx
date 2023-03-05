import style from "./Challenge.module.scss";
import rimac from "../../public/assets/Others/rimac.png";

const Challenge = ({ content }) => {
  return (
    <div className={style.challenge}>
      <div className={style.challenge_header}>
        <h3>{content.title}</h3>
        <div className={style.challenge_header_descs}>
          <p>{content.desc1}</p>
          <p>{content.desc2}</p>
          <p>{content.desc3}</p>
          <p>{content.desc4}</p>
        </div>
      </div>

      {/* <img className={style.challenge_img} src={content.imgUrl} /> */}
      <div className={style.challenge_company}>
        <img src={content.companyLogoUrl} alt="company" />
        <p>{content.companyDesc}</p>

        <div>
          <p className={style.challenge_company_industry}>Industria:</p>
          <p>Banca y seguros</p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
