import React from "react"
import Container from "../Container"
import Image from "next/image"
import table_icon1 from "@/public/images/sec3-table-icon1.svg"
import table_icon2 from "@/public/images/sec3-table-icon2.svg"
import table_icon3 from "@/public/images/sec3-table-icon3.svg"
import sec3_bitcoin_icon from "@/public/images/sec3-bitcoin-icon.svg"

const HomeThree = () => {
    return (
        <div className="pb-28">
            <h2 className="text-3xl font-semibold text-[#00BAA9] text-center max-sm:pb-6 max-sm:text-2xl">Difference Between AI and OI</h2>
            <div className="flex justify-end relative top-5 -z-10 max-sm:static max-sm:hidden">
                <Image src={sec3_bitcoin_icon} className="w-28 h-fit" alt="sec3_bitcoin_icon"></Image>
            </div>
            <Container>
                <div className="px-40 max-lg:px-10 max-sm:px-4">
                    <div className="relative overflow-x-auto">
                        <table className="w-full overflow-hidden border-collapse">
                            <thead className="text-xs text-white uppercase bg-[url('/images/sec3-table-bg.png')] bg-no-repeat bg-[_100%] overflow-hidden">
                                <tr className="divide-x-2 divide-[#99999933] text-lg font-medium border-r-2 border-[#99999933]">
                                    {/* First <th>: Apply rounded top-left corner */}
                                    <th className="px-6 py-4 w-1/3 rounded-tl-xl border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        <div className="flex justify-center items-center gap-x-4">
                                            <Image src={table_icon1} className="" alt="table_icon1"></Image>
                                            <span className="text-sm text-[#00BAA9]">Feature</span>
                                        </div>
                                    </th>

                                    {/* Middle <th>: No border-radius */}
                                    <th className="px-6 py-4 w-1/3 border-t-2 border-[#99999933]">
                                        <div className="flex justify-center items-center gap-x-4">
                                            <Image src={table_icon2} className="" alt="table_icon2"></Image>
                                            <span className="text-sm text-[#00BAA9]">Artificial Intelligence (AI)</span>
                                        </div>
                                    </th>

                                    {/* Last <th>: Apply rounded top-right corner */}
                                    <th className="px-6 py-4 w-1/3 rounded-tr-xl border-t-2 border-r-2 border-[#99999933]">
                                        <div className="flex justify-center items-center gap-x-4">
                                            <Image src={table_icon3} className="" alt="table_icon3"></Image>
                                            <span className="text-sm text-[#00BAA9]">Organized Intelligence (OI)</span>
                                        </div>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Adaptability
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Limited to training data.
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Learns and adapts in real-time
                                    </td>
                                </tr>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Proactivity
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Reacts after events occur.
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Anticipates and plans ahead.
                                    </td>
                                </tr>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Accuracy
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Depends on input data
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Higher due to deeper data analysis.
                                    </td>
                                </tr>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Scalability
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Limited by complexity.
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Easily scalable and modular.
                                    </td>
                                </tr>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Decision-Making
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Pre-programmed responses.
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Structured, strategic decision-making.
                                    </td>
                                </tr>
                                <tr className="sec-three-table-tr text-white text-center divide-x-2 divide-y-2 divide-[#99999933] text-sm border-r-2 border-b-2 border-[#99999933]">
                                    <td className="px-6 py-4 font-medium w-1/3 border-l-2 border-b-2 border-t-2 border-[#99999933]">
                                        Integration
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Works independently.
                                    </td>
                                    <td className="px-6 py-4 w-1/3">
                                        Blends human intuition and machine learning
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeThree