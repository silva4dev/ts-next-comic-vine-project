import "@/assets/styles/globals.css";
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({
    Component,
    pageProps,
}: AppProps): React.ReactElement => {
    return (
        <>
            <Head>
                <title>NextJS App</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
