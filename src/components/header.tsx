import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { BsSend } from "react-icons/bs";
import React from "react";
const Header = () => {
  [1, 2, 3, 4].push();
  return (
    <div id="header" className="w-full h-full justify-between items-center inline-flex md:flex-row flex-col-reverse mt-36 overflow-hidden">
      <div className="w-full self-stretch pt-16 pb-16 flex-col justify-between items-start gap-4 inline-flex z-20">
        <div className="pt-2 pb-2 flex flex-col justify-between leading-5 items-start">
          <div className="text-lg text-justify opacity-70 font-light">
            VICTOR AZEVEDO
          </div>
          <div>
            <h1 className="text-[2.5rem] text-purple-600 font-semibold leading-[65px]">
              Engenheiro de software <span className="dark:text-white text-zinc-950">e desenvolvedor</span> fullstack
            </h1>
          </div>
        </div>
        <div className="pt-3 pb-3 pr-20 justify-start items-start gap-4 inline-flex">
          <div className=" text-lg font-light leading-8">
            Nos últimos anos, como programador, trabalhei com grandes sistemas e
            startups emergentes para ajudá-las a atingir seu pleno potencial e
            melhorar a performance para seus usuários.
          </div>
        </div>
        <Link
          className="bg-purple-600 flex py-2 px-4 items-center gap-4 rounded-md text-lg font-light text-white hover:underline"
          to="#contact"
        >
          Contato <BsSend />
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          className="md:w-96 w-80"
          src="profile.png"
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

export default Header;
