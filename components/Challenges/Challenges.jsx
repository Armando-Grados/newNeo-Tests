import style from "./Challenges.module.scss"

const ChallengesSection = ({
  challengesDesc1,
  challengesDesc2,
  challengesDesc3,
  challengesDesc4,
  challengesImgUrl,
  challengesTitle,
}) => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_header}>
          <h3>{challengesTitle}</h3>
          <div className={style.reto_container_header_descs}>
            <p>{challengesDesc1}</p>
            <p>{challengesDesc2}</p>
            <p>{challengesDesc3}</p>
            <p>{challengesDesc4}</p>
          </div>
        </div>

        <div className={style.reto_container_coverImg}>
          <img src={challengesImgUrl} />
        </div>
      </div>
    </div>
  )
}

export default ChallengesSection
