import style from "./ESC.module.scss";
import Card from "./_children/Card/Card";
import { contentHome } from "../../utilities/home/content";
import uuid from "react-uuid";
import CasesNotFound from "./_children/Error/NotFound";

const ExploreSuccessCases = () => {
  return (
    <div className={style.esc}>
      <div className={style.esc_container}>
        <div className={style.esc_container_header}>
          <h2>Explora nuestros inspiradores casos de éxito </h2>
          <p>
            En nuestros casos de éxito podrás ver de qué manera nuestros
            clientes utilizan nuestras soluciones y cómo logramos alcanzar sus
            objetivos de negocio de manera conjunta.
          </p>
        </div>

        <div className={style.esc_container_inputs}>
          <div className={style.esc_container_inputs_select}>
            <label>Tipo</label>
            <select>
              <option value="" selected>
                Todos
              </option>
              <option value="">Casos de éxito</option>
              <option value="">Experiencias similares</option>
            </select>
          </div>

          <div className={style.esc_container_inputs_select}>
            <label>Industria</label>
            <select>
              <option value="" selected>
                Todos
              </option>
              <option value="">Alimentos</option>
              <option value="">Banca</option>
              <option value="">Maquinaria pesada</option>
              <option value="">Moda</option>
              <option value="">Seguros</option>
            </select>
          </div>
        </div>

        <div className={style.esc_container_cases}>
          {contentHome.map((content) => (
            <Card content={content} key={uuid()} />
          ))}
        </div>

        {/* <CasesNotFound /> */}
      </div>
    </div>
  );
};

export default ExploreSuccessCases;
