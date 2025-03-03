import Image from "next/image";
import one from "@/public/images/organize.png"
import three from "@/public/images/whatis.png"
import arrow from "@/public/images/performance.png"
import arrow1 from "@/public/images/doller1.png"
import arrow2 from "@/public/images/doller2.png"
import arrow3 from "@/public/images/doller3.png"



const IsoCertifiedSection = () => {
    return (
        <>
            <section className="relative md:py-10 overflow-hidden mx-20 max-sm:mx-5">
                <h2 className="text-3xl font-semibold text-[#00BAA9] text-center pb-20 max-sm:pb-10 max-sm:pt-5 max-sm:text-xl max-sm:px-4">Why Click-Based Trading?</h2>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-10">
                    <div className="">
                        <div className="bg-[linear-gradient(263.3deg,rgba(0,0,0,0.25)_5.82%,rgba(217,217,217,0.03)_97.91%)] border border-[#1e3232] p-[17px] rounded-md ">
                            <div className="flex justify-center gap-x-10 items-center">
                                <div className="flex justify-center ">
                                    <div className="border border-[#9999996B] bg-[#00000040] h-[70px] w-[70px] p-1 flex justify-center rounded-md ">
                                        <Image src={arrow} alt="Circle icon" className="" />
                                    </div>
                                </div>
                                <p className="text-white text-sm md:text-base"><span className="text-[#00BAA9]">Maximized Efficiency</span> - Each click utilizes OIs full computational power for high-precision, high-return trading.</p>
                            </div>
                        </div>
                        <div className="bg-[linear-gradient(263.3deg,rgba(0,0,0,0.25)_5.82%,rgba(217,217,217,0.03)_97.91%)] border border-[#1e3232] p-[17px] rounded-md mt-5">
                            <div className="flex justify-center gap-x-10 items-center">
                                <div className="flex justify-center ">
                                    <div className="border border-[#9999996B] bg-[#00000040] h-[70px] w-[70px] p-1 flex justify-center rounded-md ">
                                        <Image src={arrow1} alt="Circle icon" className="" />
                                    </div>
                                </div>
                                <p className="text-white text-sm md:text-base"><span className="text-[#00BAA9]">Fair & Transparent </span> - You pay for OIs GPU energy, AI-driven intelligence, and trade execution power per optimized trade.</p>
                            </div>
                        </div>
                        <div className="bg-[linear-gradient(263.3deg,rgba(0,0,0,0.25)_5.82%,rgba(217,217,217,0.03)_97.91%)] border border-[#1e3232] p-[17px] rounded-md mt-5">
                            <div className="flex justify-center gap-x-10 items-center">
                                <div className="flex justify-center ">
                                    <div className="border border-[#9999996B] bg-[#00000040] h-[70px] w-[70px] p-1 flex justify-center rounded-md ">
                                        <Image src={arrow2} alt="Circle icon" className="" />
                                    </div>
                                </div>
                                <p className="text-white text-sm md:text-base"><span className="text-[#00BAA9]">Sustainable Trading</span> -  Limits unnecessary trades, optimizing OI resources for long-term profitability and system efficiency.</p>
                            </div>
                        </div>
                        <div className="bg-[linear-gradient(263.3deg,rgba(0,0,0,0.25)_5.82%,rgba(217,217,217,0.03)_97.91%)] border border-[#1e3232] p-[17px] rounded-md mt-5">
                            <div className="flex justify-center gap-x-10 items-center">
                                <div className="flex justify-center ">
                                    <div className="border border-[#9999996B] bg-[#00000040] h-[70px] w-[70px] p-1 flex justify-center rounded-md ">
                                        <Image src={arrow3} alt="Circle icon" className="" />
                                    </div>
                                </div>
                                <p className="text-white text-sm md:text-base"><span className="text-[#00BAA9]">Controlled Risk Strategy</span> - The higher the plan, the higher the risk-reward ratio, allowing traders to choose their strategy based on risk tolerance.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image src={three} alt="Circle icon" className="" />
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold text-[#00BAA9] text-center  max-sm:pb-0 max-sm:pt-5 pt-20 max-sm:text-xl max-sm:px-4 ">Why Organized Intelligence Needs Clicks?</h2>
                <p className="text-[#FFFFFF] pt-5 text-center">OI doesnot execute random trades - it processes massive amounts of data, forecasts market trends, and <br />strategically places trades with the highest probability of success.</p>

                <div className="flex justify-center pt-12">
                    <Image src={one} alt="Circle icon" className="" />
                </div>
                <p className="text-[#FFFFFF] py-8  text-center">This ensures that every click is highly optimized, reducing risk and maximizing profitability.</p>
                <div className="mt-6 flex gap-4 justify-center">
                    <button className="py-2 px-6 text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg border-[.8px] border-[rgba(153,153,153,0.5)] backdrop-blur-2xl transition-all ease-in-out duration-300">Start Trading</button>
                    <button className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700">Learn More</button>
                </div>
            </section>
        </>
    );
};

export default IsoCertifiedSection;
