import style from "./Step.module.scss";
import StepIcon from "../../../public/assets/Others/step.png";

const Step = () => {
  return (
    <div className={style.step}>
      <img src={StepIcon.src} alt="step" />
      <div className={style.step_container}>
        <p className={style.step_container_no}>Paso 1</p>
        <p className={style.step_container_heading}>
          Replanteamiento en la estrategia de medios digitales
        </p>
        <p className={style.step_container_desc}>
          Se analizó los indicadores históricos de campañas anteriores para la
          detección de oportunidades de mejora.
        </p>
      </div>
    </div>
  );
};
export default Step;
