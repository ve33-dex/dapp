import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {store} from "@/store/store";
import {Provider} from "react-redux";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PageTransitionAnimationLayout from "@/layouts/PageTransitionAnimationLayout";

/* RainbowKit Requirements */
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {arbitrum, base, mainnet, optimism, polygon, zora,} from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import {myRainbowCustomTheme} from "@/themes/rainbow/RainbowKitTheme";

const {chains, publicClient} = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
        alchemyProvider({apiKey: process.env.ALCHEMY_ID!}),
        publicProvider()
    ]
);

const {connectors} = getDefaultWallets({
    appName: 've33-dex',
    projectId: 'YOUR_PROJECT_ID',
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})


//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({easing: "ease", speed: 2000});
NProgress.configure({showSpinner: true});
export default function App({Component, pageProps}: AppProps) {
    return <>
        <PageTransitionAnimationLayout>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider chains={chains} theme={myRainbowCustomTheme}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </RainbowKitProvider>
            </WagmiConfig>
        </PageTransitionAnimationLayout>
    </>
}
