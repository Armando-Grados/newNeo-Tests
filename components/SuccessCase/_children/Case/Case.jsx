import style from "./Case.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";

import { motion } from "framer-motion";
import { slideIn } from "../../../../utilities/motion";

const Case = ({ type, title, description, img, imgMob, url }) => {
  return (
    <motion.div
      className={style.case}
      variants={slideIn("right", "tween", 0, 1)}
    >
      <div className={style.case_container}>
        <div className={style.case_container_left}>
          <div className={style.case_container_left_image}>
            <img
              className={style.case_container_left_image_img}
              src={imgMob}
              alt={title}
            />
            <img
              className={style.case_container_left_image_img_desk}
              src={img}
              alt={title}
            />
          </div>
        </div>
        <div className={style.case_container_right}>
          <p className={style.case_container_right_type}>{type}</p>
          <h2 className={style.case_container_right_title}>{title}</h2>
          <p className={style.case_container_right_description}>
            {description}
          </p>
          <Link className={style.case_container_right_link} href={url}>
            Ver el caso
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
Case.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  imgMob: PropTypes.string,
  url: PropTypes.string,
};

export default Case;
