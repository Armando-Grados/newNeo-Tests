import style from "./WorkProcess.module.scss";

const WorkProcess = ({ processes }) => {
  return (
    <div className={style.wp}>
      <div className={style.wp_container}>
        <h2 className={style.wp_container_title}>Nuestro proceso de trabajo</h2>
        <p className={style.wp_container_desc}>
          Conoce cómo diseñamos soluciones efectivas para ti efectivas para
          impulsar tu empresa
        </p>

        {processes.map((process, i) => (
          <div key={i} className={style.wp_container_process}>
            <img
              src={process["icon"].src}
              alt="icon"
              className={style.wp_container_process_icon}
            />
            <div className={style.wp_container_process_content}>
              <h3>{process.title}</h3>
              <p>{process.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
