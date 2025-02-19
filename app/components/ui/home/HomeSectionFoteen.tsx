import Image from "next/image";
import Container from "../Container";
import based from "@/public/images/click-based.png"
import left from "@/public/images/lefthalf.png"
import right from "@/public/images/fullcircle.png"
import small from "@/public/images/smallcircle.png"



const IsoCertifiedSection = () => {
    return (
        <>
            <section className="relative text-white flex flex-col items-center text-center py-20">
                {/* Background Circles */}
                <div className="absolute top-[24rem] left-[-0.5rem] w-[14rem] max-sm:hidden">
                    <Image src={left} alt="Circle icon" className="" />
                </div>
                <div className="absolute bottom-[19.5rem] right-10 w-32 h-32 md:w-32 md:h-32 max-sm:hidden">
                    <Image src={small} alt="Circle icon" width={500} height={500} className="" />
                </div>
                <div className="absolute top-1/3 left-[17%] w-20 h-20 md:w-[4rem] md:h-28 max-sm:hidden">
                    <Image src={right} alt="Circle icon" className="" />
                </div>

                <div className="px-2">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-[#00BAA9] text-center pb-3 max-sm:pb-0 max-sm:pt-5 pt-10 max-sm:text-xl max-sm:px-4">
                        Click-Based Trading Model Powered by OI
                    </h2>

                    {/* Image */}
                    <div className="relative w-full my-8 flex justify-center">
                        <Image src={based} alt="Trading AI" width={500} height={500} className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
                    </div>

                    {/* Description */}
                    <p className="max-w-4xl text-gray-300 text-sm md:text-base max-sm:max-w-sm">
                        CCPX introduces a next-generation AI-driven trading model where every click represents a precision-executed trade powered by Organized Intelligence (OI). Unlike traditional AI bots, OI requires specialized GPU power, energy consumption, and deep market intelligence to execute trades with the highest probability of success. Each bot plan provides 29 strategic OI-driven trade clicks - one per day.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4 justify-center">
                        <button className="py-2 px-6 text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg border-[.8px] border-[rgba(153,153,153,0.5)] backdrop-blur-2xl transition-all ease-in-out duration-300">Start Trading</button>
                        <button className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700">Learn More</button>
                    </div>
                </div>
            </section>
        </>

    );
};

export default IsoCertifiedSection;
