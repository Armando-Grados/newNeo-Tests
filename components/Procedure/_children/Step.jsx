import style from "./Step.module.scss";
import StepIcon from "../../../public/assets/Others/step.png";

const Step = ({ step }) => {
  return (
    <div className={style.step}>
      <img src={StepIcon.src} alt="step" />
      <div className={style.step_container}>
        <p className={style.step_container_no}>Paso 1</p>
        <p className={style.step_container_heading}>{step.title}</p>
        <p className={style.step_container_desc}>{step.desc}</p>
      </div>
    </div>
  );
};
export default Step;
