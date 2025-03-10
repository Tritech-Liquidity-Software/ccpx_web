import HomeOne from "./components/ui/home/HomeOne";
import HomeTwo from "./components/ui/home/HomeTwo";
import HomeThree from "./components/ui/home/HomeThree";
import HomeFour from "./components/ui/home/HomeFour";
import HomeFive from "./components/ui/home/HomeFive";
import HomeSix from "./components/ui/home/HomeSix";
import HomeSeven from "./components/ui/home/HomeSeven";
import HomeEight from "./components/ui/home/HomeEight";
import HomeNine from "./components/ui/home/HomeNine";
import HomeEleven from "./components/ui/home/HomeEleven";
import HomeTweleves from "./components/ui/home/Homethirteen";
import HomeTweleveaaa from "./components/ui/home/HowItWorks";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL("https://ccpex.io/"),
    title: "CCPEX: AI trading solution | Artificial intelligence trading software",
    description: "CCPEX is an AI-based trading platform powered by organized intelligence. Integrating real-time data, advanced analytics, and dynamic adaptability.",
    keywords: "",
}






export default function Home() {
  return (
    <div>
      <HomeOne />
      <HomeSeven />
      <HomeEight />
      <HomeFive />
      <HomeFour />
      <HomeTweleveaaa />
      <HomeTwo />
      <HomeThree />
      <HomeSix />
      <HomeTweleves />
      <HomeNine />
      <HomeEleven />
    </div>
  );
}
