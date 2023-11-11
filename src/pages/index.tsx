import {Inter} from 'next/font/google'
import HomeView from "@/views/HomeView";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <HomeView/>
        </>
    )
}
