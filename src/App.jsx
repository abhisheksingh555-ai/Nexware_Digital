import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import TechNexwareHero from "./components/welcome/TechNexwareHero";
import CoreServices from "./components/services/CoreServices";
import RecruitmentMarketplace from "./components/RecruitmentMarketplace/RecruitmentMarketplace";
import SoftwareOutsourcing from "./components/SoftwareOutsourcing/SoftwareOutsourcing";
import CompanyMetrics from "./components/CompanyMetrics/CompanyMetrics";
import ProcessWorkflow from "./components/ProcessWorkflow/ProcessWorkflow";
import Footer from "./components/footer/Footer"; 
import About from "./about/About";
import Client from "./client/Client";
import ContactHeroSection from "./contact-us/ContactHeroSection";
import Industries from "./industries/Industries";
import ServicesShowcase from "./services/ServicesShowcase";
import { ServiceProvider } from "./context/ServiceContext";

// Helper to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ServiceProvider>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TechNexwareHero />
              <CoreServices />
              <RecruitmentMarketplace />
              <SoftwareOutsourcing />
              <CompanyMetrics />
              <ProcessWorkflow />
            </>
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact-us" element={<ContactHeroSection />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/:serviceId" element={<ServicesShowcase />} />
      </Routes>
      <Footer />
      </ServiceProvider>
    </Router>
  );
}