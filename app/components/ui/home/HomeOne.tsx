import React from "react"
import Image from "next/image"
import hero_one_gif from "@/public/images/hero-one.gif"
import hero_one_lines from "@/public/images/hero-lines-img.svg"
import Container from "../Container"

const HomeOne = () => {
    return (
        <div className="bg-[url('/images/hero-one-bg.png')] bg-[_100%] bg-top bg-no-repeat max-sm:bg-contain pt-24" id="home">
            <Container>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 items-center px-10 max-sm:px-6">
                    <div>
                        <h1 className="text-4xl leading-[48px] max-sm:text-2xl font-semibold text-white">Welcome to CCPEX - The Worlds First AI-Based Trading Tool Revolutionized by Organized Intelligence.</h1>
                        <p className="text-lg font-normal text-white py-6 max-sm:text-sm ">Generate up to 2% daily profits with advanced Organized Intelligence built on Dr. Ernest Chans principles.</p>
                        <div className="flex justify-start gap-x-2 max-sm:flex-col max-sm:gap-y-4">
                            <button className="primary-btn py-2.5 px-8 text-white">Start Trading</button>
                            <button className="bg-transparent border border-[rgba(153,153,153,0.8)] rounded-lg py-2.5 px-8 text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center relative">
                        <Image src={hero_one_gif} className="w-12/12 h-fit" alt="hero_one_gif" priority unoptimized></Image>
                        <Image src={hero_one_lines} className="absolute bottom-[17rem] max-sm:bottom-32 h-3/4 w-fit" alt="hero_one_lines"></Image>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeOne