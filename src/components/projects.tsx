import { Link } from "gatsby";
import React from "react";

const ProjectItem = ({
  title,
  description,
  linkColor,
  linkText,
  link
}: {
  title: string;
  description: string;
  linkColor: string;
  linkText: string;
  link: string
}) => {
  return (
    <div
      id="projects"
      style={{ borderColor: linkColor }}
      className="h-52 p-8 border-2  flex flex-col justify-between bg-black text-white"
    >
      <div>
        <span className="text-3xl font-medium">{title}</span>
        <p className="mt-2 mb-2 text-base opacity-75 text-white">
          {description}
        </p>
      </div>
      <a
        style={{ color: linkColor }}
        href={link}
        className={`text-lg font-semibold hover:underline`}
      >
        {linkText}
      </a>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Zeus",
      description: "Aplicativo administrativo para Mei",
      linkColor: "#986DFF",
      linkText: "Visualizar Projeto",
      link: "#"
    },
    {
      title: "DB",
      description: "Empresa de regulamentações e Registros sanitários",
      linkColor: "#F9BB07",
      linkText: "Visualizar Projeto",
      link: "https://www.db-assuntosregulatorios.com/login"
    },
    {
      title: "Auê",
      description: "Aplicativo para promoters de evento",
      linkColor: "#6333FF",
      linkText: "Visualizar Projeto",
    },
    {
      title: "Frontend BR",
      description: "Repositório de vagas front end",
      linkColor: "#00FFB8",
      linkText: "Visualizar Projeto",
      link: "https://www.frontendbr.com"
    },
    {
      title: "Logo",
      description: "Aplicativo para Controle Logístico e Acesso",
      linkColor: "#077950",
      linkText: "Visualizar Projeto",
    },
    {
      title: "Cenarioz",
      description: "Aplicativo para aluguel de locais para eventos",
      linkColor: "#4E20E0",
      linkText: "Visualizar Projeto",
      link: "https://cenarioz.azevedo.click/"
    },
  ];

  return (
    <div className="w-full h-full pb-10 p-4 flex flex-col justify-center items-start">
      <div className="w-full p-2 pb-9 flex justify-center items-start">
        <span className="text-3xl font-medium text-white">Projetos</span>
        <span className="text-3xl font-medium text-purple-600">.</span>
      </div>
      <div className="w-full md:grid-cols-3 grid-cols-1 grid gap-5">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
      <div className="w-full p-2 flex justify-center items-start">
        <Link
          className="text-xl font-medium text-purple-600  hover:underline"
          to="https://github.com/victorazesc"
          target="_blank"
        >
          Repositórios no Github
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
