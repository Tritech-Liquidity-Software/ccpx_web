import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_nine_img from "@/public/images/sec-nine-img.svg"
import sec_nine_icon1 from "@/public/images/sec-nine-icon1.svg"
import sec_nine_icon2 from "@/public/images/sec-nine-icon2.svg"
import sec_nine_icon3 from "@/public/images/sec-nine-icon3.svg"
import sec_nine_icon4 from "@/public/images/sec-nine-icon4.svg"

const HomeNine = () => {
    return (
        <div className="pt-32 max-sm:pt-6" id="why-ccpex">
            <h2 className="text-3xl max-sm:text-xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-6">Refer Your friend & Get Rewarded</h2>
            <Container>
                <div className="flex flex-col items-center px-20 max-sm:px-2 max-sm:gap-y-6">
                    <div className="flex justify-between relative top-20 px-48 w-full max-sm:static max-sm:flex-col gap-y-4 max-sm:px-2 max-sm:w-full">
                        <div className="sec-nine-card p-4 flex justify-start gap-x-4 items-center w-60 max-sm:w-full">
                            <Image src={sec_nine_icon1} className="" alt="sec_nine_icon1"></Image>
                            <p className="text-sm font-normal text-white">Start earning by simply referring clients to CCPEX.</p>
                        </div>
                        <div className="sec-nine-card p-4 flex justify-start gap-x-4 items-center w-60 max-sm:w-full">
                            <Image src={sec_nine_icon2} className="" alt="sec_nine_icon2"></Image>
                            <p className="text-sm font-normal text-white">Earn 10% of the referred clients profit</p>
                        </div>
                    </div>
                    <Image src={sec_nine_img} className="w-6/12 h-fit max-sm:w-fit max-sm:px-6" alt="sec_nine_img"></Image>
                    <div className="flex justify-between relative bottom-[19rem] px-48 w-full max-sm:static max-sm:flex-col gap-y-4 max-sm:px-2 max-sm:w-full">
                        <div className="sec-nine-card px-4 py-1 flex justify-start gap-x-4 items-center w-60 max-sm:w-full">
                            <Image src={sec_nine_icon3} className="" alt="sec_nine_icon3"></Image>
                            <p className="text-sm font-normal text-white">No hidden conditions - straight and simple referral rewards.</p>
                        </div>
                        <div className="sec-nine-card px-4 py-1 flex justify-start gap-x-4 items-center w-60 max-sm:w-full">
                            <Image src={sec_nine_icon4} className="" alt="sec_nine_icon4"></Image>
                            <p className="text-sm font-normal text-white">The more clients you refer, the more you earn.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeNine