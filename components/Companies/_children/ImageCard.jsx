import style from "../Companies.module.scss";

const ImageCard = ({ company }) => {
  return (
    <div className={style.companies_container_img}>
      <img src={company.imgSrc} alt={company.alt} />
    </div>
  );
};

export default ImageCard;
