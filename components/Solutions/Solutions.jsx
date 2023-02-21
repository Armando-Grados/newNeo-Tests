import Card from "./_children/Card/Card.jsx";
import PropTypes from "prop-types";
import style from "./Solutions.module.scss";
const Solutions = ({ solutions, title }) => {
  return (
    <section id="solutions" className={style.solutions}>
      <div className={style.solutions_container}>
        <h2 className={style.solutions_container_title}>
          {title || "Contamos con soluciones en"}
        </h2>
        <div className={style.solutions_container_services}>
          {solutions.map(({ iconSrc, service, description, url }) => {
            return (
              <Card
                iconSrc={iconSrc.src}
                service={service}
                key={service}
                description={description}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
Solutions.propTypes = {
  solutions: PropTypes.array,
  title: PropTypes.string,
};
export default Solutions;
