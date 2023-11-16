import { StaticImage } from "gatsby-plugin-image";
import React from "react";
const Footer = () => {
  return (
    <div className="w-full h-20 py-[25px] bg-neutral-900 justify-between  font-roboto  items-center  inline-flex">
      <div className="container m-auto flex justify-between items-center">
        <div className="text-white text-xs font-semibold font-['Gothic A1'] tracking-wide">
          Copyright © {new Date().getFullYear()} azevedo.link. Todos os direitos
          reservados.
        </div>
        <div className="h-[25.59px] justify-center items-center gap-3 flex">
          <div className="text-white text-xs font-semibold inline-flex tracking-wide items-center">
            <span className="pr-2">Powered By </span>
            <StaticImage
              width={45}
              style={{ opacity: 0.9 }}
              src="../images/logo.svg"
              alt="logo"
            ></StaticImage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
