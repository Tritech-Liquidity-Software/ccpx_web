import React from "react"
import Container from "../Container"
import Image from "next/image"
import bitcoin_low_op_icon from "@/public/images/bitcoin-low-opacity-icon2.svg"
import bitcoin_icon from "@/public/images/sec11-bitcoin-icon.svg"
import etherum_icon from "@/public/images/sec11-etherum-icon.svg"
import lt_icon from "@/public/images/sec11-lt-icon.svg"

const HomeEleven = () => {
    return (
        <div>
            <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-6 max-sm:pb-0 max-sm:pt-8">Testimonials</h4>
            <p className="text-xl font-normal text-white text-center py-2 max-sm:text-sm">Discover what our satisfied customers have to say about their experiences with our products/services.</p>
            <Container>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-x-6 max-sm:gap-y-6 px-6 py-16 max-sm:pt-6">
                    <div className="sec-eleven-card-one py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
                        <div className="flex justify-start items-center gap-x-4">
                            <Image src={bitcoin_icon} className="w-12 h-fit" alt="bitcoin_icon" />
                            <div className="flex flex-col justify-between">
                                <h6 className="text-lg font-medium text-[#00BAA9]">traderxyz001</h6>
                                <p className="text-lg font-normal text-white">Trader and tutor</p>
                            </div>
                        </div>
                        <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
                            Trading has been a game-changer for me! When I first started, I was hesitant and unsure, but with the right strategy and patience, I’ve seen incredible growth’’ with <span className="text-[#00BAA9]">50%</span> outcome.
                        </p>
                        <Image
                            src={bitcoin_low_op_icon}
                            className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
                            alt="bitcoin_low_op_icon"
                        />
                    </div>
                    <div className="sec-eleven-card-two py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
                        <div className="flex justify-start items-center gap-x-4">
                            <Image src={etherum_icon} className="w-12 h-fit" alt="etherum_icon" />
                            <div className="flex flex-col justify-between">
                                <h6 className="text-lg font-medium text-[#00BAA9]">Jammytrade18</h6>
                                <p className="text-lg font-normal text-white max-sm:text-sm">Trader and tutor</p>
                            </div>
                        </div>
                        <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
                            Trading has been a game-changer for me! When I first started, I was hesitant and unsure, but with the right strategy and patience, I’ve seen incredible growth’’ with <span className="text-[#00BAA9]">50%</span> outcome.
                        </p>
                        <Image
                            src={bitcoin_low_op_icon}
                            className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
                            alt="bitcoin_low_op_icon"
                        />
                    </div>
                    <div className="sec-eleven-card-three py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
                        <div className="flex justify-start items-center gap-x-4">
                            <Image src={lt_icon} className="w-12 h-fit" alt="lt_icon" />
                            <div className="flex flex-col justify-between">
                                <h6 className="text-lg font-medium text-[#00BAA9]">tradelooper99</h6>
                                <p className="text-lg font-normal text-white max-sm:text-sm">Trader and tutor</p>
                            </div>
                        </div>
                        <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
                            Trading has been a game-changer for me! When I first started, I was hesitant and unsure, but with the right strategy and patience, I’ve seen incredible growth’’ with <span className="text-[#00BAA9]">50%</span> outcome.
                        </p>
                        <Image
                            src={bitcoin_low_op_icon}
                            className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
                            alt="bitcoin_low_op_icon"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeEleven