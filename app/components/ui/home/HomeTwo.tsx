import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_two_line1 from "@/public/images/sec-two-line1.svg"
import sec_two_line2 from "@/public/images/sec-two-line2.svg"
import sec_two_line3 from "@/public/images/sec-two-line3.svg"
import sec_two_shadow1 from "@/public/images/sec-two-shadow1.svg"
import sec_two_shadow2 from "@/public/images/sec-two-shadow2.svg"
import sec_two_shadow3 from "@/public/images/sec-two-shadow3.svg"
import sec_two_icon1 from "@/public/images/sec-two-icon1.svg"
import sec_two_icon2 from "@/public/images/sec-two-icon2.svg"
import sec_two_icon3 from "@/public/images/sec-two-icon3.svg"


const HomeTwo = () => {
    return (
        <div className="pt-16 pb-32 max-sm:pb-12 max-sm:pt-6" id="features">
            <h2 className="text-3xl font-semibold text-[#00BAA9] text-center pb-28 max-sm:pb-12">Features of CCPEX</h2>
            <Container>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-x-6 gap-y-6 px-12 max-sm:px-4 h-full">
                    <div className="w-full flex flex-col items-center h-full">
                        <Image src={sec_two_line1} className="" alt="sec_two_line1"></Image>
                        <div className="sec-two-card1 w-full rounded-2xl flex flex-col items-center h-full pb-8">
                            <Image src={sec_two_shadow1} className="w-6/12" alt="sec_two_shadow1"></Image>
                            <Image src={sec_two_icon1} className="w-2/12 h-fit relative bottom-8" alt="sec_two_icon1"></Image>
                            <h3 className="text-2xl font-medium text-white text-center max-sm:text-sm">Decentralized and secure <br className="max-sm:hidden" /> trading.</h3>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center h-full">
                        <Image src={sec_two_line2} className="" alt="sec_two_line2"></Image>
                        <div className="sec-two-card2 w-full rounded-2xl flex flex-col items-center h-full pb-8">
                            <Image src={sec_two_shadow2} className="w-6/12" alt="sec_two_shadow2"></Image>
                            <Image src={sec_two_icon2} className="w-2/12 h-fit relative bottom-8" alt="sec_two_icon2"></Image>
                            <h3 className="text-2xl font-medium text-white text-center max-sm:text-sm">Powered by Organized <br className="max-sm:hidden" /> Intelligence.</h3>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center h-full">
                        <Image src={sec_two_line3} className="" alt="sec_two_line3"></Image>
                        <div className="sec-two-card3 w-full rounded-2xl flex flex-col items-center h-full pb-8">
                            <Image src={sec_two_shadow3} className="w-6/12" alt="sec_two_shadow3"></Image>
                            <Image src={sec_two_icon3} className="w-2/12 h-fit relative bottom-8" alt="sec_two_icon3"></Image>
                            <h3 className="text-2xl font-medium text-white text-center max-sm:text-sm">Potential for up to 2% daily <br className="max-sm:hidden" /> profits.</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeTwo