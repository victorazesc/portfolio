import { Link } from "gatsby";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  PiDiscordLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiMediumLogo,
} from "react-icons/pi";

const Profile: React.FC = () => {

  const experiences = [
    {
      number: "6+",
      type: "Anos",
      about: "De Experiência"
    },
    {
      number: "5+",
      type: "Projetos",
      about: "Completos"
    },
    {
      number: "2+",
      type: "Empresas",
      about: "Trabalhadas"
    },
  ]

  const links = [
    {
      link: "https://linkedin.com/in/victorazesc",
      icon: <PiLinkedinLogo />,
    },
    {
      link: "https://github.com/victorazesc",
      icon: <PiGithubLogo />,
    },
    {
      link: "https://medium.com/victorazesc",
      icon: <PiMediumLogo />,
    },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center space-x-10 mb-40">
      <div className="md:ml-8 md:mr-8 px-15 bg-zinc-500 bg-opacity-[0.05] rounded-lg overflow-hidden flex justify-start items-center space-x-15">
        <div className="flex-1 self-stretch p-4 pr-5 pl-5 flex flex-col justify-start overflow-hidden items-start">
          <div className="self-stretch text-purple-600 text-lg font-extralight break-words">
            Quem sou eu
          </div>
          <div className="self-stretch text-white text-[2.25rem] font-medium break-words">
            Victor Azevedo
          </div>
          <div className="self-stretch text-white font-light pb-6 break-words">
            Fullstack developer
          </div>
          <div className="self-stretch text-lg h-203.62 pb-8 opacity-75 text-white font-light leading-7 break-words">
            Oi, sou Victor Azevedo, ou Azevedo para os amigos. Desenvolvedor
            Full Stack, especializado em backend e Cloud Native. Sou o criador
            do <span className="text-purple-600 font-bold">'frontendbr'</span>, um repositório de vagas para devs frontend. Com
            formação em Licenciatura em Informática e pós-graduação em
            Desenvolvimento Full Stack, estou sempre em busca de novos desafios
            na tecnologia. Vamos criar juntos!
          </div>
          <div className="self-stretch flex flex-col justify-center items-center">
            <div className="flex gap-12 pb-8">
              {
                experiences.map((experience) => {
                  return (
                    <div className="flex flex-col items-center text-sm text-white font-extralight">
                      <h1 className="text-3xl font-bold">{experience.number}</h1>
                      <p>{experience.type}</p>
                      <p>{experience.about}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex gap-5 mt-4">
              {links.map((link) => {
                return (
                  <Link
                    to={link.link}
                    target="_blank"
                    style={{ color: "rgb(152 109 255 / var(--tw-bg-opacity))" }}
                    className="p-2 hover:border-purple-600 hover:border bg-zinc-950 text-2xl rounded-lg overflow-hidden flex justify-center items-center space-x-10"
                  >
                    {link.icon}
                  </Link>
                );
              })}
              <Link
                className="bg-purple-600 flex px-4 items-center gap-2 rounded-md text-base font-light text-white  hover:underline"
                to="#projects"
              >
                Download CV <MdOutlineFileDownload />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
