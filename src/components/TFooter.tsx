import React, {FC} from "react";
import fIcon from "../PNGsss/InkWorth Footer.png"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: FC = () => {
    return (
        <div className="w-full bg-lyellow mt-28 px-28 py-14">
            <div className="flex justify-between">
                <div>
                    <img src={fIcon} alt="Inkworth Icon" className="w-48" />
                </div>
                <div className="flex justify-between gap-20">
                    <div>
                        <h3 className="font-bold mb-5">About Us</h3>
                        <ul className="flex flex-col gap-5">
                            <li><a href="#About">About InkWorth</a></li>
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Community">Community</a></li>
                            <li><a href="#Services">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-5">Support</h3>
                        <ul className="flex flex-col gap-5">
                            <li><a href="#Contact">Contact Us</a></li>
                            <li><a href="#CSupport">Customer Support</a></li>
                            <li><a href="#FAQs">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-5">Legal</h3>
                        <ul className="flex flex-col gap-5">
                            <li><a href="#T&Cs">Terms and Conditions</a></li>
                            <li><a href="#P&P">Privacy & Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-5">Explore</h3>
                        <ul className="flex flex-col gap-5">
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