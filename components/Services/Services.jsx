import style from "./Services.module.scss";
import procedure from "../../public/assets/Services/procedure.svg";
import impact from "../../public/assets/Services/impact.svg";
import { useState } from "react";

const Services = ({ services }) => {
  const [service, setService] = useState("service1");

  return (
    <div className={style.services}>
      <h2 className={style.services_heading}>Servicios disponibles</h2>

      <div className={style.services_tabs}>
        <button
          className={
            service === "service1"
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService("service1")}
        >
          Data Science Consulting
        </button>
        <button
          className={
            service === "service2"
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService("service2")}
        >
          Data and Analytics Consulting
        </button>
      </div>

      <div className={style.services_container}>
        {services[service].map((service, index) => (
          <div className={style.services_container_service} key={index}>
            <h3 className={style.services_container_service_title}>
              {service.title}
            </h3>
            <p className={style.services_container_service_desc}>
              {service.desc}
            </p>

            <div className={style.services_container_service_part}>
              <img
                src={service.coverImg}
                alt={service.name}
                className={style.services_container_service_part_image}
              />

              <div className={style.services_container_service_part_meta}>
                <h4 className={style.services_container_service_part_meta_name}>
                  {service.name}
                </h4>
                <p
                  className={style.services_container_service_part_meta_content}
                >
                  {service.content}
                </p>

                <div
                  className={
                    style.services_container_service_part_meta_container
                  }
                >
                  {service.procedure && (
                    <div
                      className={
                        style.services_container_service_part_meta_container_process
                      }
                    >
                      <img src={procedure.src} alt="Procedure" />

                      <div
                        className={
                          style.services_container_service_part_meta_container_process_content
                        }
                      >
                        <h5>Procedimiento</h5>
                        <p>{service.procedure}</p>
                      </div>
                    </div>
                  )}

                  <div
                    className={
                      style.services_container_service_part_meta_container_process
                    }
                  >
                    <img src={impact.src} alt="Procedure" />

                    <div
                      className={
                        style.services_container_service_part_meta_container_process_content
                      }
                    >
                      <h5>Impacto</h5>
                      <p>{service.impact}</p>
                    </div>
                  </div>
                </div>

                <a href={service.contactUrl}>
                  <button
                    className={
                      style.services_container_service_part_meta_contact
                    }
                  >
                    Contáctanos
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
