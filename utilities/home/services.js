import service1a from "../../public/assets/Services/service-1a.png";
import service1b from "../../public/assets/Services/service-1b.png";
import service2a from "../../public/assets/Services/service-2a.png";
import service2b from "../../public/assets/Services/service-2b.png";

export const servicesHome = {
  service1: [
    {
      title: "Soluciones con Data Science Consulting",
      desc: "Elaboramos una arquitectura en Sage Maker automática para crear modelos de Machine Learning basados en las necesidades del cliente para optimizar estrategias de negocio.",
      coverImg: service1a.src,
      name: "Churn Prediction",
      content:
        "Predice la posibilidad de que un cliente abandone tu empresa o deje de utilizar tus productos o servicios.",
      procedure:
        "Se divide a los clientes en dos grupos en función de si abandonan o no a la empresa. Además, es posible indicar la probabilidad de que el cliente pertenezca a estos conjuntos.",
      impact:
        "Es menos costoso para una empresa retener un cliente que adquirir uno nuevo.",
      contactUrl: "https://google.com",
    },
    {
      title: "Soluciones con Data Science Consulting",
      coverImg: service1b.src,
      name: "Customer Life Value Prediction",
      content:
        "Es la estimación de las ganancias netas que una empresa puede obtener de un cliente a lo largo de su ciclo de vida de relación con la marca y/o clasificación en grupos de interés.",
      procedure:
        "Mediante modelos de IA se predice la contribución de un cliente a la empresa y mediante modelos de clustering se agrupan según relevancia.",
      impact:
        "La empresa puede enfocar sus estrategias de marketing en sus clientes de acuerdo a grupos de interés.",
      contactUrl: "https://google.com",
    },
  ],
  service2: [
    {
      title: "Soluciones con Data Science And Analytics Consulting",
      desc: "Ayudamos a las empresas a desarrollar soluciones de Big Data y Business Analytics.",
      coverImg: service2a.src,
      name: "Sentiment Analysis",
      content:
        "Evalúa las emociones, actitudes y opiniones de las personas frente a un tema específico, producto, marca, entre otros.",
      impact: `Creación y mejora de productos/ servicios
Marketing personalizado
Previsión de ventas
Incremento de satisfacción del cliente`,
      contactUrl: "https://google.com",
    },
    {
      title: "Soluciones con Data Science And Analytics Consulting",
      coverImg: service2b.src,
      name: "Customer Segmentation",
      content:
        "Es la estimación de las ganancias netas que una empresa puede obtener de un cliente a lo largo de su ciclo de vida de relación con la marca y/o clasificación en grupos de interés.",
      impact: `Mejora y/o creación de productos/ servicios
Mejora de estrategias de marketing
Optimización de presupuestos
Mejora de satisfacción de cliente`,
      contactUrl: "https://google.com",
    },
  ],
};
