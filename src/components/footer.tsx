import React from "react";
const Footer = () => {
  return (
    <div className="w-full h-20 py-[25px] bg-zinc-500 bg-opacity-[0.05] justify-between  font-roboto  items-center  inline-flex">
      <div className="container m-auto flex justify-between items-center">
        <div className="text-xs font-semibold font-['Gothic A1'] tracking-wide">
          Copyright © {new Date().getFullYear()} azevedo.link. Todos os direitos
          reservados.
        </div>
        <div className="h-[25.59px] justify-center items-center gap-3 flex">
          <div className="text-xs font-semibold inline-flex tracking-wide items-center">
            <span className="pr-2">Powered By </span>
            <img
              width={30}
              style={{ opacity: 0.9 }}
              src="logo.svg"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
