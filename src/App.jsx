// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import HeaderVideo from "./Components/HeaderVideo";
import Section from "./Components/Section";
import StackCollapseSections from "./Components/StackCollapseSections";
import ParallaxContainer from "./Components/ParallaxContainer";
import Footer from "./Components/Footer";
import FlexSection from "./Components/FlexSection";
// import SolutionsSection from "./Components/SolutionsSection";

function App() {
  return (
    <>
      <Section>
        <Navbar />
        <HeaderVideo />
      </Section>

      {/* <SolutionsSection /> */}
      <div className="w-full h-30 bg-[#242424] ">box for me</div>

      <FlexSection />
      {/* <div className="w-full h-30 bg-white">box for me</div> */}
      {/* <div className="w-full h-30 bg-white">box for me</div> */}

      {/* <Section>
        <FlexSection />
      </Section> */}
      {/* <Section>
        <div className="flex flex-col items-center justify-center min-h-screen text-whitesmoke-50">
          <h1 className="text-3xl font-bold">Despre Noi</h1>
        </div>
      </Section> */}
      {/* <div className=""> */}
      <ParallaxContainer />
      {/* </div> */}

      <Section>
        <div className="flex flex-col items-center justify-center min-h-screen text-whitesmoke-50">
          <h1 className="text-3xl font-bold">Solutii Smart</h1>
        </div>
      </Section>

      <div className="app">
        <StackCollapseSections />
      </div>

      <Section>
        <div className="flex flex-col items-center justify-center bg-[#f5f5f5] min-h-screen text-[#242424]">
          <h1 className="text-3xl font-bold">Expertiza</h1>
        </div>
      </Section>

      {/* <SolutionsSection /> */}

      <Footer />
    </>
  );
}

export default App;
