import style from "./CaseTeam.module.scss";

const CaseTeam = ({ imgUrls }) => {
  return (
    <div className={style.caseTeam}>
      <div className={style.caseTeam_container}>
        {imgUrls?.map((imgUrl, index) => (
          <img src={imgUrl} alt="team" key={index} />
        ))}
      </div>
    </div>
  );
};

export default CaseTeam;
