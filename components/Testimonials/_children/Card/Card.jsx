import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";

const Card = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.card_quote}>
        <img src={data.logo} />
        <p>{data.quote}</p>
      </div>

      <div className={style.card_client}>
        <div className={style.card_client_data}>
          <img src={data.client.avatar} alt={data.client.name} />
          <div className={style.card_client_data_info}>
            <p className={style.card_client_data_info_name}>
              {data.client.name}
            </p>
            <p className={style.card_client_data_info_role}>
              {data.client.role}
            </p>
          </div>
        </div>

        <button>
          <span>Ver caso de éxito</span>
          <img src={vector.src} alt="vector" />
        </button>
      </div>
    </div>
  );
};

export default Card;
