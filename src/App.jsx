import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./component/Features/Header/Header";
// import Service from "./component/Features/services/Service";
// import Query from "./component/Features/Footer/Query";
// import PricingPage from "./component/Features/price/PricingPage/PricingPage";
// import AboutPage from "./component/Features/AboutUs/AboutPage";
// import PortfolioPage from "./component/Features/PortfolioPage/Landing";
// import WebsiteDetail from "./component/Features/services/pages/websitePage/WebsiteDetail";
// import GoogleList from "./component/Features/services/pages/GoogleList/LandingPage";
// import DigitalMarket from "./component/Features/services/pages/DigitalMarket/LandingPage";
// import LogoDesign from "./component/Features/services/pages/LogoDesign/LogoDesign";
// import Portfolio from "./component/Features/portfolio/Landing";
// import ContactPage from "./component/Features/ContactPage/ContactPage";
// import DigitalMarketingPlans from "./component/Features/price/DigitalMarketingPlans";
// import CodingWebsitePlans from "./component/Features/price/CodingWebsitePlans";
// import WordpressPlans from "./component/Features/price/WordpressPlans";

import HeroSection from "./components/heroSection/HeroSection";

import Navbar from "./components/navbar/Navbar";
import TechNexwareHero from "./components/welcome/TechNexwareHero";
import CoreServices from "./components/services/CoreServices";
import RecruitmentMarketplace from "./components/RecruitmentMarketplace/RecruitmentMarketplace";
import SoftwareOutsourcing from "./components/SoftwareOutsourcing/SoftwareOutsourcing";
import CompanyMetrics from "./components/CompanyMetrics/CompanyMetrics";
import ProcessWorkflow from "./components/ProcessWorkflow/ProcessWorkflow";
import Footer from "./components/footer/Footer"; 
import About from "./about/About" 
import Client from "./client/Client";
import ContactHeroSection from "./contact-us/ContactHeroSection";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <HeroSection/>
            <TechNexwareHero />
            <CoreServices />
            <RecruitmentMarketplace />
            <SoftwareOutsourcing />
            <CompanyMetrics/>
            <ProcessWorkflow/>
            </>
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact-us" element={<ContactHeroSection />} />
        {/* <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/website" element={<WebsiteDetail />} />
        <Route path="/digital" element={<DigitalMarket />} />
        <Route path="/listing" element={<GoogleList />} />
        <Route path="/logo" element={<LogoDesign />} /> */}
        {/* <Route
          path="/buy"
          element={
            <>
              <DigitalMarketingPlans />
              <CodingWebsitePlans />
              <WordpressPlans />
            </>
          }
        /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
