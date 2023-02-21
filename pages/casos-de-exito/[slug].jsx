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

const Case = () => {
  return (
    <>
      <Head>
        <title>Success Case</title>
      </Head>

      <Header />
      <HeroCases />
      <Challenge />
      <Testimonial />
      <Aquired />
      <Procedure />
      <Solutions
        solutions={solutionsPeru.slice(0, 3)}
        title={"Equipos Involucrados"}
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Case;
