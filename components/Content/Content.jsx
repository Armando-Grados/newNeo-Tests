import style from "./Content.module.scss";
import Card from "./_children/Card/Card.jsx";
import uuid from "react-uuid";

const Content = ({ contents }) => {
  /* const [contents, setContents] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await fetch(
          "https://us-central1-blog-neo.cloudfunctions.net/app/reportes/getReportesFiltred"
        );

        const data = await res.json();
        setContents(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    getContent();
  }, []); */

  return (
    <div className={style.content}>
      <h1 className={style.content_heading}>Contenido para ti</h1>

      <div className={style.content_container}>
        {/* {contentHome.map((content, i) => {
          return <Card content={content} key={i} />;
        })} */}
        {contents.map((content) => (
          <Card content={content} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default Content;
