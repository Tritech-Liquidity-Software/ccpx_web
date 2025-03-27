import Image from 'next/image';


export default function CCPEXSection() {
    return (
        <>
            <div className="bg-[url('/images/hero-one-bg.png')] bg-[_100%]  bg-no-repeat max-sm:bg-contain pt-24" id="AI-trading-solution-home">

                <section className="relative text-white  px-6 md:px-12">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className=" text-4xl leading-[48px] max-sm:text-2xl text-[#00BAA9] font-semibold">
                            CCPEX is a Community-Driven Project
                        </h1>
                        <p className="text-lg font-normal text-white py-6 max-sm:text-sm ">
                            At CCPEX, we believe that community is not just part of the ecosystem—it is the ecosystem.
                            In a time when trading platforms are becoming more automated and disconnected, CCPEX stays human at its core.
                            Organized Intelligence (OI) may power the trades, but the people power the movement.
                        </p>
                        <p className="mt-4 text-lg font-normal text-white py-6 max-sm:text-sm ">
                            We’re not just building a platform—we’re co-creating a decentralized financial revolution where every user plays
                            a vital role in growth, governance, and success.
                        </p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Image
                            src="/images/team-cuate.svg"
                            alt="Community Driven Project"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </section>
            </div>
            <div>
                <h2 className=" text-4xl leading-[48px] max-sm:text-2xl text-[#00BAA9] font-semibold text-center mt-10  ">Revenue Redistribution for a Stronger Community
                </h2>
                <p className="text-lg font-normal text-white py-6 max-sm:text-sm mt-2 text-center px-20 max-sm:px-4">To ensure our community thrives, we reinvest a significant share of OI bot profits directly into community development.
                    That means the success of our technology translates into real-world rewards, growth incentives, and life-changing opportunities for YOU.
                </p>
            </div>
            <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:px-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl max-sm:text-base font-bold text-[#00BAA9]">💸 Reward Programs</h3>
                        <p className="text-gray-300 mt-2 max-sm:text-xs">Top contributors are recognized and rewarded for their efforts.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl max-sm:text-base font-bold text-[#00BAA9]">🌍 Exclusive Trips & Experiences</h3>
                        <p className="text-gray-300 mt-2 max-sm:text-xs">Top performers get access to unique global experiences.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl max-sm:text-base font-bold text-[#00BAA9]">📢 Community Grants</h3>
                        <p className="text-gray-300 mt-2 max-sm:text-xs">Supporting events, education, and outreach for community growth.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl max-sm:text-base font-bold text-[#00BAA9]">🛠 Platform Enhancements</h3>
                        <p className="text-gray-300 mt-2 max-sm:text-xs">Driven by valuable feedback from our community members.</p>
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <Image
                        src="/images/Teamwork-amico.svg"
                        alt="Revenue Redistribution"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="mt-20 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00BAA9]">
                    Revenue Sharing Model – Plan Wise Breakdown
                </h2>
                <div className="mt-8 overflow-x-auto mx-52 max-sm:mx-4">
                    <table className="w-full text-left border border-gray-700 rounded-lg overflow-hidden ">
                        <thead>
                            <tr className="bg-[#00BAA9] text-white text-center">
                                <th className="py-3 px-6">Plan</th>
                                <th className="py-3 px-6">User Share</th>
                                <th className="py-3 px-6">OI Bot Share </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { plan: "Stealth", userShare: "50%", botShare: "50%" },
                                { plan: "Quantum", userShare: "60%", botShare: "40%" },
                                { plan: "Infinity", userShare: "75%", botShare: "25%" },
                            ].map((row, index) => (
                                <tr  key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                                    <td className="py-4 px-6 border-b border-gray-600 text-center text-white opacity-[.5]">{row.plan}</td>
                                    <td className="py-4 px-6 border-b border-gray-600 text-center text-white opacity-[.5]">{row.userShare}</td>
                                    <td className="py-4 px-6 border-b border-gray-600 text-center text-white opacity-[.5]">{row.botShare}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-6 text-lg text-gray-300">
                    The higher your plan, the higher your personal returns, while still contributing to a collective mission.
                </p>
                <h3 className="mt-10 text-2xl font-bold text-[#00BAA9]">
                    👥 Fueling the Future with Every Click
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                    With every click, trade, and success story, CCPEX grows stronger—not just as a platform, but as a movement.
                    We believe in shared success, collective rewards, and in giving back to the people who make this platform possible: YOU.
                </p>
                <button className="mt-8 bg-[#00BAA9] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#008F88] transition">
                    🫱 Join the CCPEX Community
                </button>
            </div>


        </>
    );
}
