import React, { useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
  SiAmazonaws,
  SiAmazonsqs,
  SiDatadog,
  SiFlutter,
  SiGrafana,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiServerless,
  SiTypescript,
} from "react-icons/si";
import { TbBrandLaravel, TbLambda } from "react-icons/tb";

interface IStack {
  icon: React.JSX.Element;
  content: string;
}

const TechnologiesComponent = () => {
  const [selectedStack, setSelectedStack] = useState<IStack | null>(null);
  const stacks = [
    {
      icon: <SiAmazonaws />,
      content: "Amazon Web Services (AWS) - Plataforma de serviços em nuvem.",
    },
    {
      icon: <SiTypescript />,
      content:
        "TypeScript - Uma linguagem de programação que se baseia em JavaScript.",
    },
    {
      icon: <TbLambda />,
      content:
        "AWS Lambda - Um serviço de computação em nuvem sem servidor da AWS.",
    },
    {
      icon: <SiMongodb />,
      content: "MongoDB - Um sistema de gerenciamento de banco de dados NoSQL.",
    },
    {
      icon: <SiServerless />,
      content:
        "Serverless Framework - Um framework para desenvolver aplicações sem servidor.",
    },
    {
      icon: <TbBrandLaravel />,
      content: "Laravel - Um framework de desenvolvimento web em PHP.",
    },
    {
      icon: <SiPostgresql />,
      content:
        "PostgreSQL - Um sistema de gerenciamento de banco de dados relacional de código aberto.",
    },
    {
      icon: <SiJest />,
      content: "Jest - Um framework de teste de JavaScript.",
    },
    {
      icon: <SiMysql />,
      content:
        "MySQL - Um sistema de gerenciamento de banco de dados relacional.",
    },
    {
      icon: <DiJavascript1 />,
      content:
        "JavaScript - Uma linguagem de programação amplamente usada para desenvolvimento web.",
    },
    {
      icon: <FaJava />,
      content:
        "Java - Uma linguagem de programação popular para desenvolvimento de aplicativos.",
    },
    {
      icon: <SiGrafana />,
      content:
        "Grafana - Uma plataforma de análise e monitoramento de métricas e logs.",
    },
    {
      icon: <SiDatadog />,
      content:
        "Datadog - Uma plataforma de monitoramento de infraestrutura e aplicativos.",
    },
    {
      icon: <SiFlutter />,
      content:
        "Flutter - Um framework de desenvolvimento de aplicativos móveis.",
    },
    {
      icon: <SiReact />,
      content:
        "React - Uma biblioteca JavaScript para construir interfaces de usuário.",
    },
    {
      icon: <SiKubernetes />,
      content:
        "Kubernetes - Uma plataforma de orquestração de contêiner de código aberto.",
    },
    {
      icon: <SiAmazonsqs />,
      content:
        "Amazon Simple Queue Service (SQS) - Um serviço de mensagens gerenciadas da AWS.",
    },
    {
      icon: <SiRabbitmq />,
      content: "RabbitMQ - Um software de mensagens de código aberto.",
    },
  ];

  return (
    <div id="technologies" className="container mt-28 mb-28 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="pr-5">
          <div className="text-3xl font-medium mb-6">
            <span>Tecnologias</span>
          </div>
          <div className="text-xl opacity-75 mb-6">
            {selectedStack?.content ??
              "*passe o cursor do mouse no card para ler*"}
          </div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-4 gap-5">
          {stacks.map((tech) => {
            return (
              <div
                onMouseEnter={() => setSelectedStack(tech)}
                onMouseLeave={() => setSelectedStack(null)}
                className="w-20 h-20 text-5xl flex items-center hover:border-purple-600 hover:border rounded-md justify-center text-center bg-zinc-500 bg-opacity-[0.05] text-purple-600"
              >
                {tech.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
