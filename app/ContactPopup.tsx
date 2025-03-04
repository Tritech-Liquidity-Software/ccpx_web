import { useState} from "react";

const ContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mob_no: "",
        email: "",
        description: ""
    });

    // // Automatically open popup after 2 seconds
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsOpen(true);
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, []);

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
                setIsOpen(false); // Close contact form popup
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
            {/* Contact Button */}
            <button onClick={() => setIsOpen(true)} className="text-white">
                Contact
            </button>

            {/* Popup Box */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#1c1c1ceb] bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-[#00000099] p-8 rounded-lg w-[33rem] relative border border-[#0fac9e]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button (X) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white text-lg"
                        >
                            ✖
                        </button>

                        {/* Popup Content */}
                        <h2 className="text-2xl text-center bg-gradient-to-r from-[#00FF94] to-[#3CE1D8] bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)] font-bold">CCPEX</h2>
                        <p className="text-center text-white text-base">Please complete the form and submit your request. </p>
                        <p className="text-center text-[#3CE1D8] py-2">We will be in touch shortly</p>
                        <p className="text-center text-[#B7B7B7] text-sm pb-5">We offer a large range of trade service to enhance your financial grow.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                            <div className="flex justify-between max-sm:flex-col max-sm:gap-y-6 gap-x-4">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[14px] font-normal text-white" htmlFor="firstname">First Name</label>
                                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="bg-[#F5F5F508]  placeholder:text-[#B7B7B77A] text-[#B7B7B7] border border-[rgba(153,153,153,0.16)] py-1 px-2 rounded-md focus:outline-none" required />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[14px] font-normal text-white" htmlFor="lastname">Last Name</label>
                                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="bg-[#F5F5F508]  placeholder:text-[#B7B7B77A] text-[#B7B7B7] border border-[rgba(153,153,153,0.16)] py-1 px-2 rounded-md focus:outline-none" required />
                                </div>
                            </div>
                            <div className="flex justify-between max-sm:flex-col max-sm:gap-y-6 gap-x-4">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[14px] font-normal text-white" htmlFor="mob_no">Mobile No</label>
                                    <input type="text" name="mob_no" pattern="\d*" value={formData.mob_no} onChange={handleChange} className="bg-[#F5F5F508]  placeholder:text-[#B7B7B77A] text-[#B7B7B7] border border-[rgba(153,153,153,0.16)] py-1 px-2 rounded-md focus:outline-none" required />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[14px] font-normal text-white" htmlFor="email">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-[#F5F5F508]  placeholder:text-[#B7B7B77A] text-[#B7B7B7] border border-[rgba(153,153,153,0.16)] py-1 px-2 rounded-md focus:outline-none" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2 ">
                                <label className="text-lg font-normal text-white" htmlFor="description">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} className="bg-[#F5F5F508] text-white border border-[rgba(153,153,153,0.16)] py-1 px-2 rounded-md focus:outline-none" required></textarea>
                            </div>
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            <button type="submit" className={`primary-btn text-white py-2 px-4 rounded-md flex justify-center items-center ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"}`} disabled={loading}>
                                {loading ? "Submitting..." : "Request for Trade"}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#2a2a2a] p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold text-white">Thank You!</h2>
                        <p className="text-white mt-2">Your form has been submitted successfully.</p>
                        <button onClick={handleCloseModal} className="mt-4 px-4 py-2 text-white bg-gradient-to-r from-[#00baa9] to-black rounded-lg">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactPopup;
