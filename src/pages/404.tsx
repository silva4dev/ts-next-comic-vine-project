import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center border gap-4 h-screen">
            <h1 className="text-green-500 text-7xl">Not Found</h1>
            <p className="text-xl text-gray-500 mb-6">
                Could not find requested resource
            </p>
            <Link
                href="/"
                className="bg-green-500 w-max p-3 rounded-md text-xl text-white hover:filter hover:brightness-95"
            >
                Back to home page
            </Link>
        </section>
    );
}
