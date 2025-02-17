import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_eight_card1 from "@/public/images/sec-eight-card1.svg"
import sec_eight_card2 from "@/public/images/sec-eight-card2.svg"
import sec_eight_card3 from "@/public/images/sec-eight-card3.svg"
import sec8_etherum_icon from "@/public/images/sec-eight-etherum-icon.svg"


const HomeEight = () => {
    return (
        <div className="pt-20">
            <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-6">Our 3 OI Bots :</h4>
            <Container>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-x-6 px-32 max-sm:px-2">
                    <div className="flex flex-col items-center relative">
                        {/* Image */}
                        <Image
                            src={sec_eight_card1}
                            className="w-full h-fit"
                            alt="Stealth Trader Card Image"
                        />

                        {/* Content Overlay */}
                        <div className="flex flex-col gap-y-4 items-center mt-6 absolute top-3/4 transform -translate-y-1/2">
                            <h5 className="text-lg max-sm:text-base font-normal text-[#00BAA9] text-center">Stealth Trader</h5>
                            <p className="text-lg max-sm:text-sm font-normal text-white text-center">
                                Earns up to <span className="text-[#00BAA9]">0.5%</span> daily profit
                            </p>
                            <p className="text-lg max-sm:text-base font-normal text-white text-center">
                                Minimum investment required: <br className="max-sm:hidden" />
                                <span className="text-[#00BAA9]">$1,000</span>
                            </p>
                            <button
                                className="primary-btn py-2.5 px-8 w-fit text-white"
                                aria-label="Choose the $29 Plan"
                            >
                                $29 Plan
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center relative">
                        {/* Image */}
                        <Image
                            src={sec_eight_card2}
                            className="w-full h-fit"
                            alt="Quantum Navigator Card Image"
                        />

                        {/* Content Overlay */}
                        <div className="flex flex-col gap-y-4 items-center mt-6 absolute top-3/4 transform -translate-y-1/2">
                            <h5 className="text-lg max-sm:text-base font-normal text-[#00BAA9] text-center">Quantum Navigator</h5>
                            <p className="text-lg max-sm:text-base font-normal text-white text-center">
                                Earns up to <span className="text-[#00BAA9]">1.5%</span> daily profit
                            </p>
                            <p className="text-lg max-sm:text-base font-normal text-white text-center">
                                Minimum investment required: <br className="max-sm:hidden" />
                                <span className="text-[#00BAA9]">$5,000</span>
                            </p>
                            <button
                                className="primary-btn py-2.5 px-8 w-fit text-white"
                                aria-label="Choose the $29 Plan"
                            >
                                $69 Plan
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center relative">
                        {/* Image */}
                        <Image
                            src={sec_eight_card3}
                            className="w-full h-fit"
                            alt="Infinity Matrix Card Image"
                        />

                        {/* Content Overlay */}
                        <div className="flex flex-col gap-y-4 items-center mt-6 absolute top-3/4 transform -translate-y-1/2">
                            <h5 className="text-lg max-sm:text-base font-normal text-[#00BAA9] text-center">Infinity Matrix</h5>
                            <p className="text-lg max-sm:text-base font-normal text-white text-center">
                                Earns up to <span className="text-[#00BAA9]">2%</span> daily profit
                            </p>
                            <p className="text-lg max-sm:text-base font-normal text-white text-center">
                                Minimum investment required: <br className="max-sm:hidden" />
                                <span className="text-[#00BAA9]">$10,000</span>
                            </p>
                            <button
                                className="primary-btn py-2.5 px-8 w-fit text-white"
                                aria-label="Choose the $29 Plan"
                            >
                                $99 Plan
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-x-4 items-center mt-20 max-sm:mt-6 max-sm:px-4">
                    <div className="sec-five-icon flex justify-center py-4 px-8 w-fit max-sm:py-3 max-sm:px-6 max-sm:rounded-lg">
                        <Image src={sec8_etherum_icon} className="w-7 h-fit" alt="sec8_etherum_icon"></Image>
                    </div>
                    <p className="text-lg max-sm:text-base font-normal text-white">Each bot uses different trading algorithms fine-tuned for specific risk levels and profitability.</p>
                </div>
            </Container>
        </div>
    )
}

export default HomeEight