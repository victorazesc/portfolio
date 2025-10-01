import React from "react";
import useCookieConsent from "./util/cookie.hook";
import { LuCookie } from "react-icons/lu";

export function Cookie() {
    const [isConsented, acceptCookies, deniedCookies] = useCookieConsent('cookieConsent')
    return (
        <div>
            {isConsented ? (
                <></>
            ) : (
                <div className="border-zinc-800 border-2 dark:bg-zinc-950 bg-white z-50 rounded-md left-6 bottom-6 fixed p-6">
                    <div className="flex items-center text-2xl gap-4 pb-4"><LuCookie /> <h1>Aceita um Cookie ?</h1></div>
                    <p className="text-lg">Este site usa cookies para melhorar a experiência do usuário.</p>
                    <div className="flex justify-end gap-4 pt-4">
                        <button className="bg-purple-600 py-3 px-4 rounded-md text-black" onClick={acceptCookies}>Aceitar</button>
                        <button className="bg-zinc-600 py-3 px-4 rounded-md text-white" onClick={deniedCookies}>Recusar</button>
                    </div>
                </div>
            )}
        </div>
    )
}