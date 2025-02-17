import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_seven_img from "@/public/images/sec-seven-img.svg"

const HomeSeven = () => {
    return (
        <div className="pt-36 max-sm:pt-6">
            <Container>
                <div>
                    <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-6">OI Bots - AI Trading Powered by Dr. Ernest Chans Strategy</h4>
                    <p className="text-xl font-normal text-white text-center py-2">CCPEX offers three specialized OI Bots trained on Dr. Ernest Chans strategy to maximize <br className="max-sm:hidden" /> trading efficiency and profit potential.</p>
                    <div className="grid grid-cols-3 max-sm:grid-cols-1 px-12 max-sm:px-2">
                        <div className="col-span-2 flex justify-end">
                            <Image src={sec_seven_img} className="w-12/12 h-fit" alt="sec_seven_img"></Image>
                        </div>
                        <div className="col-span-1 h-full">
                            <h5 className="text-xl font-normal text-[#00BAA9] relative right-20 top-20 mt-5 max-sm:static max-sm:text-center max-sm:text-sm">Dr. Chans Trading Strategy :</h5>
                            <h5 className="text-xl font-normal text-white relative top-36 max-sm:static max-sm:text-center max-sm:py-2 max-sm:text-sm">Focuses on statistical arbitrage, mean reversion, and momentum-based trading.</h5>
                            <h5 className="text-xl font-normal text-white relative top-52 max-sm:static max-sm:text-center max-sm:py-2 max-sm:text-sm">Uses advanced machine learning models to identify market inefficiencies and optimize trade execution.</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSeven