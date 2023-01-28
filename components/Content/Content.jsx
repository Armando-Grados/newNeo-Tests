import style from "./Content.module.scss";
import Card from "./_children/Card/Card.jsx";
import uuid from "react-uuid";

import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/motion";

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
    <motion.div
      className={style.content}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn("up", "tween", 0, 1)}
    >
      <h1 className={style.content_heading}>Contenido para ti</h1>

      <div className={style.content_container}>
        {/* {contentHome.map((content, i) => {
          return <Card content={content} key={i} />;
        })} */}
        {contents.map((content) => (
          <Card content={content} key={uuid()} />
        ))}
      </div>
    </motion.div>
  );
};

export default Content;
