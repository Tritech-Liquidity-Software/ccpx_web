import Image from "next/image";
import Container from "../Container";

const IsoCertifiedSection = () => {
    return (
        <>
            <Container>
                <h2 className="text-3xl font-semibold text-[#00BAA9] text-center pb-3 max-sm:pb-0 max-sm:pt-5 pt-10 max-sm:text-xl max-sm:px-4">ISO 42001 Certification - AI Security & Trust</h2>
                <p className="text-lg max-sm:text-sm font-normal text-white text-center pb-10 max-sm:px-4">CCPEX is the worlds first ISO 42001 certified Al-based crypto exchange</p>

                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left Side: ISO Badge */}

                    <div className="relative w-[430px] md:w-[480px] max-sm:hidden">
                        <Image
                            src="/images/iso-badge.png"
                            alt="ISO Certified Badge"
                            width={800}
                            height={500}
                            className="w-full h-auto "
                        />


                    </div>
                    <div className="flex justify-center max-sm:block lg:hidden">
                        <Image
                            src="/images/mobileiso.png"
                            alt="ISO Certified Badge"
                            width={800}
                            height={500}
                            className="w-full h-auto "
                        />
                    </div>

                    {/* Right Side: Content Boxes */}
                    <div className="flex flex-col gap-6 max-sm:pt-8 max-sm:mx-4">
                        {/* Box 1 */}
                        <div className="sec-nine-card p-6 rounded-lg  w-[320px] md:w-[480px] max-sm:w-full">
                            <div className="flex items-center gap-4">
                                <Image src="/images/shield-icon.png" alt="Security Icon" width={40} height={40} />
                                <h3 className="text-[#00BAA9] text-lg font-semibold max-sm:text-base">What is ISO 42001?</h3>
                            </div>
                            <p className="text-gray-300 mt-2 max-sm:text-sm">
                                ISO 42001 is the global standard for Al Management Systems, ensuring Al security, ethical
                                compliance, and trust in Al-driven operations.

                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="sec-nine-card p-6   w-[380px] md:w-[480px] max-sm:w-full">
                            <div className="flex items-center gap-4">
                                <Image src="/images/handshake-icon.png" alt="Trust Icon" width={40} height={40} />
                                <h3 className="text-[#00BAA9] text-lg font-semibold max-sm:text-base">Why Is ISO 42001 Important?</h3>
                            </div>
                            <ul className="list-disc text-gray-300 pl-6 mt-2 space-y-2 text-base max-sm:text-sm">
                                <li >ISO 42001 is the global standard for Al Management Systems, ensuring Al security, ethical
                                    compliance, and trust in Al-driven operations.
                                </li>
                                <li>Ensures transparency, fairness, and compliance in Al trading algorithms.
                                </li>
                                <li>Protects users by following strict guidelines for Al reliability and ethical decision-making.</li>
                                <li>Strengthens trust by proving CCPEXs commitment to secure and responsible Al-powered
                                    trading</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default IsoCertifiedSection;
