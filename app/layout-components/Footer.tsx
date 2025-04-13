import React from "react";
import Container from "../components/ui/Container";
import Image from "next/image";
import insta_icon from "@/public/images/insta-icon.svg";
import ccpexlogo from "@/public/images/ccpexlogo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="p-6 max-sm:p-3">
            <Container>
                <div className="bg-black/25 rounded-3xl border border-[#d9d9d9]/10 backdrop-blur-2xl px-10 pt-20 max-xl:pt-12 max-sm:pt-10 max-sm:px-4 max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-12 gap-8 max-lg:gap-6 max-md:grid-cols-6 max-sm:grid-cols-1">

                        {/* Logo and Description */}
                        <div className="col-span-3 max-md:col-span-6 max-sm:col-span-1 flex flex-col gap-4">
                            <Image src={ccpexlogo} className="w-[80px] max-sm:w-[60px] h-auto" alt="ccpexlogo" />
                        </div>

                        {/* Navigation Links */}
                        <div className="col-span-2 max-md:col-span-3 max-sm:col-span-1 flex flex-col gap-3">
                            <Link href="/" className="text-base text-white">Home</Link>
                            <a href="#howitsworks" className="text-base text-white">How it Works</a>
                            <a href="#WhyOI" className="text-base text-white">Why CCPEX</a>
                            <a href="#About" className="text-base text-white">About</a>
                        </div>

                        {/* Why Click Base & Social */}
                        <div className="col-span-3 max-md:col-span-3 max-sm:col-span-1 flex flex-col gap-6 items-start  text-left max-sm:text-center">
                            <a href="/why-click-base/ai-trading-platform-powered-by-oi" className="text-base text-white">
                                Why Click Base
                            </a>
                            <a href="/Community" className="text-base text-white">
                                Community
                            </a>

                        </div>

                        {/* CTA + Newsletter */}
                        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-1 flex flex-col gap-8">
                            <div>
                                <a href="/faq-learn-how-AI-trading" className="text-base text-white">FAQ</a>
                            </div>

                            <div className="flex flex-col gap-3">
                                <span className="text-base text-[#00BAA9] font-medium">
                                    Start Your Trade Journey Today
                                </span>
                                <a href="https://oi.ccpex.io/user/register" target="_blank" rel="noopener noreferrer">
                                    <button className="primary-btn py-2.5 px-6 text-white w-full rounded-md bg-[#00BAA9] hover:bg-[#008b84] transition-all">
                                        Join the Revolution today
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="grid grid-cols-12 gap-8 max-md:grid-cols-1 mt-8">
                        <div className="flex flex-col gap-3 col-span-8 max-sm:col-span-12">
                            <p className="text-white opacity-50 text-sm leading-relaxed">
                                Whether you’re in Asia, Europe, or the Americas, CCPEX-AI offers seamless mobile-based access to the crypto market. With 24/7 automated data monitoring and decision-making, users can enjoy high-efficiency, consistent profits without the need for manual oversight.
                            </p>
                            <blockquote className="italic text-[#00BAA9] text-base font-semibold">
                                “CCPEX-0I: Where smart technology meets reliable financial growth.”
                            </blockquote>

                            <div className="flex flex-col gap-3">
                                <span className="text-base text-white">Connect with us</span>
                                <div className="flex gap-4 justify-start max-sm:justify-center">
                                    <a href="https://www.instagram.com/ccpex.io/" target="_blank" rel="noopener noreferrer">
                                        <Image src={insta_icon} className="w-7 h-auto" alt="Instagram" />
                                    </a>
                                    <a href="https://t.me/+nRpkACYcNHs1ZjI9" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            className="w-7 h-7"
                                        >
                                            <path d="M9.036 16.875c-.37 0-.306-.14-.434-.495L7.25 12.312l10.625-6.25" fill="none" />
                                            <path d="M8.25 14.625l1.75 5.25c.2.6.875.75 1.375.25l2.625-2.375 4.625 3.375c.425.3 1.05.1 1.225-.4l3.75-13.25c.175-.6-.35-1.175-.95-1.025l-22 5.75c-.6.15-.675 1.025.05 1.2l5.25 1.25z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 col-span-4 max-sm:col-span-12">
                            <span className="text-base font-medium text-[#00BAA9]">Newsletter</span>
                            <span className="text-sm text-[#C0C0C0]">
                                Get exclusive deals by signing up to our Newsletter.
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-white/10 text-white placeholder:text-white max-sm:w-full border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00BAA9] backdrop-blur"
                            />
                            <button className="py-2.5 px-6 bg-[#00BAA9] text-white max-sm:w-full hover:bg-transparent border-2 border-[#00BAA9] rounded-md transition">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-white/20 my-8 rounded-full" />

                    {/* Bottom Bar */}
                    <div className="flex justify-between items-center flex-wrap gap-3 pb-6 text-xs text-[#C0C0C0] max-sm:flex-col text-center">
                        <p className="w-full sm:w-auto">
                            © 2025 CCPEX. All rights reserved. Powered by CCPEX.
                        </p>
                        <div className="flex gap-6 justify-center sm:justify-end flex-wrap">
                            <a href="/Terms-of-Service">Terms of Service</a>
                            <a href="/Privacy-Policy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
