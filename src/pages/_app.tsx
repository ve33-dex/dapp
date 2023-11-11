import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {store} from "@/store/store";
import {Provider} from "react-redux";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PageTransitionAnimationLayout from "@/layouts/PageTransitionAnimationLayout";


//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({easing: "ease", speed: 2000});
NProgress.configure({showSpinner: true});
export default function App({Component, pageProps}: AppProps) {
    return <>
        <PageTransitionAnimationLayout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </PageTransitionAnimationLayout>
    </>
}
