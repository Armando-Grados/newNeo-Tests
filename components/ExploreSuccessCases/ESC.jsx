import style from "./ESC.module.scss"
import Card from "./_children/Card/Card"
import uuid from "react-uuid"
import CasesNotFound from "../Error/CaseNotFound"
import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import LoadingIndicator from "../../public/assets/Gifs/iphone-spinner.gif"

const ExploreSuccessCases = () => {
  const [loading, setLoading] = useState(true)
  const [casesMetadata, setCasesMetadata] = useState([])
  const [industry, setIndustry] = useState("banca")
  const [filteredCases, setFilteredCases] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let storedMetadata = []

        // Get visible cases metadata
        const caseQuery = query(
          collection(db, "cases_metadata"),
          where("visible", "==", true)
        )
        const caseSnapshot = await getDocs(caseQuery)
        caseSnapshot.forEach((doc) => {
          storedMetadata.push({
            caseId: doc.id,
            ...doc.data(),
          })
        })

        setCasesMetadata(storedMetadata)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    if (!loading) {
      const filtered = casesMetadata.filter(
        (caseMetadata) =>
          caseMetadata.caseIndustry.toLowerCase() === industry.toLowerCase()
      )

      setFilteredCases(filtered)
    }
  }, [industry, loading])

  return (
    <div className={style.esc}>
      <div className={style.esc_container}>
        <div className={style.esc_container_header}>
          <h2>Explora nuestros inspiradores casos de éxito </h2>
          <p>
            En nuestros casos de éxito podrás ver de qué manera nuestros
            clientes utilizan nuestras soluciones y cómo logramos alcanzar sus
            objetivos de negocio de manera conjunta.
          </p>
        </div>

        <div className={style.esc_container_inputs}>
          <div className={style.esc_container_inputs_select}>
            <label>Tipo</label>
            <select disabled>
              <option value="">Todos</option>
              <option value="casos-de-exito" selected>
                Casos de éxito
              </option>
              <option value="">Experiencias similares</option>
            </select>
          </div>

          <div className={style.esc_container_inputs_select}>
            <label>Industria</label>
            <select
              name="industry"
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="retail">Retail</option>
              <option value="goblerno">Goblerno</option>
              <option value="banca">Banca</option>
              <option value="seguros">Seguros</option>
              <option value="Laboratorios farmaceuticos">
                Laboratorios farmaceuticos
              </option>
              <option value="Textil">Textil</option>
              <option value="Belleza">Belleza</option>
              <option value="Educacion">Educacion</option>
              <option value="Salud">Salud</option>
              <option value="Telecomunicaciones">Telecomunicaciones</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Industrial">Industrial</option>
              <option value="Alimentos y bebidas">Alimentos y bebidas</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className={style.esc_container_cases}>
            <img
              src={LoadingIndicator.src}
              alt="Loading..."
              style={{ width: "4rem", height: "4rem" }}
            />
          </div>
        ) : filteredCases.length ? (
          <div className={style.esc_container_cases}>
            {filteredCases.map((content) => (
              <Card content={content} key={uuid()} />
            ))}
          </div>
        ) : (
          <CasesNotFound />
        )}
      </div>
    </div>
  )
}

export default ExploreSuccessCases