import { FC } from "react";
import React from 'react';
interface Cardprops {
    step: string;
    title: string;
    desc: string;
}

export const GuideCard: FC<Cardprops> = (props) => {
    return (
        <div className="bg-myellow py-6 px-4 rounded-2xl w-1/3 hover:w-2/3 duration-300 transition-all overflow-hidden ">
            <h3 className="mb-12 font-semibold">{props.step}</h3>
            <p className="mb-5 w-static text-base font-semibold">{props.title}</p>
            <p className="w-static">{props.desc}</p>
        </div>
    )
}



export const CardData: {
     card1: Cardprops,
     card2: Cardprops,
     card3: Cardprops,
} = {
    card1 : {
        step : "Step 1",
        title: "Connect Wallet, Sign Up, and Create an Account",
        desc: "Begin your journey by signing up on our platform. Connect your digital wallet to secure your transactions and store your earnings. Follow the easy steps to create your account, and you'll be ready to start exploring the world of Ink Worth."
    },
    card2 : {
        step: "Step 2",
        title: "Access Your User Dashboard and Create a Post",
        desc: "Once your account is set up, you'll be directed to your user dashboard. Here, you can manage your profile, view your activity, and choose to create a post. Select your preferred category, craft your write-up, and publish it for the community to read and enjoy."
    },
    card3: {
        step: "Step 3",
        title: "Engage with Readers and Earn Tokens",
        desc: "After publishing your content, wait for readers to engage with it through comments and feedback. Earn tokens based on the engagement your write-up receives. Additionally, you can mint your write-up for sale, offering it as a unique piece to potential buyers."
    }
}