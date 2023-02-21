import style from "./Aquired.module.scss";
import Stat from "./_children/Stat";

const Aquired = () => {
  return (
    <div className={style.aquired}>
      <div className={style.aquired_container}>
        <div className={style.aquired_container_header}>
          <h2>¿Qué conseguimos?</h2>
          <p>
            El servicio permitió identificar los puntos de acción en las
            campañas digitales del producto, y directamente se logró una mejora
            en los KPIs de performance de pauta, teniendo un impacto directo en
            el incremento de un 3.63% en ventas, con la reducción del 15.89% de
            la inversión, comparando los periodos de Marzo-Junio 2021 vs 2022"
          </p>
        </div>

        <div className={style.aquired_container_stats}>
          <Stat />
          <Stat />
          <Stat />
          <Stat />
          <Stat />
        </div>
      </div>
    </div>
  );
};

export default Aquired;
