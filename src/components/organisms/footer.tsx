import React from "react";

import { FaHeart } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-light-500 p-5 flex items-center justify-end max-sm:justify-center">
            <p className="mr-10 text-[20px] flex items-center gap-[6px]">
                Desenvolvido com
                <FaHeart className="inline-block text-red-500" />
                por <strong>Lucas Alves</strong>
            </p>
        </footer>
    );
}
