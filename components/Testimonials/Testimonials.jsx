import style from "./Testimonials.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./_children/Card/Card";
import uuid from "react-uuid";

import leftArrow from "../../public/assets/Swiper/left-arrow-accent.svg";
import rightArrow from "../../public/assets/Swiper/right-arrow-accent.svg";
import bcp from "../../public/assets/Testimonials/bcp.png";
import cineplanet from "../../public/assets/Testimonials/cineplanet.png";
import user1 from "../../public/assets/Testimonials/user-1.jpg";
import user2 from "../../public/assets/Testimonials/user-2.png";
import protectaSecurity from "../../public/assets/Testimonials/protecta-security.png";
import user3 from "../../public/assets/Testimonials/user-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialData = [
    {
      logo: bcp.src,
      quote:
        "“Logramos reducir la información que debe ingresar el usuario a un solo campo, sin alterar su navegación. Menos pasos en el proceso de compra incrementan el ratio de conversión significativamente.”",
      client: {
        name: "Diego Nasra",
        avatar: user1.src,
        role: "Product Owner, BCP",
      },
    },
    {
      logo: cineplanet.src,
      quote:
        "“Es importante trabajar con una compañía como Neo porque te suma conocimiento del mercado, metodología y te da la seguridad de recibir un trabajo bien hecho.”",
      client: {
        name: "Juan José Duffoo",
        avatar: user3.src,
        role: "Director Comercial y Estrategia Digital, Cineplanet",
      },
    },
    {
      logo: protectaSecurity.src,
      quote:
        "“Trabajar de la mano con Neo, nos permite alinear la estrategia digital de la marca con los objetivos de negocio, planteándonos metas cada vez más retadoras.&”",
      client: {
        name: "Rocío Merino Loredo",
        avatar: user2.src,
        role: "Subgerente de Marketing y CX, Protecta",
      },
    },
  ];

  return (
    <motion.div
      className={style.testimonials}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className={style.testimonials_title}>
        Nuestros clientes nos recomiendan
      </h2>

      <div className={style.testimonials_container}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={1.3}
          spaceBetween={40}
          initialSlide={1}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: `.${style.swiper_button_next}`,
            prevEl: `.${style.swiper_button_prev}`,
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-teams",
            type: "bullets",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            className={`${style.testimonials_container_swiper_button} ${style.swiper_button_next}`}
          >
            <span className={style.testimonials_container_swiper_button_span}>
              Siguiente
            </span>
            <img src={rightArrow.src} alt="rightArrow" />
          </div>
          <div
            className={`${style.testimonials_container_swiper_button} ${style.swiper_button_prev}`}
          >
            <img src={leftArrow.src} alt="leftArrow" />
            <span className={style.testimonials_container_swiper_button_span}>
              Anterior
            </span>
          </div>
          <div className="swiper-pagination-teams"></div>

          {testimonialData.map((data) => {
            return (
              <SwiperSlide className={style.centeralised_slider} key={uuid()}>
                <Card data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonials;
