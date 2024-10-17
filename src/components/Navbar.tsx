import { FC, useState } from "react";
import React from "react";
import logo from "../assets/inkworthB.png";
import { Button } from "./Buttons";
export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  function mobileNav() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <div className="">
      <div className="header flex justify-between items-center container mt-4">
        <div className="z-20">
          <img src={logo} alt="Inkworth Logo" className="w-auto h-14 " />
        </div>
        <div
          onClick={mobileNav}
          id="hamburger-button"
          className="lg:hidden text-5xl z-20"
        >
          <button>&#9776;</button>
        </div>
        <div className="navbar font-sofia lg:block hidden">
          <ul className="flex gap-7 font-medium text-xl ">
            <li>
              <a href="#create">Create</a>
            </li>
            <li>
              <a href="#Explore">Explore</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#How">
                <span className="text-greenn">How it Works</span>
              </a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="Login lg:flex gap-4 hidden ">
          <Button desc="Login" color="gray" />
          <Button desc="Sign Up" color="dgreen" />
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`origin-top absolute top-0 w-full flex-col gap-36 items-center pt-36 justify-start z-10 bg-white h-screen ${
          isOpen === true ? "flex animate-open-menu" : "hidden"
        }`}
      >
        <div className="navbar font-sofia">
          <ul className="flex flex-col gap-20 font-medium text-6xl text-center ">
            <li>
              <a onClick={mobileNav} href="#create">
                Create
              </a>
            </li>
            <li>
              <a onClick={mobileNav} href="#Explore">
                Explore
              </a>
            </li>
            <li>
              <a onClick={mobileNav} href="#About">
                About Us
              </a>
            </li>
            <li>
              <a onClick={mobileNav} href="#How">
                <span className="text-greenn">How it Works</span>
              </a>
            </li>
            <li>
              <a onClick={mobileNav} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="Login flex flex-col gap-12 ">
          <button
            onClick={mobileNav}
            className=" bg-mgray text-6xl hover:bg-dgray transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={mobileNav}
            className=" bg-dgreenn text-6xl text-white transition-all duration-300 hover:bg-vdgreen"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
