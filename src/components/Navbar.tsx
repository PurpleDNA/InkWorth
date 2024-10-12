import { FC } from "react";
import React from 'react'
import  logo from "../PNGsss/inkworthB.png";
import { Button } from "./Buttons";
export const Navbar: FC = () => {
  return (
    <div className="">
      <div className="header flex justify-between items-center container mt-4">
        <div className="">
          <img src={logo} alt="Inkworth Logo" className="w-auto h-12 " />
        </div>
        <div className="navbar font-sofia">
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
        <div className="Login flex gap-4">
          <Button desc="Login" color="gray"/>
          <Button desc="Sign Up" color="dgreen"/>
        </div>
      </div>
    </div>
  );
};
