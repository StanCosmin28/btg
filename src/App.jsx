import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Projects from "./Components/Projects";
import ProjectsNavigation from "./Components/ProjectsNavigation";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSection from "./Components/ProjectsSection";
// import ProjectsContainer from "./Components/ProjectsContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/btg"
            element={
              <>
                <Navbar />
                <HeaderSection />
                <AboutUs />
                <StackCollapseSections />
                <SmartSolutions />
                <HorizontalScrollSectionDemo />
                <WhatWeOfferSection />
                <Expertiza />
                <Projects />
                <BlogCard />
                <FAQSection />
                <CTAButtonSection />
                <Footer />
              </>
            }
          />
          <Route
            path="btg/portofoliu"
            element={
              // <ProjectsContainer>
              <>
                <ProjectsNavigation />
                {/* <ProjectsHeader /> */}
                {/* <ProjectsSection /> */}
                {/* <CTAButtonSection /> */}
                {/* <Footer /> */}
              </>
              // </ProjectsContainer>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
