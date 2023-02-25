import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";
import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({ content }) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={content.caseImgUrl} alt={content.caseTitle} />
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

        <Link
          target="_blank"
          // href={`/casos-de-exito/${content.caseCustomUrl}`}
          href={`/casos-de-exito/${content.caseId}`}
          rel="noreferrer"
        >
          <button className={style.card_button}>
            <span>Me interesa</span>
            <img src={vector.src} alt="Me interesa" />
          </button>
        </Link>
      </div>
    </div>
  );
};
Card.propTypes = {
  content: PropTypes.object,
};
export default Card;
