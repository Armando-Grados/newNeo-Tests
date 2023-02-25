import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Solutions from "../../components/Solutions/Solutions";
import { solutionsPeru } from "../../utilities/home/solutions";
import HeroCases from "../../components/HeroCases/HeroCases";
import Challenge from "../../components/Challenge/Challenge";
import Head from "next/head";
import Testimonial from "../../components/Testimonial/Testimonial";
import Aquired from "../../components/Aquired/Aquired";
import Procedure from "../../components/Procedure/Procedure";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import uuid from "react-uuid";
import CasesNotFound from "../../components/Error/CaseNotFound";

const Case = () => {
  const [caseContent, setCaseContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [solutions, setSolutions] = useState([]);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const getCaseContent = async () => {
      try {
        // Check if case is visible
        const caseMetadataRef = doc(db, "cases_metadata", slug);
        const caseMetadataSnap = await getDoc(caseMetadataRef);
        if (caseMetadataSnap.exists()) {
          if (caseMetadataSnap.data().visible) {
            // Get case content
            const caseContentRef = doc(db, "cases_content", slug);
            const caseContentSnap = await getDoc(caseContentRef);

            if (caseContentSnap.exists()) {
              setCaseContent(caseContentSnap.data());
            } else {
              alert("Case content not found!");
            }
          } else {
            alert("Case is not published yet...");
          }
        } else {
          alert("Case not found!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getCaseContent();
    }
  }, [slug]);

  // Set solutions
  useEffect(() => {
    if (caseContent) {
      let storedSol = [];
      caseContent.services.forEach((value) => {
        const solution = solutionsPeru.filter(
          (sol) => sol.id === value.toLocaleLowerCase().replaceAll(" ", "_")
        );

        storedSol.push(solution[0]);
      });

      setSolutions(storedSol);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Success Case</title>
      </Head>

      <Header />

      {!loading && caseContent ? (
        <>
          <HeroCases
            title={caseContent.bannerTitle}
            imgUrl={caseContent.bannerImgUrl}
          />

          {caseContent.sections.map((content) => (
            <Challenge content={content} key={uuid()} />
          ))}

          {caseContent.testimonials.map((content) => (
            <Testimonial content={content} key={uuid()} />
          ))}

          <Aquired
            resultDesc={caseContent.resultDesc}
            resultTitle={caseContent.resultTitle}
            resultImages={caseContent.resultImages}
          />

          <Procedure
            title={caseContent.procedureTitle}
            steps={caseContent.steps}
          />

          {solutions && (
            <Solutions solutions={solutions} title={"Equipos Involucrados"} />
          )}

          <Contact contactUrl={caseContent.contactUrl} />
        </>
      ) : (
        <CasesNotFound />
      )}

      <Footer />
    </>
  );
};

export default Case;
