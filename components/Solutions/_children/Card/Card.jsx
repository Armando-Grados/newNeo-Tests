import Link from "next/link";
import PropTypes from "prop-types";
import arrow from "../../../../public/assets/Solutions/arrow.svg";
import style from "./Card.module.scss";
import { motion } from "framer-motion";
import { slideIn } from "../../../../utilities/motion";

const Card = ({ iconSrc, service, description, url }) => {
  return (
    <motion.div
      className={style.card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={slideIn("down", "tween", 0.2, 1)}
    >
      <Link href={url}>
        <div className={style.card_container}>
          <div className={style.card_container_subcontainer}>
            <img
              className={style.card_container_subcontainer_img}
              src={iconSrc}
              alt={service}
            />
            <h3 className={style.card_container_subcontainer_service}>
              {service}
            </h3>
          </div>
          <p className={style.card_container_description}>{description}</p>
          <p className={style.card_container_link} href={url}>
            Ver servicios
            <img
              className={style.card_container_link_img}
              src={arrow.src}
              alt="arrow Neo"
            />
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

Card.propTypes = {
  iconSrc: PropTypes.string,
  service: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
