import style from "./Region.module.scss";
import regionMob from "../../public/assets/Region/region_mobile.svg";
import regionDesk from "../../public/assets/Region/region_desktop.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/motion";

const Region = () => {
  return (
    <motion.div
      className={style.region}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", "tween", 0, 0.4)}
    >
      <h1 className={style.region_title}>Tenemos presencia regional</h1>
      <div className={style.blur_1}></div>
      <div className={style.region_container}>
        <img
          className={style.region_container_mobile}
          src={regionMob.src}
          width={320}
          height={353}
        />
        <img
          className={style.region_container_desktop}
          src={regionDesk.src}
          width={1250}
          height={888}
        />
      </div>
      <div className={style.blur_2}></div>
    </motion.div>
  );
};

export default Region;
