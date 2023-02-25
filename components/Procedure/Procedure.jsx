import uuid from "react-uuid";
import style from "./Procedure.module.scss";
import Step from "./_children/Step";

const Procedure = ({ title, steps }) => {
  return (
    <div className={style.procedure}>
      <div className={style.procedure_container}>
        <h2 className={style.procedure_container_heading}>{title}</h2>

        <div className={style.procedure_container_steps}>
          {steps.map((step) => (
            <Step step={step} key={uuid()} />
          ))}
        </div>
      </div>

      <div className={style.procedure_img}></div>
    </div>
  );
};

export default Procedure;
