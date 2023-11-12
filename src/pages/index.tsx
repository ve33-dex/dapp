import HomeView from "@/views/HomeView";
import BaseLayout from "@/layouts/BaseLayout";


export default function Home() {
    return (
        <BaseLayout title="Swap">
            <HomeView/>
        </BaseLayout>
    )
}
