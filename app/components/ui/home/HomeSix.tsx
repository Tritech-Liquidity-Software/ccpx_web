import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec6_track_img from "@/public/images/sec-six-track-img.svg"
import sec_six_img from "@/public/images/sec-six-img.png"

const HomeSix = () => {
    return (
        <div className="max-sm:pt-12 max-sm:pb-6">
            <h2 className="text-3xl font-semibold text-[#00BAA9] text-center pb-28 max-sm:pb-6">Who This Is For</h2>
            <Container>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 max-sm:gap-y-6 max-sm:px-2">
                    <div className="flex flex-col justify-center items-center max-sm:gap-y-6">
                        <div className="sec-six-card-bg p-4 w-5/12 relative right-4 max-sm:static max-sm:w-full">
                            <h5 className="text-base font-normal text-[#2DFFE7]">Professional Traders</h5>
                            <p className="text-base font-normal text-white">Gain a competitive edge with Organized Intelligence.</p>
                        </div>
                        <Image src={sec6_track_img} className="max-sm:hidden" alt="sec6_track_img"></Image>
                        <div className="flex justify-between max-sm:flex-col gap-y-6">
                            <div className="sec-six-card-bg flex flex-col justify-center p-4 w-5/12 relative left-8 max-sm:static max-sm:w-full">
                                <h5 className="text-base font-normal text-[#2DFFE7]">Individual Investors</h5>
                                <p className="text-base font-normal text-white">Enhance crypto portfolios with advanced tools.</p>
                            </div>
                            <div className="sec-six-card-bg flex flex-col justify-center p-4 w-5/12 relative bottom-5 max-sm:static max-sm:w-full">
                                <h5 className="text-base font-normal text-[#2DFFE7]">Financial Institutions</h5>
                                <p className="text-base font-normal text-white">Integrate decentralized, AI-powered trading solutions for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={sec_six_img} className="w-8/12 h-fit" alt="sec_six_img"></Image>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSix