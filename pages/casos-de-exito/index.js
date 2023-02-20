import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SuccessCase from "../../components/SuccessCase/SuccessCase";
import ExploreSuccessCases from "../../components/ExploreSuccessCases/ESC";
import { successStories } from "../../utilities/home/cases";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Success Cases</title>
      </Head>

      <Header />
      <SuccessCase cases={successStories} />
      <ExploreSuccessCases />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
