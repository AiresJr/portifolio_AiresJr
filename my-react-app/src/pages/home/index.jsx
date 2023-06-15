import { Contact } from "../../components/contact";
import { Footer } from "../../components/footer";
import { Frameworks } from "../../components/frameworks";
import { Header } from "../../components/header";
import { Introduction } from "../../components/introduction";
import { Projects } from "../../components/projects";

export const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Frameworks/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};
