import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";

const Card = ({ content }) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={content.img} alt={content.title} />
      </div>

      <div className={style.card_content}>
        <div className={style.card_content_data}>
          <p className={style.card_content_data_subtitle}>{content.subtitle}</p>
          <p className={style.card_content_data_title}>{content.title}</p>
          <p className={style.card_content_data_desc}>{content.description}</p>

          <div className={style.card_content_tags}>
            {content.tags.map((tag, i) => {
              return (
                <p key={i} className={style.tag}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <button className={style.card_button}>
          <span>Me interesa</span>
          <img src={vector.src} alt="Me interesa" />
        </button>
      </div>
    </div>
  );
};

export default Card;
