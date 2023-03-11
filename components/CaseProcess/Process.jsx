import Accordion from "./_children/Accordion/Accordion";
import style from "./Process.module.scss";
import PropTypes from "prop-types";

const CaseProcess = ({ imgUrl, processTitle, processDesc, steps }) => {
  return (
    <div className={style.questions}>
      <div className={style.questions_container}>
        <div className={style.questions_container_left}>
          <div className={style.questions_container_left_ctn}>
            <img
              src={imgUrl}
              width={"455"}
              className={style.questions_container_left_ctn_img}
            />
          </div>
        </div>
        <div className={style.questions_container_right}>
          <Accordion
            steps={steps}
            processDesc={processDesc}
            processTitle={processTitle}
          />
        </div>
      </div>
    </div>
  );
};
CaseProcess.propTypes = {
  questions: PropTypes.array,
  caseImg: PropTypes.bool,
};
export default CaseProcess;
