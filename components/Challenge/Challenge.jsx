import style from "./Challenge.module.scss";

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
        <img src={content.empresaImgUrl} alt="company" />
        <p>{content.empresaDesc}</p>

        <div>
          <p className={style.challenge_company_industry}>Industria:</p>
          <p>{content.empresaIndustria}</p>
        </div>
        <div>
          <p className={style.challenge_company_industry}>Pais:</p>
          <p>{content.empresaPais}</p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
