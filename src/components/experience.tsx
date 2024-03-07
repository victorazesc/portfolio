import React, { useEffect, useState } from "react";

interface Experience {
  id: number;
  title: string;
  date: string;
  company: string;
  content: string;
}

const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Engenheiro de Software",
      date: "Nov 2021 - Até o momento (1 ano e 11 meses)",
      company: "Saks",
      content:
        "Trabalho como programador full-stack com foco em backend na Saks. Minha responsabilidade inclui o desenvolvimento de um sistema de contratação e gerenciamento de previdência privada, tanto a nível nacional quanto internacional. Um dos maiores desafios é integrar diversas APIs de seguradoras e bancos internacionais, além de criar ferramentas para verificar a autenticidade de documentos. O objetivo é proporcionar uma experiência fluída e fácil para a contratação de planos de previdência privada.",
    },
    {
      id: 2,
      title: "Programador Full Stack",
      date: "Nov 2020 - Nov 2021",
      company: "Inbraep",
      content:
        "Trabalhei como programador full-stack, utilizando PHP com o framework Laravel para o desenvolvimento do back-end e Vue.js para o front-end. Durante esse período, criei um ambiente de ensino com um currículo abrangente. O principal desafio foi implementar a funcionalidade multiplataforma para atender às necessidades de diferentes níveis de acesso e, ao mesmo tempo, aprimorar a experiência de aprendizado para cada cliente.",
    },
    {
      id: 2,
      title: "Azevedo Seg",
      date: "Jan 2015 - Nov 2020",
      company: "Azevedo Seg",
      content:
        "Fui proprietário de uma empresa de tecnologia especializada em automação e segurança. Durante esse período, desenvolvi sistemas em Java e C++ para controle de acesso e automação residencial. Implementei diversas soluções em condomínios e empresas, em colaboração com empresas líderes do setor como Intelbras, Dahua e Hikvision.",
    },
    {
      id: 2,
      title: "Professor de informática",
      date: "Fev 2015 - Janeiro 2016",
      company: "Professor",
      content:
        "Trabalhei na formação dos alunos do 1º, 2º e 3º ano do ensino médio, ministrando aulas de informática e manutenção de computadores. Atuei nessa área por um ano imediatamente após a minha formação.",
    },
  ];

  useEffect(() => {
    setSelectedExperience(experiences[0]);
  }, []);

  const showExperienceContent = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="font-roboto m-auto md:p-10 p-4 bg-zinc-500 bg-opacity-[0.05] flex flex-col justify-center items-start gap-14">
      <div className="container mt-20 mb-20 m-auto">
        <div className="flex items-center mb-14">
          <span className="text-white text-4xl font-semibold font-gothicA1 break-words">
            Experiências{" "}
          </span>
          <span className="text-purple-500 text-3xl font-semibold font-gothicA1 break-words">
            .
          </span>
        </div>
        <div className="self-stretch flex-start items-start gap-10 flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full md:pr-10 bg-zinc-950 flex flex-col justify-start items-start">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex items-center cursor-pointer h-20"
                onClick={() => showExperienceContent(experience)}
              >
                <div
                  className={`border-l-2 h-full ${
                    selectedExperience?.company === experience.company
                      ? "border-purple-600"
                      : "border-transparent"
                  } relative pl-4`}
                ></div>

                <div
                  className={`${
                    selectedExperience?.company === experience.company
                      ? "text-purple-600"
                      : "text-white"
                  } text-2xl font-gothicA1 font-normal break-words`}
                >
                  {experience.company}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-2/3 w-full self-stretch md:p-10 flex flex-col justify-start items-start gap-10">
            {selectedExperience && (
              <div>
                <div className="flex justify-between md:flex-row flex-col">
                  <div className="text-white text-center text-2xl mb-3 font-gothicA1 font-normal">
                    {selectedExperience.title}
                  </div>
                  <div className="text-gray-500 text-center mb-3 text-base font-gothicA1 font-normal">
                    {selectedExperience.date}
                  </div>
                </div>

                <div className="text-purple-600 mb-3 text-xl font-gothicA1 font-normal break-words">
                  {selectedExperience.company}
                </div>
                <div className="text-gray-500 text-base font-gothicA1 font-normal break-words">
                  {selectedExperience.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
