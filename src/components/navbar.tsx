import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950 p-4 top-0 fixed left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link
          to="#header"
          className="text-white text-2xl font-semibold md:hidden"
        >
          <StaticImage
            style={{ opacity: 0.9 }}
            src="../images/logo.svg"
            alt="logo"
          ></StaticImage>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-400"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-2xl font-semibold hidden md:block"
        >
          <StaticImage
            style={{ opacity: 0.9 }}
            src="../images/logo.svg"
            alt="logo"
          ></StaticImage>
        </Link>
        
        <div
          className={`md:flex md:space-x-4 h-screen md:h-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="#header"
            className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
          >
            Ínicio
          </Link>
          <Link
            to="#profile"
            className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
          >
            Quem Sou
          </Link>

          <Link
            to="#experience"
            className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
          >
            Experiências
          </Link>
          <Link
            to="#projects"
            className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
          >
            Projetos
          </Link>
          <Link
            to="#technologies"
            className="block text-white mt-4 md:inline-block md:mt-0 hover:text-gray-400"
          >
            Conhecimentos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
