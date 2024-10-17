import { FC } from "react";
import React from 'react';
import dp from "../assets/profile picture.jpg";

export const RecCard: FC = () => {
    return (
        <div className="recommendation-card bg-fgreenn flex flex-col justify-between p-6 rounded-3xl gap-4">
            <div className="flex justify-between items-center">
              <div className="identity">
                <img
                  src={dp}
                  alt="headshot"
                  className="mr-3 inline rounded-full"
                />
                <p className="inline">The Rizz King</p>
              </div>
              <div className="recommendation-date">31 Jul 2024</div>
            </div>
            <h2 className="font-bold text-2xl">
              Navigating writing and reading with Inkworth
            </h2>
            <p>
              As a writer, you can share your literary works with a vibrant
              community, receiving feedback and........
            </p>
            <div className="extras flex justify-between">
              <span>4 mins read</span>
              <div>
                <span className="extras-tags"> Web3 . </span>
                <span className="extras-tags"> Reading . </span>
                <span className="extras-tags"> Writing</span>
              </div>
            </div>
          </div>
    )
}