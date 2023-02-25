import style from "./Testimonial.module.scss";
import JoseDuffoo from "../../public/assets/Clients/jose_duffoo.png";

const Testimonial = ({ content }) => {
  return (
    <div className={style.testimonial}>
      <div className={style.testimonial_container}>
        <p className={style.testimonial_container_text}>“{content.desc}”</p>

        <div className={style.testimonial_container_client}>
          <img
            src={content.clientImgUrl}
            alt={content.clientName}
            className={style.testimonial_container_client_img}
          />
          <p className={style.testimonial_container_client_name}>
            {content.clientName}
          </p>
          <p className={style.testimonial_container_client_role}>
            {content.clientRole}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
