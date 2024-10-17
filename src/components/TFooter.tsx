import React, {FC} from "react";
import fIcon from "../assets/inkworth footer.png"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: FC = () => {
    return (
        <div className="w-full bg-lyellow mt-28 px-28 py-14">
            <div className="flex items-center gap-5 flex-col md:flex-row justify-between">
                <div>
                    <img src={fIcon} alt="Inkworth Icon" className="w-48" />
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-10 lg:gap-5 lg:w-2/3 w-full">
                    <div className="mx-auto">
                        <h3 className="font-bold mb-5 underline text-center">About Us</h3>
                        <ul className="flex flex-col gap-5 justify-center items-center">
                            <li><a href="#About">About InkWorth</a></li>
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Community">Community</a></li>
                            <li><a href="#Services">Services</a></li>
                        </ul>
                    </div>
                    <div className="mx-auto" >
                        <h3 className="font-bold mb-5 underline text-center">Support</h3>
                        <ul className="flex flex-col gap-5 items-center">
                            <li><a href="#Contact">Contact Us</a></li>
                            <li><a href="#CSupport">Customer Support</a></li>
                            <li><a href="#FAQs">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="mx-auto">
                        <h3 className="font-bold mb-5 underline text-center">Legal</h3>
                        <ul className="flex flex-col gap-5 items-center">
                            <li><a href="#T&Cs">Terms and Conditions</a></li>
                            <li><a href="#P&P">Privacy & Policy</a></li>
                        </ul>
                    </div>
                    <div className="mx-auto">
                        <h3 className="font-bold mb-5 underline text-center">Explore</h3>
                        <ul className="flex flex-col gap-5 justify-center items-center">
                            <li><a href="#Wap">Write a Piece</a></li>
                            <li><a href="#Blogs">Blogs</a></li>
                            <li><a href="#Collaboration">Collaborations</a></li>
                            <li><a href="#Minting">Minting</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div><hr className="w-full border-slate-900 mt-8 mb-12"/></div>
            <div>
                <ul className="display flex justify-center gap-6">
                    <li><a href="#DiscordLink"><FontAwesomeIcon icon={faDiscord} className="w-6 h-6 p-2 border rounded-full border-slate-900" /></a></li>
                    <li><a href="#FacebookLink"><FontAwesomeIcon icon={faFacebook} className="w-6 h-6 p-2 border rounded-full border-slate-900" /></a></li>
                    <li><a href="#TwitterLink"><FontAwesomeIcon icon={faTwitter} className="w-6 h-6 p-2 border rounded-full border-slate-900" /></a></li>
                    <li><a href="#InstagramLink"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 p-2 border rounded-full border-slate-900" /></a></li>
                </ul>
                <p className="text-center mt-4">© 2024 InkWorth. All Rights Reserved</p>
            </div>
        </div>
    )
}