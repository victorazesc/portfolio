import React, { useEffect, useState } from "react";
import { LuCalendarDays, LuGraduationCap } from "react-icons/lu";

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
    <div className="m-auto md:p-10 p-4 bg-zinc-500 bg-opacity-[0.05] flex flex-col justify-center items-start gap-14">
      <div className="max-w-3xl flex flex-col justify-center mx-auto">
        <div className="flex flex-col items-center mb-14">
          <span className="text-white text-3xl font-semibold">
            Qualificações
          </span>
          <span className="text-white">
            Minha Jornada até aqui
          </span>
        </div>
        <div className="text-white">
          <div className="flex justify-evenly mb-3 text-2xl font-semibold">
            <h2 className="flex items-center gap-2"><LuGraduationCap /> Formações</h2>
            <h2 className="flex items-center gap-2"><LuGraduationCap /> Formações</h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div>
              <p>Ciencias da Computação</p>
              <p className="text-gray-400">SC - Descomplica</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Set. 2022 - Set. 2026</p>
            </div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="block w-px h-full bg-purple-600 transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div>
              <p>Pós graduação em sistemas fullstack</p>
              <p className="text-gray-400">SC - Uniasselvi</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Mar. 2021 - Abr. 2022</p>
            </div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="block w-px h-full bg-purple-600 transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
              <p>Engenheiro de software</p>
              <p className="text-gray-400">Saks Global</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Nov. 2021 - Até o momento</p>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div></div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="block w-px h-full bg-purple-600 transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
              <p>Desenvolvedor FullStack</p>
              <p className="text-gray-400">SC - INBRAEP</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Nov. 2020 - Nov. 2021</p>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div></div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="block w-px h-full bg-purple-600 transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
              <p>Empresário</p>
              <p className="text-gray-400">SC - Azevedo Sistemas Autonomos</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Set. 2018 - Nov. 2020</p>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div></div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="block w-px h-full bg-purple-600 transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
              <p>Professor de informática</p>
              <p className="text-gray-400">SC - Escola Victor Meirelles</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Set. 2017 - Nov. 2018</p>
            </div>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr max-content 1fr" }}>
            <div>
              <p>Licenciatura em informática</p>
              <p className="text-gray-400">SC - Uniasselvi</p>
              <p className="py-3 text-gray-500 flex gap-2 items-center"><LuCalendarDays /> Fev. 2014 - Dez. 2016</p>
            </div>
            <div>
              <span className="block w-3 h-3 bg-purple-600 rounded-full"></span>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
