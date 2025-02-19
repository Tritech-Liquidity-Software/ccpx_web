import React from "react"
import Container from "../Container"
import Image from "next/image"
import sec_eight_card1 from "@/public/images/sec-eight-card1.png"
import sec_eight_card2 from "@/public/images/sec-eight-card2.png"
import sec_eight_card3 from "@/public/images/sec-eight-card3.png"
import sec8_etherum_icon from "@/public/images/sec-eight-etherum-icon.svg"


const HomeEight = () => {
    return (
        <div className="pt-20">
            <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-6">Our 3 OI Bots</h4>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 lg:px-32">
                    {[sec_eight_card1, sec_eight_card2, sec_eight_card3].map((card, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* Image */}
                            <Image src={card} className="w-full h-auto object-cover" alt={`Card Image ${index + 1}`} />

                            {/* Content Overlay */}
                            <div className="absolute top-[75%] w-full px-6 text-center transform -translate-y-1/2 flex flex-col gap-4 items-center">
                                <h5 className="text-lg md:text-xl font-normal text-[#00BAA9]">{['Stealth Trader', 'Quantum Navigator', 'Infinity Matrix'][index]}</h5>

                                <ul className="space-y-2 text-sm md:text-base text-[#D8D8D8] text-left px-10">
                                    {[
                                        ['Focuses on low-risk', 'Steady growth with safe trade entries', 'Ideal for conservative investors.'],
                                        ['Moderate-risk strategy','High-reward trading', 'Balancing higher profit with managed risks.'],
                                        ['Designed for high-risk', 'High-reward trading', 'Maximizing returns with bolder moves.']
                                    ][index].map((item, i) => (
                                        <li key={i} className="list-disc">{item}</li>
                                    ))}
                                </ul>

                                <p className="text-white text-base">
                                    Earns up to <span className="text-[#00BAA9]">{['0.5%', '1.5%', '2%'][index]}</span> daily profit
                                </p>

                                <p className="text-white text-base">
                                    Minimum investment required: <br className="hidden md:block" />
                                    <span className="text-[#00BAA9]">${['1,000', '5,000', '10,000'][index]}</span>
                                </p>

                                <p className="text-sm text-[#D8D8D8]">Subscribe plan ${['29', '69', '99'][index]}</p>

                                <button className="primary-btn py-2.5 px-6  max-w-xs text-white">Buy</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-16 px-4">
                    <div className="sec-five-icon flex justify-center py-4 px-8 rounded-lg bg-gray-800">
                        <Image src={sec8_etherum_icon} className="w-7" alt="Ethereum Icon" />
                    </div>
                    <p className="text-lg md:text-base text-white text-center md:text-left">
                        Each bot uses different trading algorithms fine-tuned for specific risk levels and profitability.
                    </p>
                </div>
            </Container>

        </div>
    )
}

export default HomeEight