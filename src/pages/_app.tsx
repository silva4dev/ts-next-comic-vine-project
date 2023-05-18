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
                <meta charSet="utf-8" />
                <meta
                    name="descripton"
                    content="Comic Vine is the largest comic book wiki in the universe"
                />
                <meta name="author" content="Lucas Alves" />
                <meta
                    name="keywords"
                    content="Comic Book, Wiki in the universe Comic Vine"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Providers>
    );
};

export default App;
