import LocomotiveScroll from "locomotive-scroll";
import {
  Blog,
  Consultation,
  Footer,
  Hero,
  NaveBar,
  OurPortfolio,
  OurProjects,
  UberUns,
  UxUiDesign,
  Workflow,
} from "./components";

const App = () => {
  const locomotive = new LocomotiveScroll();

  return (
    <div
      ref={locomotive}
      className="w-full min-h-screen bg-[#fff] relative font-poppins overflow-x-hidden"
    >
      <NaveBar />
      <Hero />
      <UberUns />
      <OurProjects />
      <UxUiDesign />
      <Workflow />
      <OurPortfolio />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  );
};

export default App;
