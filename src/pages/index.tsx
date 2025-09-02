import React from "react";
import ExperienceSection from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import Contact from "../components/contact";
import { ToThetop } from "../components/toTheTop";
import { Cookie } from "../components/cookie";


const IndexPage = () => {
  return (
    <>
      <script
        defer
        data-website-id="N8PT1alvovf7Q0JN43K2y"
        data-domain="www.azevedo.click"
        src="https://track-mint.vercel.app/js/script.js">
      </script>

      <Cookie />
      <div id="custom-alert"></div>

      <main className=" pl-4 pr-4 font-sans container max-w-6xl m-auto">
        <Navbar />
        <div id={"header"}></div>
        <Header />
        <div className="h-24" id={"profile"}></div>
        <Profile />
      </main>
      <div className="mb-60" id={"experience"}></div>
      <ExperienceSection />
      <main className="font-roboto container max-w-6xl m-auto">
        <div className="h-24" id={"projects"}></div>
        <Projects />
        <div id={"technologies"}></div>
        <Technologies />
        <div id={"contact"}></div>
        <Contact />
      </main>
      <Footer />
      <ToThetop />
    </>
  );
};

export default IndexPage;
