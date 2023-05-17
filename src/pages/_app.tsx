import "@/assets/styles/globals.css";
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Providers } from "@/redux/provider";

const App: React.FC<AppProps> = ({
    Component,
    pageProps,
}: AppProps): React.ReactElement => {
    return (
        <Providers>
            <Head>
                <title>Comic Vine</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </Providers>
    );
};

export default App;
