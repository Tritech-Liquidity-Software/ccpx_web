import React from "react"
import Image from "next/image"
import Container from "../Container"
import Accordion from "../Accordion"
import sec_ten_icon from "@/public/images/sec-ten-icon.svg"
import sec_ten_icon2 from "@/public/images/sec-ten-icon2.svg"

const HomeTen = () => {
    return (
        <div id="faq">
            <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-0 max-sm:pt-8">Frequently Asked Questions</h4>
            <Container>
                <div className="flex justify-end px-48 max-sm:px-2 relative top-6 max-sm:static max-sm:py-1">
                    <Image src={sec_ten_icon} className="w-12 max-sm:w-8 h-fit" alt="sec_ten_icon"></Image>
                </div>
                <div className="flex flex-col gap-y-4 px-64 max-sm:px-2">
                    <Accordion title="1. What is CCPEX?" content={
                        <div>
                            <p className="text-white">CCPEX is a decentralized crypto trading platform powered by Organized Intelligence, designed for optimized trading and consistent profits.</p>
                        </div>
                    } />
                    <Accordion title="2. How does Organized Intelligence work?" content={
                        <div>
                            <p className="text-white">OI combines real-time data, predictive modeling, and adaptive algorithms to make smarter trading decisions.</p>
                        </div>
                    } />
                    <Accordion title="3. How secure is CCPEX?" content={
                        <div>
                            <p className="text-white">CCPEX is fully decentralized, ensuring complete transparency and security.</p>
                        </div>
                    } />
                    <Accordion title="4. Who can use CCPEX?" content={
                        <div>
                            <p className="text-white">Anyone, including individual investors, professional traders, and financial institutions.</p>
                        </div>
                    } />
                    <Accordion title="5. What is the profit potential with CCPEX?" content={
                        <div>
                            <p className="text-white">Users can generate up to 2% daily profits using CCPEXs advanced trading tools.</p>
                        </div>
                    } />
                    <Accordion title="6. How is Organized Intelligence different from AI?" content={
                        <div>
                            <p className="text-white">Unlike traditional AI, OI is proactive, adaptive, and blends human intuition with machine learning for superior results.</p>
                        </div>
                    } />
                    <Accordion title="7. What makes CCPEX unique?" content={
                        <div>
                            <p className="text-white">CCPEX is the first platform to use Organized Intelligence in decentralized trading, ensuring unmatched accuracy and profitability.</p>
                        </div>
                    } />
                    <Accordion title="8. How do I get started?" content={
                        <div>
                            <p className="text-white">Simply sign up on the platform, connect your wallet, and start trading with CCPEXs user-friendly interface.</p>
                        </div>
                    } />
                </div>
                <div className="flex justify-start px-36 max-sm:px-2 relative bottom-16 max-sm:static max-sm:py-1 -z-[1]">
                    <Image src={sec_ten_icon2} className="w-28 max-sm:w-8 h-fit" alt="sec_ten_icon2"></Image>
                </div>
            </Container>
        </div>
    )
}

export default HomeTen