import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-gray-200">
                <div className="max-w-7xl mx-auto mt-8 pb-16">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
