import style from "./Differences.module.scss";

const Differences = ({ differences }) => {
  return (
    <div className={style.differences}>
      <div className={style.differences_container}>
        <div className={style.differences_container_header}>
          <h2 className={style.differences_container_header_title}>
            Haciendo la diferencia
          </h2>
          <p className={style.differences_container_header_desc}>
            Nos preocupamos por el bienestar de nuestros colaboradores, forma
            parte de nuestros programas de aprendizaje
          </p>
        </div>

        <div className={style.differences_container_content}>
          {differences.map((content, i) => (
            <div className={style.differences_container_content_card} key={i}>
              <img
                src={content["icon"].src}
                alt="icon"
                className={style.differences_container_content_card_icon}
              />
              <h3 className={style.differences_container_content_card_title}>
                {content.title}
              </h3>

              <ul className={style.differences_container_content_card_points}>
                {content.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Differences;
