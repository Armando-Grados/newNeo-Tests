import style from "./HeroRecruitment.module.scss";
import ArrowRight from "../../public/assets/SVGs/arrow-right-line.svg";
import HeroImg from "../../public/assets/Hero/hero-recruitment.png";

const HeroRecruitment = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_left}>
          <div className={style.hero_container_left_top}>
            <div className={style.hero_container_left_top_tag}>#UneteaNeo</div>
            <p className={style.hero_container_left_top_text}>
              Hay muchos puestos esperándote
            </p>
          </div>

          <div className={style.hero_container_left_middle}>
            Descubre oportunidades de carrera emocionantes y crece con nosotros
            en un ambiente divertido y honesto.
          </div>

          <div className={style.hero_container_left_bottom}>
            <button className={style.hero_container_left_bottom_contained}>
              Envía tu CV
            </button>
            <button className={style.hero_container_left_bottom_transparent}>
              <span>Ver Vacantes</span>
              <img src={ArrowRight.src} alt="Arrow right" />
            </button>
          </div>
        </div>

        <div className={style.hero_container_right}>
          <img src={HeroImg.src} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroRecruitment;
