import Link from "next/link";
import style from "./Hero.module.scss";
import view1 from "../../public/assets/Hero/view-1-mobile.png";
import view1Desk from "../../public/assets/Hero/view-1-desktop.png";

import arrowRight from "../../public/assets/Hero/arrow-right-white.svg";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../public/assets/Swiper/left-arrow.svg";
import rightArrow from "../../public/assets/Swiper/right-arrow.svg";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation'
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../../utilities/motion";

const Hero = () => {
  return (
    <motion.section
      className={style.hero}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={style.hero_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: `.${style.swiper_button_next_cases}`,
            prevEl: `.${style.swiper_button_prev_cases}`,
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-home",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          scrollbar={{ draggable: true }}
        >
          <div className="swiper-pagination-home"></div>

          <SwiperSlide>
            <motion.div
              className={style.hero_container_view}
              variants={slideIn("right", "tween", 0, 1)}
            >
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_next_cases}`}
              >
                <span className={style.hero_container_swiper_button_span}>
                  Siguiente
                </span>
                <img src={rightArrow.src} alt="Casos de Exito Neo Consulting" />
              </div>
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_prev_cases}`}
              >
                <img src={leftArrow.src} alt="Casos de Exito Neo Consulting" />
                <span className={style.hero_container_swiper_button_span}>
                  Anterior
                </span>
              </div>
              <h1 className={style.hero_container_view_title}>
                Unimos la data y el diseño centrado en el usuario para obtener
                resultados de negocio
              </h1>
              <div className={style.hero_container_view_buttons}>
                <Link
                  className={style.hero_container_view_buttons_contact}
                  href={"/contact"}
                >
                  Contáctanos
                </Link>
                <Link
                  className={style.hero_container_view_buttons_solutions}
                  href={"/solutions"}
                >
                  Ver Soluciones
                  <span
                    className={
                      style.hero_container_view_buttons_solutions_arrow
                    }
                  >
                    <img src={arrowRight.src} alt="" />
                  </span>
                </Link>
              </div>
              <div className={style.hero_container_view_details}>
                <div
                  className={style.hero_container_view_details_subcontainer_1}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      21
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      años de experiencia
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_2}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +100
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      empresas en más de 15 sectores distintos
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_3}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +800
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      proyectos ejecutados en los últimos 5 años
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={style.hero_container_view_img}
                src={view1.src}
                alt=""
              />
              <img
                className={style.hero_container_view_img_desktop}
                src={view1Desk.src}
                alt=""
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              className={style.hero_container_view}
              variants={slideIn("right", "tween", 0, 1)}
            >
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_next_cases}`}
              >
                <span className={style.hero_container_swiper_button_span}>
                  Siguiente
                </span>
                <img src={rightArrow.src} alt="Casos de Exito Neo Consulting" />
              </div>
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_prev_cases}`}
              >
                <img src={leftArrow.src} alt="Casos de Exito Neo Consulting" />
                <span className={style.hero_container_swiper_button_span}>
                  Anterior
                </span>
              </div>
              <h1 className={style.hero_container_view_title}>
                Unimos la data y el diseño centrado en el usuario para obtener
                resultados de negocio
              </h1>
              <div className={style.hero_container_view_buttons}>
                <Link
                  className={style.hero_container_view_buttons_contact}
                  href={"/contact"}
                >
                  Contáctanos
                </Link>
                <Link
                  className={style.hero_container_view_buttons_solutions}
                  href={"/solutions"}
                >
                  Ver Soluciones
                  <span
                    className={
                      style.hero_container_view_buttons_solutions_arrow
                    }
                  >
                    <img src={arrowRight.src} alt="" />
                  </span>
                </Link>
              </div>
              <div className={style.hero_container_view_details}>
                <div
                  className={style.hero_container_view_details_subcontainer_1}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      21
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      años de experiencia
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_2}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +100
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      empresas en más de 15 sectores distintos
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_3}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +800
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      proyectos ejecutados en los últimos 5 años
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={style.hero_container_view_img}
                src={view1.src}
                alt=""
              />
              <img
                className={style.hero_container_view_img_desktop}
                src={view1Desk.src}
                alt=""
              />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Hero;
