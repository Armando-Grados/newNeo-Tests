import uuid from "react-uuid";
import aws from "../../../public/assets/Partners/aws.png";
import googleCloud from "../../../public/assets/Partners/google-cloud.png";
import googleMarkettingPlatform from "../../../public/assets/Partners/google-marketing-platform.png";
import hubspot from "../../../public/assets/Partners/hubspot.png";
import salesforce from "../../../public/assets/Partners/salesforce.png";
import style from "../Companies.module.scss";

const Partners = () => {
  const partnerImg = [
    aws,
    googleCloud,
    hubspot,
    salesforce,
    googleMarkettingPlatform,
  ];

  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>Somos Partners</h2>

      <div className={style.companies_container}>
        {partnerImg.map((img) => (
          <div className={style.companies_container_img} key={uuid()}>
            <img src={img.src} alt="partners" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Partners;
