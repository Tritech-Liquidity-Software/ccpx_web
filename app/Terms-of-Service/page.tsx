import Head from "next/head";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms and Services</title>
                <meta name="description" content="Read our terms and services carefully." />
            </Head>
            <div className="min-h-screen py-12 px-6 md:px-12 mt-[120px] max-sm:mt-[40px]">
                <div className="max-w-4xl mx-auto bg-black/25 rounded-3xl  max-sm:rounded-xl border border-[#d9d9d9]/10 backdrop-blur-2xl p-6">
                    <h1 className="text-3xl font-bold text-[#009e90] mb-6 max-sm:text-2xl text-center">Terms and Services</h1>

                    <h2 className="text-2xl font-semibold text-white mt-6">1. Introduction</h2>
                    <p className="text-white opacity-[.7] mt-1">
                        Welcome to CCPEX. By accessing or using our platform, you agree to follow and be bound by these Terms of Service. If you do not agree to these conditions, please do not use our service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-6">2. Use of Services</h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1">To use our platform, you must be 18 years or older.</li>
                        <li className="text-white opacity-[.7] mt-1">It is your responsibility to keep your account and password confidential.</li>
                        <li className="text-white opacity-[.7] mt-1">Any unauthorized use of your account should be reported to us immediately.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">3. Trading and Financial Risks</h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1">Trading has significant risk, and past performance does not guarantee future results.</li>
                        <li className="text-white opacity-[.7] mt-1">CCPEX assumes no responsibility for any losses or damages incurred as a result of trading operations.</li>
                        <li className="text-white opacity-[.7] mt-1">Users should evaluate their risk tolerance before engaging in trading.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-white mt-6">4. Account Termination</h2>
                    <p className="text-white opacity-[.7] mt-1">
                        We reserve the right to suspend or terminate your account under the conditions listed below.
                    </p>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1 ">Violation of the Terms of Service.</li>
                        <li className="text-white opacity-[.7] mt-1">suspicious or fraudulent activities.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">Noncompliance with the appropriate regulations.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">5. Intellectual Property</h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1 ">We own or have licenses to all of the content, trademarks, and intellectual property on CCPEX.</li>
                        <li className="text-white opacity-[.7] mt-1">Our material may not be reproduced, modified, or distributed without our consent.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">6. Limitation of Liability
                    </h2>
                    <p className="text-white opacity-[.7] mt-1">
                        CCPEX is not liable for any direct, indirect, or consequential losses resulting from the use of our platform.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-6">7. Governing Law  </h2>
                    <p className="text-white opacity-[.7] mt-1">
                        These terms are subject to Dubai, United Arab Emirates (UAE) legislation. Any issues will be addressed through arbitration in Dubai, UAE.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-6">8. Changes to Terms</h2>
                    <p className="text-white opacity-[.7] mt-1">
                        We may alter our Terms of Service from time to time. The continued use of our site signifies acceptance of any modifications.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Terms;
