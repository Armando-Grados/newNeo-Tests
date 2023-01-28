import React from "react";
import style from "./Contact.module.scss";
import contactImg from "../../public/assets/Contact/contact.png";
import Link from "next/link";

import { motion } from "framer-motion";
import { zoomIn } from "../../utilities/motion";

const Contact = () => {
  return (
    <motion.div
      className={style.contact}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={zoomIn(0, 0.5)}
    >
      <div className={`${style.contact_container}`}>
        <div className={style.contact_container_left}>
          <h2 className={style.contact_container_left_title}>
            Estamos listos para conversar contigo
          </h2>
          <p className={style.contact_container_left_description}>
            Nuestros consultores te ayudarán a llevar tu a tu organización al
            siguiente nivel.
          </p>
          <div className={style.contact_container_left_button}>
            <div className={style.contact_container_left_button_container}>
              <Link
                className={style.contact_container_left_button_container_btn}
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        <div className={style.contact_container_right}>
          <div className={style.contact_container_right_image}>
            <img
              className={style.contact_container_right_image_img}
              src={contactImg.src}
              alt="Contáctanos Neo Consulting"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
