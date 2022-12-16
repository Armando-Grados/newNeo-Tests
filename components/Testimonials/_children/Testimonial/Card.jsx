import style from "./Card.module.scss";

import vector from "../../../../public/assets/SVGs/Vector.svg";

const Card = ({ testimonial }) => {
  return (
    <div className={style.card}>
      <div className={style.card_quote}>
        <img src={testimonial.companyLogo} alt="cineplanet" />
        <p>{testimonial.quote}</p>
      </div>

      <div className={style.card_client}>
        <img src={testimonial.client.avatar} alt={testimonial.client.name} />
        <div className={style.card_client_details}>
          <p className={style.card_client_details_name}>
            {testimonial.client.name}
          </p>
          <p>{testimonial.client.role}</p>
        </div>
      </div>

      <div className={style.card_link}>
        <span>Ver caso de éxito</span>
        <img src={vector.src} alt="vector" />
      </div>
    </div>
  );
};
export default Card;
