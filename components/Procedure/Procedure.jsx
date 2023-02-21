import style from "./Procedure.module.scss";
import Step from "./_children/Step";

const Procedure = () => {
  return (
    <div className={style.procedure}>
      <div className={style.procedure_container}>
        <h2 className={style.procedure_container_heading}>
          ¿Cómo lo logramos?
        </h2>

        <div className={style.procedure_container_steps}>
          <Step />
          <Step />
          <Step />
          <Step />
        </div>
      </div>

      <div className={style.procedure_img}></div>
    </div>
  );
};

export default Procedure;
