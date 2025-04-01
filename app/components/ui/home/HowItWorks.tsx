import Image from "next/image";
import one from "@/public/images/firstclick.png"
import two from "@/public/images/firstclick2.png"
import three from "@/public/images/firstclick3.png"
import bitcion from "@/public/images/bitcion.png"
import arrow from "@/public/images/rightarrow.png"


const IsoCertifiedSection = () => {
    return (
        <>
            <section className="relative py-12 md:py-16 overflow-hidden " id="howitsworks">
                <div className="absolute top-[6rem] left-[1.5rem] w-[12rem] max-sm:hidden">
                    <Image src={bitcion} alt="Circle icon" className="" />
                </div>
                <div className="absolute bottom-[2.5rem] right-[-2rem] w-32 h-32 md:w-32 md:h-32 max-sm:hidden">
                    <Image src={arrow} alt="Circle icon" className="" />
                </div>
                <div className="max-w-7xl mx-16 2xl:max-w-[120rem]">
                    {/* Heading */}
                    <h2 className="text-center text-3xl font-bold text-[#00BAA9]">
                        How It Works?
                    </h2>
                    {/* 3-column layout */}
                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3  max-lg:gap-0 bg-[rgb(35,35,35)] border border-[#C6CDC72B] rounded-[50px]">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center p-6  border-r border-[#C6CDC72B] my-5">
                            {/* Icon (Placeholder) */}
                            <Image src={one} alt="Circle icon" className="" />

                            {/* Title/Text */}
                            <p className="text-[#ffff] max-lg:text-[14px] mt-4">
                                When you subscribe to a bot plan, you receive 29 OI-powered clicks - one click per day.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center p-6 border-r border-[#C6CDC72B] my-5">
                            {/* Icon (Placeholder) */}
                            <Image src={two} alt="Circle icon" className="" />
                            {/* Title/Text */}
                            <p className="text-[#ffff] max-lg:text-[14px] mt-4">
                                Each click triggers an intelligent trade, leveraging OIs full computational capacity, deep learning analysis, and risk-adjusted strategy.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center p-6 border-r border-[#C6CDC72B] my-5">
                            {/* Icon (Placeholder) */}
                            <Image src={three} alt="Circle icon" className="" />
                            {/* Title/Text */}
                            <p className="text-[#ffff] max-lg:text-[14px] mt-4">
                                These clicks ensure that your trades are executed with market-optimized intelligence, maximizing profitability while efficiently utilizing OIs energy and resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IsoCertifiedSection;
