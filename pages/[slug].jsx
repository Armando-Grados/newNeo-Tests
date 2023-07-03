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
import { useRouter } from "next/router"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import uuid from "react-uuid"
import CaseTeam from "../components/CaseTeam/CaseTeam"
import CaseProcess from "../components/CaseProcess/Process"
import PageLoader from "../components/Loading/PageLoader"
import ChallengesSection from "../components/Challenges/Challenges"

const Case = () => {
  const [caseContent, setCaseContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [solutions, setSolutions] = useState([])

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const getCaseContent = async () => {
      try {
        // Check if case is visible
        const caseMetadataRef = doc(db, "cases_metadata", slug)
        const caseMetadataSnap = await getDoc(caseMetadataRef)
        if (caseMetadataSnap.exists()) {
          if (caseMetadataSnap.data().visible) {
            // Get case content
            const caseContentRef = doc(db, "cases_content", slug)
            const caseContentSnap = await getDoc(caseContentRef)

            if (caseContentSnap.exists()) {
              setCaseContent(caseContentSnap.data())
            } else {
              alert("Case content not found!")
            }
          } else {
            alert("Case is not published yet...")
          }
        } else {
          alert("Case not found!")
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      getCaseContent()
    }
  }, [slug])

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
  }, [loading])

  if (loading) {
    return <PageLoader />
  }

  return (
    <>
      {caseContent && !loading && (
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
            <SectionReto content={content} key={uuid()} />
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
