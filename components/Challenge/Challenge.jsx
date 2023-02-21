import style from "./Challenge.module.scss";

const Challenge = () => {
  return (
    <div className={style.challenge}>
      <div className={style.challenge_header}>
        <h3>El reto</h3>
        <p>
          El proyecto se centró en gestionar el manejo de las campañas
          publicitarias para el producto de SOAT, buscando la optimización de
          éstas en las diversas plataformas, para lograr un máximo de
          rendimiento de la inversión, mejorando los indicadores de medición
          como CPA, Convertion Rate y ROAS. <br /> Mediante la planificación
          conjunta del equipo de Rimac y el equipo de Digital Advertising de Neo
          Consulting, se identificaron puntos de mejora, descubriendo nuevos
          insights, testeando diversos tipos de campañas y formatos, en proceso
          constante de optimización, gestión, y análisis.
        </p>
      </div>

      <div className={style.challenge_img}></div>
    </div>
  );
};
export default Challenge;
