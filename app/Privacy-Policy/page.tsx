import Head from "next/head";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Read our terms and services carefully." />
            </Head>

            <div className="min-h-screen py-12 px-6 md:px-12 mt-[120px] max-sm:mt-[40px]">
                <div className="max-w-4xl mx-auto bg-black/25 rounded-3xl  max-sm:rounded-xl border border-[#d9d9d9]/10 backdrop-blur-2xl p-6">
                    <h1 className="text-3xl font-bold text-[#009e90] mb-6 max-sm:text-2xl text-center">Privacy Policy
                    </h1>

                    <h2 className="text-2xl font-semibold text-white mt-6">1. Introduction</h2>
                    <p className="text-white opacity-[.7] mt-1">
                        Your privacy is important to us. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use CCPEX.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-6">2. Information We Collect
                    </h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1">Personal information includes your name, email address, contact information, payment details, and identity documents.</li>
                        <li className="text-white opacity-[.7] mt-1">Non-personal information includes browser type, IP address, device details, and usage data.</li>
                        <li className="text-white opacity-[.7] mt-1">We use cookies to improve the user experience and monitor site performance.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">3. How We Use Your Information
                    </h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1">Create and manage your account.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">Process transactions and payments.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">Enhance platform performance and user experience.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">To meet legal and regulatory obligations.

                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-white mt-6">4. How We Share Your Information
                    </h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1 ">With service providers that help with platform operations.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">With regulatory agencies, as required by law.

                        </li>
                        <li className="text-white opacity-[.7] mt-1">with partners for advertising and marketing (but only if you agree).
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">5. Data Security
                    </h2>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1 ">We use security measures to safeguard your information.</li>
                        <li className="text-white opacity-[.7] mt-1">whereas no online platform can ensure complete security.

                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">6. Your Rights </h2>

                    <p className="text-white opacity-[.7] mt-1">
                        You possess the right to.
                    </p>
                    <ul>
                        <li className="text-white opacity-[.7] mt-1 ">You can access, change, or delete your personal information.
                        </li>
                        <li className="text-white opacity-[.7] mt-1">Withdraw your permission for marketing communications.

                        </li>
                        <li className="text-white opacity-[.7] mt-1">Request a copy of the information we have about you.    </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-6">7. Data Retention
                    </h2>
                    <p className="text-white opacity-[.7] mt-1">
                        We keep your information for as long as required to meet our contractual and legal responsibilities.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-6">8. Changes to Privacy Policy
                    </h2>
                    <p className="text-white opacity-[.7] mt-1">
                        This policy may be updated from time to time. Any updates will be reflected on this page.

                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-6">9. Contact Us

                    </h2>
                    <p className="text-white opacity-[.7] mt-1">
                    If you have any issues about our terms of service or privacy policy, please contact us at:
                    <a href="mailto:noreply@ccpex.io" className="font-bold text-[#009e90]">📧 noreply@ccpex.io</a>

                    </p>
                </div>
            </div>
        </>
    );
};

export default Terms;
