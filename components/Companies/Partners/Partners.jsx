import aws from "../../../public/assets/Partners/aws.png";
import googleCloud from "../../../public/assets/Partners/google-cloud.png";
import googleMarkettingPlatform from "../../../public/assets/Partners/google-marketing-platform.png";
import hubspot from "../../../public/assets/Partners/hubspot.png";
import salesforce from "../../../public/assets/Partners/salesforce.png";
import style from "../Companies.module.scss";

const Partners = () => {
  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>Somos Partners</h2>

      <div className={style.companies_container}>
        <div className={style.companies_container_img}>
          <img src={aws.src} alt="aws" />
        </div>
        <div className={style.companies_container_img}>
          <img src={googleCloud.src} alt="googleCloud" />
        </div>
        <div className={style.companies_container_img}>
          <img
            src={googleMarkettingPlatform.src}
            alt="googleMarkettingPlatform"
          />
        </div>
        <div className={style.companies_container_img}>
          <img src={hubspot.src} alt="hubspot" />
        </div>
        <div className={style.companies_container_img}>
          <img src={salesforce.src} alt="salesforce" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
