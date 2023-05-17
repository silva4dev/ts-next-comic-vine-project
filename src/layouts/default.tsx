import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <section className="flex flex-col h-screen">
            <Navbar />
            <main className="bg-gray-200 flex-grow">
                <section className="max-w-[1300px] mx-auto mt-8 pb-16">
                    {children}
                </section>
            </main>
            <Footer />
        </section>
    );
}
