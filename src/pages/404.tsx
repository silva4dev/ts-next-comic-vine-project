import React from "react";

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-blue-500 text-3xl">Not Found</h1>
            <p className="text-gray-500">Could not find requested resource</p>
        </section>
    );
}
