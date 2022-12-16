import style from "./Testimonials.module.scss";

import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../public/assets/Swiper/left-arrow.svg";
import rightArrow from "../../public/assets/Swiper/right-arrow.svg";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation'
import "swiper/css/pagination";

import Card from "./_children/Testimonial/Card";
import { testimonialsHome } from "../../utilities/home/testimonials";

const Testimonials = () => {
  return (
    <div className={style.testimonials}>
      <h2 className={style.testimonials_title}>
        Nuestros clientes nos recomiendan
      </h2>

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
          el: ".swiper-pagination-cde",
          type: "bullets",
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        scrollbar={{ draggable: true }}
      >
        <div
          className={`${style.success_container_swiper_button} ${style.swiper_button_next_cases}`}
        >
          <span className={style.success_container_swiper_button_span}>
            Siguiente
          </span>
          <img src={rightArrow.src} alt="Casos de Exito Neo Consulting" />
        </div>
        <div
          className={`${style.success_container_swiper_button} ${style.swiper_button_prev_cases}`}
        >
          <img src={leftArrow.src} alt="Casos de Exito Neo Consulting" />
          <span className={style.success_container_swiper_button_span}>
            Anterior
          </span>
        </div>
        <div className="swiper-pagination-cde"></div>

        {testimonialsHome.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <Card testimonial={testimonial} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
