import IphoneSpinner from "../../public/assets/Gifs/iphone-spinner.gif";
import style from "./PageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={style.loader}>
      <img src={IphoneSpinner.src} alt="Loading..." />
    </div>
  );
};

export default PageLoader;
