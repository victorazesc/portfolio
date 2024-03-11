import { Link } from "gatsby";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi2";

export function ToThetop() {
    return (
        <Link to={"#header"} className="fixed bottom-16 right-4 cursor-pointer  bg-purple-600 p-2  rounded-md text-white">
            <HiOutlineChevronDoubleUp size={25} />
        </Link>
    )
}