import style from "./SectionReto.module.scss"

const SectionReto = ({ content, industry }) => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_header}>
          <h3>{content.title}</h3>
          <div className={style.reto_container_header_descs}>
            <p>{content.desc1}</p>
            <p>{content.desc2}</p>
            <p>{content.desc3}</p>
            <p>{content.desc4}</p>
          </div>
        </div>

        {/* <img className={style.reto_img} src={content.imgUrl} /> */}
        <div className={style.reto_container_company}>
          <img src={content.empresaImgUrl} alt="company" />
          <p>{content.empresaDesc}</p>

          <div>
            <p className={style.reto_container_company_industry}>Industria:</p>
            <p>{industry}</p>
          </div>
          <div>
            <p className={style.reto_container_company_industry}>Pais:</p>
            <p>{content.empresaPais}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionReto
