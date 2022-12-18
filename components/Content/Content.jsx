import style from "./Content.module.scss";
import { contentHome } from "../../utilities/home/content";
import Card from "./_children/Card/Card.jsx";

const Content = () => {
  return (
    <div className={style.content}>
      <h1 className={style.content_heading}>Contenido para ti</h1>

      <div className={style.content_container}>
        {contentHome.map((content, i) => {
          return <Card content={content} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Content;
