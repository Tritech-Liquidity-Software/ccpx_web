import React from "react"
import Container from "../components/ui/Container"
import Image from "next/image"
import insta_icon from "@/public/images/insta-icon.svg"
import yt_icon from "@/public/images/yt-icon.svg"
import ccpexlogo from "@/public/images/ccpexlogo.png"
import Link from "next/link"


const Footer = () => {

    return (
        <div className="p-6 max-sm:p-3 max-lg:p-1">
            <Container>
                <div className="bg-black/25 rounded-3xl max-sm:rounded-xl border border-[#d9d9d9]/10 backdrop-blur-2xl pt-20 max-lg:pt-10 max-sm:pt-10 px-10 max-sm:px-4 max-w-screen-xl mx-auto">
                    {/* Main Grid */}
                    <div className="grid grid-cols-7  max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-2 gap-x-4 max-sm:gap-x-0 gap-y-3">
                        {/* Logo */}
                        <div className="col-span-1">
                            <Image src={ccpexlogo} className="w-[80px] max-sm:w-[48px] h-fit" alt="ccpexlogo"></Image>
                        </div>

                        {/* Home Link */}
                        <div className="col-span-1 max-sm:col-span-2">
                            <Link href="/">
                                <span className="text-base font-normal text-white">Home</span>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="col-span-3 max-md:col-span-2">
                            <div className="flex max-md:flex-col gap-y-4">
                                <div className="w-6/12 max-md:w-full flex flex-col gap-y-4">
                                    <a href="#howitsworks">
                                        <span className="text-base font-normal text-white">
                                            How it Works
                                        </span>
                                    </a>
                                    <a href="#WhyOI">
                                        <span className="text-base font-normal text-white">Why CCPEX</span>
                                    </a>
                                    <a href="#About">
                                        <span className="text-base font-normal text-white">About</span>
                                    </a>
                                </div>
                                <div className="w-6/12 max-md:w-full">
                                    <a href="/why-click-base/ai-trading-platform-powered-by-oi">
                                        <span className="text-base font-normal text-white">
                                            Why Click Base
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="flex flex-col items-center gap-y-6 pt-12 max-md:pt-6">
                                <span className="text-base text-white text-center">
                                    Connect with us
                                </span>
                                <div className="flex justify-center gap-x-4">
                                    {/* <Image src={fb_icon} className="w-7 h-fit" alt="Facebook" /> */}
                                    <a href="https://www.instagram.com/ccpex.io/" target="_blank">
                                        <Image src={insta_icon} className="w-7 h-fit" alt="Instagram" />
                                    </a>
                                    <a href="https://t.me/+nRpkACYcNHs1ZjI9" target="_blank">
                                        <Image src={yt_icon} className="w-7 h-fit" alt="YouTube" />
                                    </a>

                                    {/* <Image src={x_icon} className="w-7 h-fit" alt="Twitter" /> */}
                                </div>
                            </div>
                        </div>

                        {/* Contact & FAQ */}
                        <div className="col-span-2 flex flex-col gap-y-10">
                            <div className="flex max-md:flex-col gap-y-4">
                                {/* <div className="w-6/12 max-md:w-full">
                                    <span className="text-base font-normal text-white">Contact</span>
                                </div> */}
                                <div className="w-6/12 max-md:w-full">
                                    <a href="/faq-learn-how-AI-trading">                                    <span className="text-base font-normal text-white">FAQ</span>
                                    </a>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="flex flex-col gap-y-4">
                                <span className="text-base max-lg:text-[12px] font-normal text-[#00BAA9]">
                                    Start Your Trade Journey Today
                                </span>
                                <a href="https://oi.ccpex.io/user/register" target="_blank">

                                    <button className="primary-btn py-2.5 px-8 max-lg:px-2 text-white w-full rounded-md bg-[#00BAA9] hover:bg-[#008b84] transition-all">
                                        Join the Revolution today
                                    </button>
                                </a>
                            </div>

                            {/* Newsletter */}
                            <div className="flex flex-col gap-y-4">
                                <span className="text-base font-medium text-[#00BAA9]">
                                    Newsletter
                                </span>
                                <span className="text-base font-normal text-[#C0C0C0]">
                                    Get exclusive deals by signing up to our Newsletter.
                                </span>
                                <input
                                    type="email"
                                    className="bg-[rgba(153,153,153,0.3)] py-3 px-4 border border-[rgba(153,153,153,0.16)] text-white rounded-lg placeholder:text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#00BAA9]"
                                    placeholder="Email"
                                />
                                <button className="py-2.5 px-6 bg-[#00BAA9] text-base text-white hover:bg-transparent border-2 border-[#00BAA9] rounded-md transition-all ease-in-out duration-200">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-0.5 w-full bg-[rgba(255,255,255,0.15)] rounded-md my-6"></div>

                    {/* Footer Bottom Section */}
                    <div className="flex max-sm:flex-col max-sm:gap-y-4 justify-between items-center pb-6">
                        <div className="w-7/12 max-sm:w-full">
                            <p className="text-xs font-normal text-[#C0C0C0] max-sm:text-center">Copyright© 2025 CCPEX, All rights reserved. Powered by CCPEX</p>
                        </div>
                        <div className="flex w-5/12 max-sm:w-full max-sm:justify-between">
                            <a href="/Terms-of-Service" className="text-xs font-normal text-[#C0C0C0] w-4/12 max-sm:w-full">
                                Terms of Service
                            </a>
                            <a href="/Privacy-Policy" className="text-xs font-normal text-[#C0C0C0] w-4/12 max-sm:w-full">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer