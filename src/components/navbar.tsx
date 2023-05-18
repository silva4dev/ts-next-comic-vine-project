import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export function Navbar() {
    return (
        <nav className="bg-light-500 shadow-xl p-6 flex items-center max-sm:justify-center">
            <Link href="/">
                <Image src={logo} width={140} height={140} alt="" />
            </Link>
        </nav>
    );
}
