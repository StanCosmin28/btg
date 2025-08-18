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
import ProjectsWrapper from "./Components/ProjectsWrapper";
import AboutUsHeader from "./Components/AboutUsHeader";
import AboutUsSection from "./Components/AboutUsSection";
import AboutUsOverview from "./Components/AboutUsOverview";
import ProjectPost from "./Components/ProjectPost";

function Blog() {
  return (
    <ProjectsWrapper>
      {/*  <> */}
      <ProjectsNavigation />
      <ProjectsHeader />
      <ProjectsSection />
      <CTAButtonSection />
      <Footer />
      {/* </> */}
    </ProjectsWrapper>
  );
}
function AboutUsPage() {
  return (
    <ProjectsWrapper>
      <AboutUsHeader />
      <AboutUsSection />
      <AboutUsOverview />
      <ProjectsNavigation />
      <CTAButtonSection />
      <Footer />
    </ProjectsWrapper>
  );
}

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
          <Route path="btg/portofoliu" element={<Blog />} />
          <Route
            path="btg/portofoliu/:id"
            element={
              <>
                <ProjectsNavigation />
                <ProjectPost />
                <CTAButtonSection />
                <Footer />
              </>
            }
          />
          <Route path="btg/despre-noi" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
