import React, {ReactNode} from 'react';
import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import Head from "next/head";

type childrenProps = {
    children: ReactNode,
    title: string
}

function BaseLayout({children, title}: childrenProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="2xl:container 2xl:mx-auto overflow-x-hidden min-h-screen content-start flex flex-wrap">
                <Navbar/>
                {children}
            </main>
        </>
    );
}

export default dynamic(Promise.resolve(BaseLayout), {ssr: false});