import React from "react";
import ExperienceSection from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <>
      <div id="custom-alert"></div>
      <main className="text-gray-700 pl-4 pr-4 bg-zinc-950 font-sans container max-w-6xl m-auto">
        <Navbar />
        <div id={"header"}></div>
        <Header />
        <div className="h-24" id={"profile"}></div>
        <Profile />
      </main>
      <div className="mb-60" id={"experience"}></div>
      <ExperienceSection />
      <main className="text-gray-700 bg-zinc-950 font-roboto container max-w-6xl m-auto">
        <div className="h-24" id={"projects"}></div>
        <Projects />
        <div id={"technologies"}></div>
        <Technologies />
        <div id={"contact"}></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
