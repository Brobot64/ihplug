"use client"
import { useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LiaYoutube } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);

    const displayDetails = (id:any) => {
        setActiveSection((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-black text-white h-auto md:m-auto">
            <div className="text-white h-20 bg-[#E60101] flex justify-around items-center underline-offset-0">
                <Link href="/">Exclusive Deals & Perks</Link>
                <Link href="/">Become Affiliate</Link>
                <Link href="/">Content Creators</Link>
            </div>

            <section className="block md:flex md:justify-around mt-10 px-2">
                {/* Get in Touch Section */}
                <div className="md:w-72">
                    <div className="flex justify-between items-center" onClick={() => displayDetails("getInTouch")}>
                        <h1 className="mb-4">Get in Touch</h1>
                        {activeSection === "getInTouch" ? <IoIosArrowDown className="md:hidden" /> : <IoIosArrowUp className="md:hidden" />}
                    </div>

                    <div className={`flex-col gap-2 text-[14px] text-[#FAFAFACC] ${activeSection === "getInTouch" ? 'flex' : 'hidden'} md:flex`}>
                        <div className="flex gap-2">
                            <AiOutlineHome className="w-8 h-8" />
                            <p>WTG IT Solutions, 14 Simbiat Abiola Way, Ikeja, Lagos, Nigeria.</p>
                        </div>
                        <div className="flex gap-2">
                            <FiPhone className="w-8 h-8" />
                            <p>Customer Service Hours: Monday - Friday: 9AM - 6PM Phone / Whatsapp No: +234 9022103152</p>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineMailOutline />
                            <a href="mailto:Support@digifon.ng">Support@digifon.ng</a>
                        </div>
                    </div>
                </div>

                <div className="md:hidden border border-gray-500 h-[1px] my-6"></div>

                {/* Browse Collections Section */}
                <div>
                    <div className="flex justify-between items-center" onClick={() => displayDetails("browseCollections")}>
                        <h1 className="mb-4">Browse Collections</h1>
                        {activeSection === "browseCollections" ? <IoIosArrowDown className="md:hidden" /> : <IoIosArrowUp className="md:hidden" />}
                    </div>

                    <div className={`flex-col gap-2 text-[14px] text-[#FAFAFACC] ${activeSection === "browseCollections" ? 'flex' : 'hidden'} md:flex`}>
                        <a href="/">New Arrivals</a>
                        <a href="/">Clearance</a>
                        <a href="/">TWS Earbuds</a>
                        <a href="/">Power Banks</a>
                        <a href="/">Speakers</a>
                        <a href="/">Chargers</a>
                        <a href="/">Cables</a>
                        <a href="/">Special Offers</a>
                    </div>
                </div>

                <div className="md:hidden border border-gray-500 h-[1px] my-6"></div>

                {/* Customer Support Section */}
                <div>
                    <div className="flex justify-between items-center" onClick={() => displayDetails("customerSupport")}>
                        <h1 className="mb-4">Customer Support</h1>
                        {activeSection === "customerSupport" ? <IoIosArrowDown className="md:hidden" /> : <IoIosArrowUp className="md:hidden" />}
                    </div>

                    <div className={`flex-col gap-2 text-[14px] text-[#FAFAFACC] ${activeSection === "customerSupport" ? 'flex' : 'hidden'} md:flex`}>
                        <a href="/">Locate Stores</a>
                        <a href="/">Terms of Service</a>
                        <a href="/">Billing Terms</a>
                        <a href="/">Shipping Policy</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Returns, Replacements & Warranty</a>
                    </div>
                </div>

                <div className="md:hidden border border-gray-500 h-[1px] my-6"></div>

                {/* Information Section */}
                <div>
                    <div className="flex justify-between items-center" onClick={() => displayDetails("information")}>
                        <h1 className="mb-4">Information</h1>
                        {activeSection === "information" ? <IoIosArrowDown className="md:hidden" /> : <IoIosArrowUp className="md:hidden" />}
                    </div>

                    <div className={`flex-col gap-2 text-[14px] text-[#FAFAFACC] ${activeSection === "information" ? 'flex' : 'hidden'} md:flex`}>
                        <a href="/">About Us</a>
                        <a href="/">Dealers Registration</a>
                        <a href="/">Affiliate Program (Selar)</a>
                        <a href="/">Collab with us</a>
                        <a href="/">Blogs</a>
                        <a href="/">Events</a>
                    </div>
                </div>
            </section>

            <div className="border border-gray-500 h-[1px] my-6"></div>

            {/* Socials and copyright */}
            <div className="flex gap-2 items-center mx-16 justify-between mb-6">
                <button>Search</button>

                <div className="flex gap-2">
                    <a href="/"><FaXTwitter /></a>
                    <a href="/"><FiFacebook /></a>
                    <a href="/"><FiInstagram /></a>
                    <a href="/"><LiaYoutube /></a>
                </div>
            </div>

            <div className="bg-[#171717] h-14 flex items-center justify-end gap-4 px-16">
                <p className="text-[12px] text-[#FAFAFACC]">©️ 2024, digifon NG Powered by Shopify</p>
                <button className="bg-[#05003A] text-white text-center pt-1 rounded-full h-8 w-8">X</button>
            </div>
        </section>
    );
};

export default Footer;

