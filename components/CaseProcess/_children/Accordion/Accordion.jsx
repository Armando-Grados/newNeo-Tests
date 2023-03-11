import style from "./Accordion.module.scss";
import { useState } from "react";
import icon from "../../../../public/assets/Questions/icon.svg";
import uuid from "react-uuid";

const ProcessAccordion = ({ steps, processTitle, processDesc }) => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={style.accordion}>
      <div className={style.accordion_container}>
        <h2 className={style.accordion_container_title}>{processTitle}</h2>
        <p className={style.accordion_container_desc}>{processDesc}</p>
        {steps.map(({ title, desc }, i) => {
          return (
            <div key={uuid()}>
              <div
                className={style.accordion_container_header}
                onClick={() => toggle(i)}
              >
                <div>
                  <p className={style.accordion_container_header_paso}>
                    Paso {i + 1}
                  </p>
                  <p className={style.accordion_container_header_title}>
                    {title}
                  </p>
                </div>
                <span className={style.accordion_container_title_icon}>
                  <img
                    className={
                      selected === i || selected === 0
                        ? style.accordion_container_title_icon_show
                        : ""
                    }
                    style={{
                      transform:
                        selected === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                    src={icon.src}
                    width={24}
                    height={24}
                  />
                </span>
              </div>
              <div
                className={`${style.accordion_container_content} ${
                  selected === i ? style.show : ""
                }`}
              >
                <p className={style.accordion_container_content_desc}>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessAccordion;
