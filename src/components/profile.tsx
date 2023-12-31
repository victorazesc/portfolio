import { Link } from "gatsby";
import React from "react";
import {
  PiDiscordLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiMediumLogo,
} from "react-icons/pi";

const Profile: React.FC = () => {
  const links = [
    {
      link: "https://instagram.com/victorazesc",
      icon: <PiInstagramLogo />,
    },
    {
      link: "https://linkedin.com/in/victorazesc",
      icon: <PiLinkedinLogo />,
    },
    {
      link: "https://discord.gg/jY7NXwPc",
      icon: <PiDiscordLogo />,
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
        <div className="flex-1 self-stretch p-4 pr-5 pl-5 flex flex-col justify-start overflow-hidden items-start space-y-5">
          <div className="self-stretch text-purple-600 text-xl font-semibold break-words">
            Quem sou eu
          </div>
          <div className="self-stretch text-white text-5xl font-medium break-words">
            Victor Azevedo
          </div>
          <div className="self-stretch text-white text-xl font-medium break-words">
            Fullstack developer
          </div>
          <div className="self-stretch text-xl h-203.62 opacity-75 text-white font-normal leading-7 break-words">
            Oi, sou Victor Azevedo, ou Azevedo para os amigos. Desenvolvedor
            Full Stack, especializado em backend e Cloud Native. Sou o criador
            do 'frontendbr', um repositório de vagas para devs frontend. Com
            formação em Licenciatura em Informática e pós-graduação em
            Desenvolvimento Full Stack, estou sempre em busca de novos desafios
            na tecnologia. Vamos criar juntos!
          </div>
          <div className="self-stretch flex flex-col justify-center items-center">
            <div className="md:grid-cols-5 grid-cols-3 grid gap-5 mt-4">
              {links.map((link) => {
                return (
                  <Link
                    to={link.link}
                    target="_blank"
                    style={{ color: "rgb(152 109 255 / var(--tw-bg-opacity))" }}
                    className="w-14 h-14 p-2 hover:border-purple-600 hover:border bg-zinc-950 text-2xl rounded-lg overflow-hidden flex justify-center items-center space-x-10"
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
