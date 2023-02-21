import style from "./Testimonial.module.scss";
import JoseDuffoo from "../../public/assets/Clients/jose_duffoo.png";

const Testimonial = () => {
  return (
    <div className={style.testimonial}>
      <div className={style.testimonial_container}>
        <p className={style.testimonial_container_text}>
          “Es importante trabajar con una compañía como NEO porque te suma
          conocimiento del mercado, metodología y te da la seguridad de recibir
          un trabajo bien hecho.”
        </p>

        <div className={style.testimonial_container_client}>
          <img
            src={JoseDuffoo.src}
            alt="Jost duffoo"
            className={style.testimonial_container_client_img}
          />
          <p className={style.testimonial_container_client_name}>
            Juan José Duffoo
          </p>
          <p className={style.testimonial_container_client_role}>
            Director Comercial y Estrategia Digital, Cineplanet
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
