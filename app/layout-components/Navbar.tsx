"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import ContactPopup from "../ContactPopup";
import Image from "next/image"
import ccpexlogo from "@/public/images/ccpexlogo.png"

const Navbar = () => {
    const navigation = [
        { title: "Home", href: { pathname: "home", query: "" } },
        { title: "Why OI", href: { pathname: "WhyOI", query: "" } },
        { title: "How it Works", href: { pathname: "howitsworks", query: "" } },
        { title: "About", href: { pathname: "About", query: "" } },
        { title: "Why Click Base", href: { pathname: "/why-click-base", query: "" } },
        { title: "FAQ", href: { pathname: "/faq", query: "" } },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    // const pathname = usePathname(); // current page path

    // Scroll effect for sticky header
    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    // ScrollSpy effect for sections on the same page
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        window.addEventListener("scroll", scrollHeader);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", scrollHeader);
        };
    }, []);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    // Helper to determine link destination.
    // If the pathname starts with "/" it is considered a full page route;
    // otherwise, it is a section ID for scroll navigation.
    const getLinkHref = (menuPath: string) =>
        menuPath.startsWith("/") ? menuPath : `/#${menuPath}`;

    return (
        <>
            <div
                className={
                    header
                        ? "header w-full h-20 bg-[#0f1111] shadow-md fixed top-0 z-[999] transition-all ease-in-out duration-500 max-sm:h-20"
                        : "bg-transparent w-full h-24 z-[999] fixed top-0 transition-all ease-in-out duration-500 max-sm:h-20"
                }
            >
                <div className="container mx-auto px-[2.5rem] max-sm:px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul>
                            <li>
                                <Link href="/" className="flex gap-x-4 items-center">
                                <Image src={ccpexlogo} className="w-[80px] max-sm:w-[48px] h-fit" alt="ccpexlogo"></Image>

                                </Link>
                            </li>
                        </ul>
                        <div className="hidden sm:flex">
                            <ul className="hidden sm:flex gap-x-14 header-bg py-2 px-4">
                                {navigation.map((menu, index) => (
                                    <li className="nav__item font-[family-name:var(--font-inter)]" key={index}>
                                        <Link
                                            className={`hover:text-[#00BAA9] text-lg text-white transition-all ease-in-out duration-300 focus:text-[#00BAA9] ${
                                                // Only highlight if it's a section on the current page
                                                !menu.href.pathname.startsWith("/") &&
                                                activeSection === menu.href.pathname
                                                    ? "text-[#00BAA9]"
                                                    : ""
                                            }`}
                                            href={getLinkHref(menu.href.pathname)}
                                        >
                                            {menu.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden sm:flex">
                            <ul className="hidden sm:flex">
                                <li>
                                    <div className="btn-wrap flex justify-between gap-x-4 items-center">
                                        <ContactPopup />
                                        <button className="py-2 px-6 text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg border-[.8px] border-[rgba(153,153,153,0.5)] backdrop-blur-2xl transition-all ease-in-out duration-300">
                                            Start Trading Now
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div onClick={handleNav} className="sm:hidden cursor-pointer ml-24">
                            <AiOutlineMenu size={25} className="text-white" />
                        </div>
                    </div>
                    <div
                        className={
                            menuOpen
                                ? "fixed left-0 top-0 w-[75%] sm:hidden h-screen bg-[#ffffff] p-10 ease-in duration-500 shadow-lg z-[1]"
                                : "fixed left-[-100%] top-0 p-10 w-[75%] h-screen ease-in duration-500 shadow-lg"
                        }
                    >
                        <div className="flex w-full items-center justify-end">
                            <div onClick={handleNav} className="cursor-pointer">
                                <AiOutlineCloseSquare size={35} />
                            </div>
                        </div>
                        <div className="flex-col py-4">
                            <ul className="flex flex-col gap-y-9">
                                {navigation.map((menu, index) => (
                                    <li className="nav__item" key={index}>
                                        <Link
                                            className={`hover:text-[#00BAA9] text-sm transition-all ease-in-out duration-500 focus:text-[#00BAA9] ${
                                                !menu.href.pathname.startsWith("/") &&
                                                activeSection === menu.href.pathname
                                                    ? "text-[#00BAA9]"
                                                    : ""
                                            }`}
                                            href={getLinkHref(menu.href.pathname)}
                                            onClick={handleLinkClick}
                                        >
                                            {menu.title}
                                        </Link>
                                    </li>
                                ))}
                                <Link
                                    href="#contact"
                                    className="hover:text-[#00BAA9] text-[15px] transition-all ease-in-out duration-500 focus:text-[#00BAA9]"
                                    onClick={handleLinkClick}
                                >
                                    Contact
                                </Link>
                                <button className="py-2 px-6 text-sm text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg border-[.8px] border-[rgba(153,153,153,0.5)] backdrop-blur-2xl transition-all ease-in-out duration-300">
                                    Start Trading Now
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
