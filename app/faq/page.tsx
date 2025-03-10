import HomeTen from "../components/ui/home/HomeTen";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL("https://ccpex.io/"),
    title: "Find the answers | Learn How AI trading transforms Markets",
    description: "A place where you can learn about everything AI trading. Explore CCPEX and learn how our AI-driven trading models work.",
    keywords: "",
}

export default function faq() {
    return (
        <div>
            <HomeTen />
            {/* <HomeTweleve /> */}

            
        </div>
    );
}
