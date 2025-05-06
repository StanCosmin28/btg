// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
// import HeaderVideo from "./Components/HeaderVideo";
import Section from "./Components/Section";
import StackCollapseSections from "./Components/StackCollapseSections";
// import ParallaxContainer from "./Components/ParallaxContainer";
import Footer from "./Components/Footer";
// import FlexSection from "./Components/FlexSection";
import SolutionsSection from "./Components/SolutionsSection";
import AboutUs from "./Components/AboutUs";
// import TextFillOnScroll from "./Components/TextFillOnScroll";
import SmartSolutions from "./Components/SmartSolutions";
import HeaderSection from "./Components/HeaderSection";
// import TracingBeamDemo from "./Components/TracingBeamDemo";
import HorizontalScrollSectionDemo from "./Components/HorizontalScrollDemo";
import WhatWeOfferSection from "./Components/WhatWeOfferSection";
import Expertiza from "./Components/Expertiza";
import FAQSection from "./Components/FAQSection";
// import FinalTimeline from "./Components/FinalTimeline";
// import VerticalTimeline from "./Components/VericalTimeline";

function App() {
  return (
    <>
      {/* Header Section - Video + Contacts */}
      <Navbar />
      <HeaderSection />
      <AboutUs />
      {/* <div className="app"> */}
      <StackCollapseSections />
      <Section>
        <SmartSolutions />
      </Section>
      <WhatWeOfferSection />
      <HorizontalScrollSectionDemo />

      <WhatWeOfferSection />
      <Expertiza />
      {/* <div className="w-full h-50 bg-white lg:hidden"></div> */}
      {/* <Section>
        <SmartSolutions />
      </Section> */}
      {/* <Section></Section> */}
      {/* <VerticalTimeline /> */}
      {/* <FinalTimeline /> */}
      {/* <Section> */}
      {/* <TracingBeamDemo /> */}
      {/* </Section> */}
      {/* <Section></Section> */}
      {/* <Section> */}
      {/* <SmartSolutions /> */}
      {/* </Section> */}
      {/* <Section></Section> */}

      {/* <HeaderVideo /> */}
      {/* <TextFillOnScroll /> */}
      {/* <Reactbits/> */}
      {/* <SolutionsSection /> */}
      {/* About Us Section */}
      {/* <div className="app">
        <StackCollapseSections />
      </div> */}
      {/* <Section>
        <SmartSolutions />
      </Section> */}
      {/* <div className="w-full h-30 bg-[#242424] ">box for me</div> */}
      {/* <FlexSection /> */}
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
      {/* <div className="relative">
        <ParallaxContainer />
      </div> */}
      {/* </div> */}
      {/* <Section> */}
      {/* <div className="w-full h-full border-1 flex flex-col md:flex-row items-center justify-center min-h-screen text-whitesmoke-50">
        <div className="flex w-full h-full border-1 border-orange-400 justify-between flex-col">
          <div className="w-full p-8 bg-amber-300 h-full text-left">
            <h1 className="text-3xl font-bold">Solutii Smart</h1>
            line
            <h2>Partenerul tău de încredere în proiectare</h2>
          </div>
          <div className="w-full p-8 bg-amber-400 h-full text-left">
            <h2 className="">Partenerul tău de încredere în proiectare</h2>
            <h3 className="">
              BTG (BUILDING TECHNOLOGY GROUP) este o companie specializată în
              soluții de automatizare pentru clădiri, oferind sisteme Building
              Management System (BMS) personalizate pentru diverse tipuri de
              spații: rezidențiale, comerciale și industriale. Scopul principal
              al acestor sisteme este de a îmbunătăți Confortul, Siguranța și
              Eficiența energetică a clădirilor, permițând controlul de la
              distanță al diferitelor funcții ale acestora.
            </h3>
            <button className="">Descoperă mai mult</button>
          </div>
          <div className="w-full p-8 bg-amber-500 h-full text-left flex flex-row justify-between">
            <div className="">
              <h3>Counter1</h3>
              <p>Ani de experienta</p>
            </div>
            <div className="">
              <h3>Counter2</h3>
              <p>Proiecte livrate cu succes</p>
            </div>
            <div className="">
              <h3>Counter3</h3>
              <p>Viitoare colaborari</p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full border-1 border-green-400 justify-center items-center">
          
          <img
            className="p-12"
            src="public/services.svg"
            alt="svg house plan"
          />
        </div>
      </div> */}
      {/* </Section> */}
      {/* <div className="app">
        <StackCollapseSections />
      </div> */}
      {/* <Section> */}
      {/* <div className="flex flex-col items-center justify-center bg-[#f5f5f5] min-h-screen text-[#242424]">
          <h1 className="text-3xl font-bold">Expertiza</h1>
          </div> */}
      {/* <Section>
        <SmartSolutions />
      </Section> */}
      {/* <Section>
        <SmartSolutions />
      </Section> */}
      {/* <ParallaxContainer /> */}
      {/* </Section> */}
      {/* <ParallaxContainer /> */}
      {/* <SolutionsSection /> */}
      {/* <SmartSolutions /> */}
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
