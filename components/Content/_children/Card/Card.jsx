import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";

const Card = ({ content }) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img
          src={content.reportes.data.opengraph}
          alt={content.reportes.data.titleMeta}
        />
      </div>

      <div className={style.card_content}>
        <div className={style.card_content_data}>
          <p className={style.card_content_data_subtitle}>
            {content.reportes.data.categoria}
          </p>
          <p className={style.card_content_data_title}>
            {content.reportes.data.titulo}
          </p>
          <p className={style.card_content_data_desc}>
            {content.reportes.data.descripcionMeta}
          </p>

          <div className={style.card_content_tags}>
            <p className={style.tag}>{content.reportes.data.rubro}</p>
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
