 import React, { useState } from "react";

import Login from "./Components/Login";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ExpertiseSection from "./Components/ExpertiseSection";
import Internship from "./Components/Internship";
import ProjectSection from "./Components/ProjectSection";
import OurTalent from "./Components/OurTalent";
import HiringProcess from "./Components/HiringProcess";
import ApplyAsDeveloper from "./Components/ApplyAsDeveloper";
import FooterSection from "./Components/FooterSection";
import AdminDashboard from "./Components/AdminDashboard";
import WhatsAppFloat from "./Components/whatsAppFloat";

const App = () => {
  const [isApplyView, setIsApplyView] = useState(false);
  const [isDashboardView, setIsDashboardView] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // =========================
  // LOGIN SUCCESS HANDLER
  // =========================
  const handleLoginSuccess = (jwtToken) => {
    localStorage.setItem("token", jwtToken);
    setToken(jwtToken);
    setIsLoginView(false);
    setIsDashboardView(true);
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsDashboardView(false);
    setIsLoginView(true);
  };

  return (
    <div >

      {/* HEADER */}
      <HeaderSection
        onApply={() => {
          setIsApplyView(true);
          setIsDashboardView(false);
          setIsLoginView(false);
        }}
        goHome={() => {
          setIsApplyView(false);
          setIsDashboardView(false);
          setIsLoginView(false);
        }}
        onDashboard={() => {
          if (!token) {
            setIsLoginView(true);
            return;
          }

          setIsDashboardView(true);
          setIsApplyView(false);
        }}
        onLogin={() => setIsLoginView(true)}
        onLogout={handleLogout}
      />

      <main className="pt-20 bg-transparent">

        {/* =========================
            LOGIN VIEW
        ========================= */}
        {isLoginView ? (
          <Login setToken={handleLoginSuccess} />
        ) : isDashboardView ? (

          /* =========================
              DASHBOARD VIEW
          ========================= */
          <AdminDashboard token={token} />

        ) : isApplyView ? (

          /* =========================
              APPLY PAGE
          ========================= */
          <div className="animate-in fade-in duration-500">
            <ApplyAsDeveloper />
          </div>

        ) : (

          /* =========================
              HOME PAGE
          ========================= */
          <>
             <div id="home">
  <HeroSection
    onApply={() => {
      setIsApplyView(true);
      setIsDashboardView(false);
      setIsLoginView(false);
    }}
  />
</div>
            <div id="about"><AboutSection /></div>
            <div id="services"><ServicesSection /></div>
            <div id="expertise"><ExpertiseSection /></div>
            <div id="internship">
  <Internship
    onApply={() => {
      setIsApplyView(true);
      setIsDashboardView(false);
      setIsLoginView(false);
    }}
  />
</div>
            <ProjectSection />
            <OurTalent />
            <HiringProcess />
            <WhatsAppFloat />
            <FooterSection />
          </>
        )}
      </main>
    </div>
  );
};

export default App;