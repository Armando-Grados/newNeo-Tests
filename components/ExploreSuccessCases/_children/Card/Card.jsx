import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";
import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({ content }) => {
  return (
    <Link
      target="_blank"
      href={`/${content.caseId}`}
      rel="noreferrer"
    >
      <div className={`${style.card} ${style.card_bordered}`}>
        <div className={style.card_bordered_left} />
        <div className={style.card_bordered_right} />
        <div className={style.card_img}>
          <img src={content.caseCoverImgUrl} alt={content.caseTitle} />
        </div>

        <div className={style.card_content}>
          <div className={style.card_content_data}>
            <p className={style.card_content_data_subtitle}>Caso de éxito</p>
            <p className={style.card_content_data_title}>{content.caseTitle}</p>
            <p className={style.card_content_data_desc}>{content.caseDesc}</p>

            {/* <div className={style.card_content_tags}>
            {content.tags.map((tag, i) => {
              return (
                <p key={i} className={style.tag}>
                  {tag}
                </p>
              );
            })}
          </div> */}
          </div>

          <button className={style.card_button}>
            <span>Me interesa</span>
            <img src={vector.src} alt="Me interesa" />
          </button>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  content: PropTypes.object,
};
export default Card;
