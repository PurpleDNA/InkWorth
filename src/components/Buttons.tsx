import { FC } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Bprops {
  desc: string;
  icon?: IconProp;
  color: "gray" | "dgreen" | "yellow";
}

export const Button: FC<Bprops> = (props) => {
  if (props.icon) {
    if (props.color === "dgreen") {
      return (
        <div>
          <button className=" bg-dgreenn text-xl text-white flex gap-12 items-center hover:bg-vdgreen hover:gap-20 duration-300 transition-all">
            {props.desc}
            <FontAwesomeIcon icon={props.icon} className="w-3 h-3" />
          </button>
        </div>
      );
    } else if (props.color === "gray") {
      return (
        <div>
          <button className=" bg-mgray text-xl  flex gap-12 items-center hover:bg-dgray hover:gap-20 transition-all duration-300">
            {props.desc}
            <FontAwesomeIcon icon={props.icon} className="w-3 h-3" />
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className=" bg-lyellow text-xl  flex gap-12 items-center hover:bg-dyellow hover:gap-20 duration-300 transition-all">
            {props.desc}
            <FontAwesomeIcon icon={props.icon} className="w-3 h-3" />
          </button>
        </div>
      );
    }
  } else {
    if (props.color === "dgreen") {
      return (
        <div>
          <button className=" bg-dgreenn text-sm text-white transition-all duration-300 hover:bg-vdgreen">
            {props.desc}
          </button>
        </div>
      );
    } else if (props.color === "gray") {
      return (
        <div>
          <button className=" bg-mgray text-sm hover:bg-dgray transition-all duration-300">
            {props.desc}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className=" bg-lyellow text-sm hover:bg-dyellow transition-all duration-300">
            {props.desc}
          </button>
        </div>
      );
    }
  }
};
