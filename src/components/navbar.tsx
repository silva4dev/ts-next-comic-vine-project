import React from "react";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";

export function Navbar() {
    return (
        <nav className="bg-light-500 shadow-xl p-6 flex items-center max-sm:justify-center">
            <Link href="/">
                <Logo />
            </Link>
        </nav>
    );
}
