import Card from "./_children/Card/Card.jsx";
import { solutionsPeru } from "../../utilities/home/contact";
import style from "./Solutions.module.scss";

const Solutions = () => {
  return (
    <section className={style.solutions}>
      <div className={style.solutions_container}>
        <h2 className={style.solutions_container_title}>
          Contamos con soluciones en
        </h2>
        <div className={style.solutions_container_services}>
          {solutionsPeru.map(({ iconSrc, service, description, url }) => {
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

export default Solutions;
