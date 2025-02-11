"use client"
import React, { useState } from "react";
import Container from "../Container"
import Image from "next/image"
import sec12_card_icon1 from "@/public/images/sec12-card-icon1.svg"
import sec12_card_icon2 from "@/public/images/sec12-card-icon2.svg"

const HomeTweleve = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mob_no: "",
        email: "",
        description: ""
    });
    const [loading, setLoading] = useState(false);


    const validateForm = () => {
        if (!formData.firstname.trim() || !formData.lastname.trim()) {
            return "First name and last name are required.";
        }
        if (!/^\d{10,}$/.test(formData.mob_no)) {
            return "Enter a valid mobile number (at least 10 digits).";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return "Enter a valid email address.";
        }
        return "";
    };
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setLoading(false);
        }, 2000);

        try {
            const response = await fetch("/api/contact-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setShowModal(true);
                setErrorMessage(""); // Clear errors if successful
                setFormData({ firstname: "", lastname: "", mob_no: "", email: "", description: "" });
            } else {
                setErrorMessage(data.error || "Form submission failed");
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="pt-28 max-sm:pt-12" id="contact">
                <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-6 max-sm:pb-0 max-sm:pt-0">Contacts</h4>

                <Container>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 px-8 max-sm:px-0">
                        <div className="p-6">
                            <h5 className="text-2xl font-medium text-white max-sm:text-center pb-12">Lets Start <span className="text-[#00BAA9]">Trade</span> Together. Get <br className="max-sm:hidden" /> in Touch</h5>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                                <div className="flex justify-between max-sm:flex-col max-sm:gap-y-6">
                                    <div className="flex flex-col gap-y-4">
                                        <label className="text-lg font-normal text-white" htmlFor="firstname">First Name</label>
                                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="bg-[rgba(0,0,0,0.25)] text-white border border-[rgba(153,153,153,0.16)] py-3 px-2 rounded-md focus:outline-none" required />
                                    </div>
                                    <div className="flex flex-col gap-y-4">
                                        <label className="text-lg font-normal text-white" htmlFor="lastname">Last Name</label>
                                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="bg-[rgba(0,0,0,0.25)] text-white border border-[rgba(153,153,153,0.16)] py-3 px-2 rounded-md focus:outline-none" required />
                                    </div>
                                </div>
                                <div className="flex justify-between max-sm:flex-col max-sm:gap-y-6">
                                    <div className="flex flex-col gap-y-4">
                                        <label className="text-lg font-normal text-white" htmlFor="mob_no">Mobile No</label>
                                        <input type="text" name="mob_no" pattern="\d*" value={formData.mob_no} onChange={handleChange} className="bg-[rgba(0,0,0,0.25)] text-white border border-[rgba(153,153,153,0.16)] py-3 px-2 rounded-md focus:outline-none" required />
                                    </div>
                                    <div className="flex flex-col gap-y-4">
                                        <label className="text-lg font-normal text-white" htmlFor="email">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-[rgba(0,0,0,0.25)] text-white border border-[rgba(153,153,153,0.16)] py-3 px-2 rounded-md focus:outline-none" required />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <label className="text-lg font-normal text-white" htmlFor="description">Description</label>
                                    <textarea name="description" rows={4} value={formData.description} onChange={handleChange} className="bg-[rgba(0,0,0,0.25)] text-white border border-[rgba(153,153,153,0.16)] py-3 px-2 rounded-md focus:outline-none" required></textarea>
                                </div>
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button type="submit" className={`primary-btn text-white py-2 px-4 rounded-md flex justify-center items-center ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"}`} disabled={loading}>
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"></path>
                                        </svg>
                                    ) : "Submit"}
                                </button>
                            </form>
                        </div>
                        <div className="bg-[url('/images/contacts-bg-img.svg')] bg-center bg-[_100%_100%] bg-opacity-70 p-4 flex flex-col items-center">
                            <h6 className="text-3xl font-medium text-white py-4 w-8/12 text-left max-sm:w-full max-sm:text-center">Connect with Us</h6>
                            <div className="sec-tweleve-card p-4 flex flex-col justify-center w-8/12 gap-y-4 max-sm:w-full">
                                <div className="flex justify-start items-center gap-x-4">
                                    <Image src={sec12_card_icon1} className="w-8 h-fit" alt="sec12_card_icon1"></Image>
                                    <a href="mailto:helloCCPEX@gmail.com" className="text-lg font-normal text-white">helloCCPEX@gmail.com</a>
                                </div>
                                <div className="flex justify-start items-center gap-x-4">
                                    <Image src={sec12_card_icon2} className="w-8 h-fit" alt="sec12_card_icon2"></Image>
                                    <a href="tel:0000-1111-2222" className="text-lg font-normal text-white">0000-1111-2222</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
                        <p className="text-gray-600 mt-2">Your form has been submitted successfully.</p>
                        <button onClick={handleCloseModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Close</button>
                    </div>
                </div>)
            }
        </>
    )
}

export default HomeTweleve