import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_four_img from "@/public/images/sec-four-img.svg"
import sec_four_icon1 from "@/public/images/sec-four-icon1.svg"
import sec_four_icon2 from "@/public/images/sec-four-icon2.svg"
import sec_four_icon3 from "@/public/images/sec-four-icon3.svg"
import sec_four_shadow from "@/public/images/sec-four-shadow.svg"

const HomeFour = () => {
    return (
        <div className="relative" id="WhyOI">
            <Container>
                <div>
                    <h4 className="text-3xl font-semibold text-[#00BAA9] text-center max-sm:py-20">Why Organized Intelligence?</h4>
                    <div className="flex justify-between max-sm:flex-col gap-x-4 max-sm:gap-y-6 max-sm:px-2">
                        <div className="sec-four-card-bg py-3 px-4 flex items-center gap-x-6 max-sm:gap-x-4 w-4/12 relative top-32 left-20 max-sm:static max-sm:w-full">
                            <Image src={sec_four_icon1} className="w-20 h-fit" alt="sec_four_icon1"></Image>
                            <p className="text-lg max-sm:text-sm font-normal text-white ">Organized Intelligence outperforms AI by combining real-time data, predictive analytics, and dynamic adaptability.</p>
                        </div>
                        <div className="sec-four-card-bg py-3 px-4 flex items-center gap-x-6 max-sm:gap-x-4 w-4/12 relative top-16 max-sm:static max-sm:w-full">
                            <Image src={sec_four_icon2} className="w-20 h-fit" alt="sec_four_icon2"></Image>
                            <p className="text-lg max-sm:text-sm font-normal text-white">It ensures higher accuracy, proactive strategies, and seamless integration of human expertise with machine learning.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={sec_four_img} className="w-6/12 h-fit relative right-16 max-sm:static max-sm:hidden" alt="sec_four_img"></Image>
                    </div>
                    <div className="flex justify-end px-6 max-sm:px-2 max-sm:pt-6">
                        <div className="sec-four-card-bg py-3 px-4 flex items-center gap-x-6 max-sm:gap-x-4 w-4/12 relative bottom-24 right-10 max-sm:static max-sm:w-full">
                            <Image src={sec_four_icon3} className="w-20 h-fit" alt="sec_four_icon3"></Image>
                            <p className="text-lg max-sm:text-sm font-normal text-white">Ideal for complex trading environments like crypto, where precision and speed are crucial.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Image src={sec_four_shadow} className="absolute -top-80 max-sm:h-3/4 max-sm:-top-40 max-sm:-left-16" alt="sec_four_shadow"></Image>
        </div>
    )
}

export default HomeFour