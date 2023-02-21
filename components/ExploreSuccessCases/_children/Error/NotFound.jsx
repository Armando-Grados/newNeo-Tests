import style from "./NotFound.module.scss";
import NotFound from "../../../../public/assets/NotFound/not-found.png";

const CasesNotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.notFound_image}>
        <img src={NotFound.src} alt="Not found" />
        <p>Imagen generada por IA</p>
      </div>

      <div className={style.notFound_texts}>
        <h2>Error 404</h2>
        <p>
          Aún no tenemos lo que buscas, te invitamos a ver nuestros otros casos
          de éxito o experiencias similares.
        </p>
      </div>
    </div>
  );
};

export default CasesNotFound;
