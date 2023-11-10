import React, {ReactNode} from 'react';
import Header from "@/components/layout/Header";
import dynamic from "next/dynamic";
type childrenProps = {
    children : ReactNode ,
    title : string
}
function Layout({children , title} : childrenProps ) {
    return (
        <>
            <head>
                <title>{title}</title>
            </head>
            <main className="2xl:container 2xl:mx-auto overflow-x-hidden min-h-screen content-start flex flex-wrap">
                <Header/>
                {children}
            </main>
        </>
    );
}

export default dynamic(Promise.resolve(Layout) , {ssr : false});