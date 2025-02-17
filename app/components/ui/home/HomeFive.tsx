import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_five_img from "@/public/images/sec-five-img.svg"
import sec_five_icon1 from "@/public/images/sec-five-icon1.svg"
import sec_five_icon2 from "@/public/images/sec-five-icon2.svg"
import sec_five_icon3 from "@/public/images/sec-five-icon3.svg"
import sec5_etherum_icon from "@/public/images/sec5-etherum-icon.svg"

const HomeFive = () => {
    return (
        <div className="max-sm:pt-12 relative">
            <Container>
                <div>
                    <h4 className="text-3xl font-semibold text-[#00BAA9] text-center max-sm:pb-8">About Dr. Ernest Chan</h4>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 pt-20 max-sm:pt-4">
                        <div className="flex justify-center">
                            <Image src={sec_five_img} className="w-11/12 h-fit" alt="sec_five_img"></Image>
                        </div>
                        <div className="flex flex-col gap-y-6 justify-center max-sm:px-2">
                            <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-x-6 max-sm:gap-x-0 max-sm:gap-y-4 items-center w-full">
                                <div className="col-span-2 max-sm:col-span-1 sec-five-icon flex justify-center p-4 max-sm:p-2 w-fit max-sm:rounded-lg">
                                    <Image src={sec_five_icon1} className="w-24 h-fit max-sm:w-12" alt="sec_five_icon1"></Image>
                                </div>
                                <p className="col-span-10 text-lg font-normal text-white max-sm:text-sm"><span className="text-[#2DFFE7]">Dr. Ernest P. Chan</span> is a renowned quantitative trader and author of Quantitative Trading and Algorithmic Trading.</p>
                            </div>
                            <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-x-6 max-sm:gap-x-0 max-sm:gap-y-4 items-center w-full">
                                <div className="col-span-2 max-sm:col-span-1 sec-five-icon flex justify-center p-4 max-sm:p-2 w-fit max-sm:rounded-lg">
                                    <Image src={sec_five_icon2} className="w-24 h-fit max-sm:w-12" alt="sec_five_icon2"></Image>
                                </div>
                                <p className="col-span-10 text-lg font-normal text-white max-sm:text-sm">His expertise lies in developing statistical models to identify market inefficiencies, helping traders achieve consistent profits.</p>
                            </div>
                            <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-x-6 max-sm:gap-x-0 max-sm:gap-y-4 items-center w-full">
                                <div className="col-span-2 max-sm:col-span-1 sec-five-icon flex justify-center p-4 max-sm:p-2 w-fit max-sm:rounded-lg">
                                    <Image src={sec_five_icon3} className="w-24 h-fit max-sm:w-12" alt="sec_five_icon3"></Image>
                                </div>
                                <p className="col-span-10 text-lg font-normal text-white max-sm:text-sm">His innovative strategies form the backbone of CCPEXs Organized Intelligence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex justify-start absolute -top-8 max-sm:static max-sm:hidden">
                <Image src={sec5_etherum_icon} className="w-16 h-fit" alt="sec5_etherum_icon"></Image>
            </div>
        </div>
    )
}

export default HomeFive