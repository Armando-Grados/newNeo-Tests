import Accordion from "../Accordion/Accordion";
import style from "./Questions.module.scss";
import image from "../../public/assets/Questions/questions_home.jpg";
import goal from "../../public/assets/Questions/goal.png";
import PropTypes from "prop-types";

const Questions = ({ questions, caseImg, questTitle, questDesc }) => {
  return (
    <div className={style.questions}>
      <div className={style.questions_container}>
        <div className={style.questions_container_left}>
          <div className={style.questions_container_left_ctn}>
            <img
              src={caseImg ? goal.src : image.src}
              width={"455"}
              className={style.questions_container_left_ctn_img}
            />
          </div>
        </div>
        <div className={style.questions_container_right}>
          <Accordion
            questions={questions}
            questDesc={questDesc}
            questTitle={questTitle}
          />
        </div>
      </div>
    </div>
  );
};
Questions.propTypes = {
  questions: PropTypes.array,
  caseImg: PropTypes.bool,
};
export default Questions;
