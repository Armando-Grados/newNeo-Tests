import style from "./Challenge.module.scss";

const Challenge = ({ content }) => {
  return (
    <div className={style.challenge}>
      <div className={style.challenge_header}>
        <h3>{content.title}</h3>
        <p>
          {content.desc1} <br /> {content.desc2}
        </p>
      </div>

      <img className={style.challenge_img} src={content.imgUrl} />
    </div>
  );
};

export default Challenge;
