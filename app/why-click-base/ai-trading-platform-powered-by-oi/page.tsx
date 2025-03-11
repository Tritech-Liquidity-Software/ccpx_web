
import HomeTweleveaa from "../../components/ui/home/HomeSectionFoteen";
import HomeTweleveaaaa from "../../components/ui/home/oi-powered";
import HomeTweleveaaaaa from "../../components/ui/home/ClickExecution";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL("https://ccpex.io/#About"),
    title: "CCPEX is a Next-gen AI trading platform with click-based trading powered by OI",
    description: "CCPEX is an AI trading platform with a click-based trading model that enables high precision, high-return trading seamlessly powered by OI (organized intelligence)",
    keywords: "",
}




export default function click() {
    return (
        <div>
            <HomeTweleveaa />
            <HomeTweleveaaaa />
            <HomeTweleveaaaaa />          
        </div>
    );
}
