import React from "react";
import { IoCopyOutline, IoLinkOutline, IoLogoAlipay, IoLogoLinkedin, IoMail, IoMailOutline } from "react-icons/io5";
import {exibirAlerta} from './util/hooks'

const Contact = () => {
    function copiarTexto() {
        let link: any = ""
        link = document.getElementById("email");
        var texto = link?.textContent || link?.innerText;

        var textarea = document.createElement("textarea");
        textarea.value = texto;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand('copy');

        document.body.removeChild(textarea);

        exibirAlerta('O Email foi copiado para área de transferência!');

    }
    return (
        <div id="contact" className="m-auto md:p-10 mb-16 p-4flex flex-col justify-center items-start gap-14">
            <div className="max-w-3xl flex flex-col justify-center mx-auto">
                <div className="flex flex-col items-center mb-14">
                    <h1 className="text-white text-3xl font-semibold">
                        Contato
                    </h1>
                    <h5 className="text-white">
                        Vamos conversar
                    </h5>
                </div>
            </div>
            <div className="flex mx-auto justify-center gap-4">
                <div
                    id = "email"
                    className="bg-purple-600 cursor-pointer flex py-2 px-4 items-center gap-4 rounded-md text-lg font-light text-white  hover:underline"
                    onClick={() => copiarTexto()}
                >
                    <IoMailOutline /> victorazesc@hotmail.com <IoCopyOutline />
                </div>
                <a
                    className="bg-purple-600 flex py-2 px-4 items-center gap-4 rounded-md text-lg font-light text-white  hover:underline"
                    href="https://www.linkedin.com/in/victorazesc"
                    target="_Blank"
                >
                    <IoLogoLinkedin /> Linkedin <IoLinkOutline />
                </a>
            </div>
        </div>
    )

}

export default Contact