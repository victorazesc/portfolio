import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
const Header = () => {
  [1, 2, 3, 4].push();
  return (
    <div className="w-full h-full justify-between items-center inline-flex md:flex-row flex-col-reverse mt-36 overflow-hidden">
      <div className="w-full self-stretch pt-16 pb-16 flex-col justify-between items-start gap-4 inline-flex z-20">
        <div className="pt-2 pb-2 flex flex-col justify-between items-start">
          <div className="text-xl text-justify text-white opacity-70 font-normal">
            VICTOR AZEVEDO
          </div>
          <div>
            <span className="text-5xl text-purple-600 font-semibold">
              Engenheiro de software
            </span>
            <span className="text-white text-5xl font-semibold">
              {" "}
              e desenvolvedor{" "}
            </span>
            <span className="text-purple-600 text-5xl font-semibold">
              fullstack
            </span>
          </div>
        </div>
        <div className="pt-3 pb-3 pr-20 justify-start items-start gap-4 inline-flex">
          <div className="text-white text-xl font-normal leading-8">
            Nos últimos anos, como programador, trabalhei com grandes sistemas e
            startups emergentes para ajudá-las a atingir seu pleno potencial e
            melhorar a performance para seus usuários.
          </div>
        </div>
        <div className="w-96 h-8 justify-center items-center inline-flex">
          <div className="w-96 text-xl text-justify">
            <Link
              className="text-xl font-medium text-purple-600  hover:underline"
              to="#projects"
            >
              Ver projetos
            </Link>
            <span className="text-white font-normal"> ou </span>
            <Link
              className="text-xl font-medium text-purple-600  hover:underline"
              to="#profile"
            >
              Ler sobre mim
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full relative md:mb-0 -mb-28">
        <div
          className="max-w-lg h-full w-full left-0 top-8 absolute z-10"
          style={{
            background:
              "linear-gradient(340deg, rgb(9, 9, 11) 22%, rgba(9, 9, 11, 0) 100%)",
          }}
        ></div>
        <StaticImage
          width={500}
          src="../images/profile.png"
          alt="profile"
        ></StaticImage>
      </div>
    </div>
  );
};

export default Header;
