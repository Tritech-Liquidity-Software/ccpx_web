import React from "react"
import Image from "next/image"
import dashboardoi from "@/public/images/dashboardoi.png"
import Developersystemn from "@/public/images/Developersystemn.png"
import businessgr from "@/public/images/businessgr.png"

const HomeEleven = () => {
    return (
        // <div>
        //     <h3  className="text-3xl font-semibold text-[#00BAA9] text-center pb-6 max-sm:pb-0 max-sm:pt-8 max-sm:text-2xl">Testimonials</h3>
        //     <p className="text-xl font-normal text-white text-center py-2 max-sm:text-sm">Discover what our satisfied customers have to say about their experiences with our products/services.</p>
        //     <Container>
        //         <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1 gap-x-6 max-sm:gap-y-6 px-6 py-16 max-sm:pt-6">
        //             <div className="sec-eleven-card-one py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
        //                 <div className="flex justify-start items-center gap-x-4">
        //                     <Image src={bitcoin_icon} className="w-12 h-fit" alt="bitcoin_icon" />
        //                     <div className="flex flex-col justify-between">
        //                         <h6 className="text-lg font-medium text-[#00BAA9]">CryptoMaverick99</h6>
        //                         <p className="text-base font-normal text-white">Professional Forex & Crypto Trader | Mentor</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
        //                     My trading journey started with uncertainty, but I stayed committed to learning and refining my strategy. Now, I navigate the markets with confidence, consistently achieving a 50% return. Trading isn’t just about numbers; it’s about mindset, patience, and execution!
        //                 </p>
        //                 <Image
        //                     src={bitcoin_low_op_icon}
        //                     className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
        //                     alt="bitcoin_low_op_icon"
        //                 />
        //             </div>
        //             <div className="sec-eleven-card-two py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
        //                 <div className="flex justify-start items-center gap-x-4">
        //                     <Image src={etherum_icon} className="w-12 h-fit" alt="etherum_icon" />
        //                     <div className="flex flex-col justify-between">
        //                         <h6 className="text-lg font-medium text-[#00BAA9]">TradeMasterLeo</h6>
        //                         <p className="text-base font-normal text-white max-sm:text-sm">Seasoned Trader <br /> Trading Coach</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
        //                     Trading transformed my financial outlook! From being a beginner filled with doubts to mastering my own strategy, I ve witnessed a consistent 50% outcome. The key? Discipline, risk management, and a deep understanding of market movements.
        //                 </p>
        //                 <Image
        //                     src={bitcoin_low_op_icon}
        //                     className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
        //                     alt="bitcoin_low_op_icon"
        //                 />
        //             </div>
        //             <div className="sec-eleven-card-three py-10 px-8 flex flex-col justify-center gap-y-6 relative overflow-hidden">
        //                 <div className="flex justify-start items-center gap-x-4">
        //                     <Image src={lt_icon} className="w-12 h-fit" alt="lt_icon" />
        //                     <div className="flex flex-col justify-between">
        //                         <h6 className="text-lg font-medium text-[#00BAA9]">FXStrategistPro
        //                         </h6>
        //                         <p className="text-base font-normal text-white max-sm:text-sm">Full-Time Trader | Educator | Market Analyst</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-base font-normal text-[#BDB9B9] max-sm:text-sm">
        //                     Success in trading comes from persistence. I remember my early days—full of hesitation and challenges. But by sticking to my strategy and analyzing market trends, I’ve turned those struggles into steady profits. A 50% return is just the beginning!
        //                 </p>
        //                 <Image
        //                     src={bitcoin_low_op_icon}
        //                     className="w-6/12 sm:w-4/12 md:w-6/12 h-fit absolute -top-8 left-[14rem] max-sm:left-48"
        //                     alt="bitcoin_low_op_icon"
        //                 />
        //             </div>
        //         </div>
        //     </Container>
        // </div>

        <section className="relative  text-white px-6 py-20 md:px-28 overflow-hidden">
            {/* Decorative background lines or texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image src="/images/grid-bg.svg" alt="bg" fill style={{ objectFit: 'cover' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#00BAA9]  max-sm:text-base">
                        What is CCPEX?
                    </h2>
                    <h4 className="text-lg  font-medium tracking-tight text-white opacity-[.5]">
                        CCPEX: Redefining Intelligent Crypto Trading
                    </h4>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                </div>

                {/* Section 1 */}
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    <div className="space-y-6 text-base leading-relaxed  font-normal text-white">
                        <p>
                            CCPEX is a cutting-edge technology company focused on intelligent trading systems and blockchain solutions. In an industry marked by volatility, the cryptocurrency market benefits immensely from the core principles of blockchain—decentralization and immutability. These features foster a more transparent and open trading environment, minimizing the risk of market manipulation and offering stronger financial security for investors.
                        </p>
                        <p>
                            At the heart of CCPEX is CCPEX-OI, a smart trading system that empowers users to grow their wealth steadily through automated, data-driven strategies. Each transaction not only benefits the user but also contributes to the CCPEX ecosystem, creating a mutually rewarding financial cycle. CCPEX-OI is particularly recognized for its advanced technical analysis software and electronic trading platforms, tailored for both active individual traders and institutional participants.
                        </p>
                    </div>
                    <Image
                        src={dashboardoi}
                        alt="OI Dashboard"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-2xl"
                    />
                </div>

                {/* Section 2 */}
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    <Image
                        src={Developersystemn}
                        alt="System Process"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-2xl"
                    />
                    <div className="space-y-4 text-lg leading-relaxed">
                        <h3 className="text-xl font-bold text-[#00BAA9]">How It Works:</h3>
                        <p>
                            Once users deposit funds into their accounts, the system automatically allocates the amount into a pooled investment fund. As users participate in trading activities, CCPEX-OI quantifies and distributes earnings based on each completed transaction, ensuring precise and transparent returns.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    <div className="space-y-4 text-lg leading-relaxed">
                        <h3 className="text-xl font-bold text-[#00BAA9]">Global Expansion and Partnerships:</h3>
                        <p>
                            Since officially entering international markets in 2025, CCPEX has remained committed to building an intelligent, quantitative trading platform. The platform has established long-term strategic partnerships with leading global cryptocurrency exchanges, including BINANCE, COINBASE, HUOBI, OKX, BYBIT, COINCHECK, BITSTAMP, MEXC, LBANK, PHEMEX, and KUCOIN.
                        </p>
                    </div>
                    <Image
                        src={businessgr}
                        alt="Exchange Partners"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-2xl"
                    />
                </div>

                {/* Outro */}
                {/* <div className="text-lg leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
                    <p>
                        Whether you’re in Asia, Europe, or the Americas, CCPEX-AI offers seamless mobile-based access to the crypto market. With 24/7 automated data monitoring and decision-making, users can enjoy high-efficiency, consistent profits without the need for manual oversight.
                    </p>
                    <blockquote className="italic text-[#00BAA9] text-xl font-semibold mt-4">
                        “CCPEX-0I: Where smart technology meets reliable financial growth.”
                    </blockquote>
                </div> */}
            </div>
        </section>

    )
}

export default HomeEleven