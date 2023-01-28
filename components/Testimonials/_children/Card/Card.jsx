import style from "./Card.module.scss";
import vector from "../../../../public/assets/SVGs/Vector.svg";

import { motion } from "framer-motion";
import { slideIn } from "../../../../utilities/motion";

const Card = ({ data }) => {
  return (
    <motion.div
      className={style.card}
      variants={slideIn("down", "tween", 0, 1)}
    >
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
    </motion.div>
  );
};

export default Card;
