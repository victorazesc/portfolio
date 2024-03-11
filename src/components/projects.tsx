import React from "react";
import { PiGithubLogoLight, PiHourglassSimpleHighFill, PiLink, PiLock } from "react-icons/pi";

const ProjectItem = ({
  description,
  link,
  githubLink,
  logo,
  stacks
}: {
  description: string;
  link?: string;
  githubLink?: string,
  logo: string;
  stacks: string[]
}) => {
  return (
    <div
      id="projects"
      className="h-52 p-8 flex flex-col justify-between bg-zinc-950 text-white rounded-lg"
    >
      <div>
        <div className="flex justify-between">
          <img
            width={30}
            style={{ opacity: 0.9 }}
            src={logo}
            alt="logo"
          ></img>
          <div className="flex gap-4">
            {
              link ? <a
                target="_blank"
                href={link}
                className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
              >
                <PiLink size={25} />
              </a> : <PiHourglassSimpleHighFill size={25} color="gray" />
            }
            {githubLink ?
              <a
                target="_blank"
                href="#technologies"
                className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
              >
                <PiGithubLogoLight size={25} />
              </a> : <PiLock size={25} color="grey" />

            }

          </div>
        </div>
        <p className="mt-2 mb-2 text-base opacity-75 text-white">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap text-xs gap-2 text-gray-500">
        {
          stacks?.map((stack) => {
            return (
              <span>{stack}</span>
            )
          })
        }
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      logo: "zeus-logo.svg",
      description: "Aplicativo administrativo para Mei",
      link: "https://zeus.azevedo.link",
      githubLink: "https://github.com/victorazesc/zeus",
      stacks: [
        'PHP',
        'Codeigniter',
        'Mysql',
        'Docker',
        'HTML',
        'CSS',
        'Javascript'
      ]
    },
    {
      logo: "db-logo.svg",
      description: "Empresa de regulamentações e Registros sanitários",
      link: "https://www.db-assuntosregulatorios.com/login",
      githubLink: "https://github.com/victorazesc/db-client",
      stacks: [
        'PHP',
        'Laravel',
        'Mysql',
        'HTML',
        'CSS',
        'Javascript'
      ]
    },
    {
      logo: "aue-logo.svg",
      description: "Aplicativo para promoters de evento",
      stacks: [
        'Flutter',
        'Dart',
        'Mysql',
        'nest.js',
        'Typescript',
      ]
    },
    {
      logo: "frontendbr-logo.svg",
      description: "Repositório de vagas front end",
      link: "https://www.frontendbr.com",
      githubLink: "https://github.com/victorazesc/frontendbr",
      stacks: [
        'HTML',
        'CSS',
        'Vue.js',
        'Vite',
        'Typescript',
      ]
    },
    {
      logo: "logo-logo.svg",
      description: "Aplicativo para Controle Logístico e Acesso",
      githubLink: "https://github.com/victorazesc/logo",
      stacks: [
        'PHP',
        'Codeigniter',
        'Mysql',
        'Docker',
        'HTML',
        'CSS',
        'Javascript'
      ]
    },
    {
      logo: "cenarioz-logo.svg",
      description: "Aplicativo para aluguel de locais para eventos",
      link: "https://cenarioz.azevedo.click/",
      stacks: [
        'Nest.js',
        'AWS',
        'Serverless',
        'Tailwind',
        'CSS',
        'Next.js',
        'Typescript',
        'GraphQl'
      ]
    },
  ];

  return (
    <div className="w-full h-full pb-10 p-4 flex flex-col justify-center bg-zinc-500 bg-opacity-[0.05] items-start rounded-lg">
      <div className="w-full p-2 pb-9 flex justify-center items-start">
        <h1 className="text-3xl font-medium text-white">Projetos Principais</h1>
      </div>
      <div className="w-full md:grid-cols-3 grid-cols-1 grid gap-5">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
