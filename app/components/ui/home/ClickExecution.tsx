import React from "react";
import Image from "next/image";
import bitcion from "@/public/images/whyoi.png"


const ClickExecutionToast = () => {
    return (
        <>
            <div className="text-white py-12 px-6 md:px-16 lg:px-32">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-teal-400">
                    Click Execution Toast Message
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
                    {/* Left Section */}
                    <div className="md:w-1/2 text-left">
                        <h3 className="text-lg md:text-xl font-semibold">
                            When a user clicks to execute a trade,
                        </h3>
                        <p className="text-gray-400 mt-2">
                            OI has started analyzing the market! It will scan trends, assess opportunities,
                            and execute the trade at the perfect time. If no profitable entry is found today,
                            your click will be reserved for the next opportunity.
                        </p>
                        <button className="py-2 mt-5 px-6 text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg border-[.8px] border-[rgba(153,153,153,0.5)] backdrop-blur-2xl transition-all ease-in-out duration-300">
                            Start Trading
                        </button>
                    </div>
                    {/* Right Section */}
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { text: "Real-time market analysis by OI", image: "/images/onee.png" },
                            { text: "Trade execution at the best possible time", image: "/images/twoo.png" },
                            { text: "Click rollover for the next profitable opportunity", image: "/images/threee.png" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[linear-gradient(263.3deg,rgba(0,0,0,0.25)_5.82%,rgba(24,116,245,0.13)_97.91%)] rounded-xl p-6 text-center border border-[#ffffff4d]"
                            >
                                <p className="text-[14px]">{item.text}</p>
                                <div className="flex justify-center items-baseline pt-[14px]">
                                    <Image src={item.image} alt="Circle icon" width={100} height={100} className="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <h2 className="text-3xl font-semibold text-[#00BAA9] text-center  max-sm:pb-0 max-sm:pt-5 pt-5 max-sm:text-xl max-sm:px-4 max-sm:mt-[30px]">OI-Powered Bot Plans: The Click-Based Approach</h2>
            <div className="flex justify-center">
                <Image src={bitcion} alt="Circle icon" className="w-fit" />
            </div>
        </>
    );
};

export default ClickExecutionToast;
