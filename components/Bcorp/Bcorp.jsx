import Link from "next/link";
import style from "./Bcorp.module.scss";
import bcorp from "../../public/assets/Bcorp/bcorp.jpg";
import arrow from "../../public/assets/Bcorp/arrow.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/motion";

const Bcorp = () => {
  return (
    <div className={style.bcorp}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn("left", "tween", 0, 0.5)}
      >
        <div className={style.bcorp_container}>
          <div className={style.bcorp_container_left}>
            <h1 className={style.bcorp_container_left_title}>
              Nuestro compromiso como B CORP
            </h1>
            <p className={style.bcorp_container_left_desc}>
              Usamos el poder de los negocios para desarrollar una economía
              inclusiva y sostenible; generando un triple impacto: en el
              ambiente, la sociedad y las personas, junto a un equipo que
              comparte los mismos valores.
            </p>
            <Link className={style.bcorp_container_left_link} href={"/"}>
              Descarga informe de impacto{" "}
              <img src={arrow.src} width={"20"} height={"20"} />
            </Link>
          </div>
          <div className={style.bcorp_container_right}>
            <div className={style.bcorp_container_right_ctn}>
              <img
                className={style.bcorp_container_right_ctn_img}
                src={bcorp.src}
                width={600}
                height={782}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bcorp;
