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
import BlogCard from "./Components/BlogCard";
import CTAButtonSection from "./Components/CTASection";
import ProjectsSection from "./Components/ProjectsSection";
// import FinalTimeline from "./Components/FinalTimeline";
// import VerticalTimeline from "./Components/VericalTimeline";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutUs />
      <StackCollapseSections />
      <SmartSolutions />
      <HorizontalScrollSectionDemo />
      <WhatWeOfferSection />
      <Expertiza />
      <ProjectsSection />
      <BlogCard />
      <FAQSection />
      <CTAButtonSection />
      <Footer />
    </>
  );
}

export default App;
