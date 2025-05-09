import "./App.css";
import Navbar from "./Components/Navbar";
import StackCollapseSections from "./Components/StackCollapseSections";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import SmartSolutions from "./Components/SmartSolutions";
import HeaderSection from "./Components/HeaderSection";
import HorizontalScrollSectionDemo from "./Components/HorizontalScrollDemo";
import WhatWeOfferSection from "./Components/WhatWeOfferSection";
import Expertiza from "./Components/Expertiza";
import FAQSection from "./Components/FAQSection";
import BlogCard from "./Components/BlogCard";
import CTAButtonSection from "./Components/CTASection";
import ProjectsSection from "./Components/ProjectsSection";

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
