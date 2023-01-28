import Accordion from "../Accordion/Accordion";
import style from "./Questions.module.scss";
import image from "../../public/assets/Questions/questions_home.jpg";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/motion";

const Questions = ({ questions }) => {
  return (
    <motion.div
      className={style.questions}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("right", "tween", 0, 0.5)}
    >
      <div className={style.questions_container}>
        <div className={style.questions_container_left}>
          <div className={style.questions_container_left_ctn}>
            <img
              src={image.src}
              width={"455"}
              height={"530"}
              className={style.questions_container_left_ctn_img}
            />
          </div>
        </div>
        <div className={style.questions_container_right}>
          <Accordion questions={questions} />
        </div>
      </div>
    </motion.div>
  );
};
Questions.propTypes = {
  questions: PropTypes.array,
};
export default Questions;
