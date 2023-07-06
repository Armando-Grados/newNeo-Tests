import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Contact from "../components/Contact/Contact"
import Solutions from "../components/Solutions/Solutions"
import { solutionsPeru } from "../utilities/home/solutions"
import HeroCases from "../components/HeroCases/HeroCases"
import SectionReto from "../components/SectionReto/SectionReto"
import Head from "next/head"
import Testimonial from "../components/Testimonial/Testimonial"
import Result from "../components/Results/Results"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import uuid from "react-uuid"
import CaseTeam from "../components/CaseTeam/CaseTeam"
import CaseProcess from "../components/CaseProcess/Process"
import ChallengesSection from "../components/Challenges/Challenges"
import CasesNotFound from "../components/Error/CaseNotFound"

const Case = ({ caseContent }) => {
  const [solutions, setSolutions] = useState([])

  // Set solutions
  useEffect(() => {
    if (caseContent) {
      let storedSol = []
      caseContent.services.forEach((value) => {
        const solution = solutionsPeru.filter((sol) => sol.id === value.id)

        storedSol.push(solution[0])
      })

      setSolutions(storedSol)
    }
  }, [])

  if (!caseContent) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CasesNotFound />
      </div>
    )
  }

  return (
    <>
      {caseContent && (
        <>
          <Head>
            <title>{caseContent.caseTitle}</title>
            <meta name="description" content={caseContent.caseDesc} />
            <meta property="og:image" content={caseContent.caseMetaImgUrl} />
          </Head>

          <Header />
          <HeroCases
            title={caseContent.bannerTitle}
            imgUrl={caseContent.bannerImgUrl}
            toolkitUrl={caseContent.bannerToolkitUrl}
          />

          {caseContent.retos.map((content) => (
            <SectionReto
              content={content}
              key={uuid()}
              industry={caseContent.caseIndustry}
            />
          ))}

          <ChallengesSection
            challengesDesc1={caseContent.challengesDesc1}
            challengesDesc2={caseContent.challengesDesc2}
            challengesDesc3={caseContent.challengesDesc3}
            challengesDesc4={caseContent.challengesDesc4}
            challengesImgUrl={caseContent.challengesImgUrl}
            challengesTitle={caseContent.challengesTitle}
          />

          {caseContent.testimonials.length > 0 && (
            <Testimonial content={caseContent.testimonials[0]} key={uuid()} />
          )}

          <Result
            resultDesc={caseContent.resultDesc}
            resultTitle={caseContent.resultTitle}
            resultImages={caseContent.resultImages}
          />

          {caseContent.testimonials.length > 1 && (
            <Testimonial content={caseContent.testimonials[1]} key={uuid()} />
          )}

          {caseContent.teamImgUrl.length > 0 && (
            <CaseTeam imgUrls={caseContent.teamImgUrl} />
          )}

          <CaseProcess
            imgUrl={caseContent.processImgUrl}
            steps={caseContent.steps}
            processDesc={caseContent.processDesc}
            processTitle={caseContent.processTitle}
          />

          {caseContent.testimonials.length > 2 && (
            <Testimonial content={caseContent.testimonials[2]} key={uuid()} />
          )}

          {solutions && (
            <Solutions solutions={solutions} title={"Equipos Involucrados"} />
          )}

          {caseContent.testimonials.length > 3 && (
            <Testimonial content={caseContent.testimonials[3]} key={uuid()} />
          )}

          <Contact contactUrl={caseContent.contactUrl} />

          <Footer />
        </>
      )}
    </>
  )
}

export default Case

export const getServerSideProps = async (context) => {
  const { slug } = context.params

  const caseMetadataRef = doc(db, "cases_metadata", slug)
  const caseMetadataSnap = await getDoc(caseMetadataRef)

  if (caseMetadataSnap.exists()) {
    if (caseMetadataSnap.data().visible) {
      const caseContentRef = doc(db, "cases_content", slug)
      const caseContentSnap = await getDoc(caseContentRef)

      if (caseContentSnap.exists()) {
        return {
          props: {
            caseContent: caseContentSnap.data(),
          },
        }
      } else {
        return {
          props: {
            caseContent: null,
          },
        }
      }
    } else {
      return {
        props: {
          caseContent: null,
        },
      }
    }
  }
}
