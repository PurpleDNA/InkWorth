import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { RecCard } from "./components/RecCard";
import { Button } from "./components/Buttons";
import { GuideCard, CardData } from "./components/GuideCard";
import { Footer } from "./components/TFooter";
import Earnings from "./PNGsss/Earnings.jpg";
import fAppendage from "./PNGsss/Feather appendage.png";
import workspace from "./PNGsss/workspace.png";
import journey from "./PNGsss/journey.png";
import icp from "./PNGsss/ICP.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="font-sofia">
      <Navbar />
      <main className=" flex justify-between items-center container mt-6">
        <div className="flex flex-col gap-7 w-3/5">
          <p className="font-bold text-8xl">
            Earn while you read and write on{" "}
            <span className="text-greenn font-sofia">InkWorth</span>.
          </p>
          <p className="text-xl">
            Unlock the <span className="font-bold">potential</span> of your
            literary talents and turn your passion for reading and writing into
            a <span className="font-bold">rewarding experience</span> with Ink
            Worth
          </p>
          <div className="flex gap-4">
            <Button desc="Connect Wallet" icon={faWallet} color="gray" />
            <Button desc="Get Started" icon={faArrowRight} color="dgreen" />
          </div>
        </div>
        <div className="pictures relative">
          <img src={workspace} alt="main img" className="w-96" />
          <img
            src={Earnings}
            alt="Earnings Card"
            className="w-2/3 absolute -bottom-10 -right-4"
          />
          <img
            src={fAppendage}
            alt="Appendage"
            className="absolute top-10 -left-4 w-16"
          />
        </div>
      </main>
      <section className="recommendations flex flex-col container mt-32 gap-12">
        <div>
          <span className="rounded-3xl font-sofia bg-creamy px-8 py-5 inline w-auto ">
            Recommended
          </span>
        </div>
        <div className="testimonials flex gap-8">
          <RecCard />
          <RecCard />
          <RecCard />
        </div>
        <div className="flex justify-center">
          <Button desc="Discover More" icon={faArrowRight} color="dgreen" />
        </div>
      </section>
      <section className="journey container flex flex-col gap-9">
        <h2 className="text-5xl font-bold text-center ">
          Your Journey with <span className="text-dgreenn">InkWorth</span>
        </h2>
        <p className="text-xl text-center w-2/3 journey_desc mx-auto">
          Sign up and explore our diverse content. Earn tokens through your
          activity and redeem them for reward
        </p>
        <div>
          <div className="mb-4">
            <img src={journey} alt="inkworth journey process" />
          </div>
          <div className="flex justify-between gap-6 ">
            <div className=" w-1/3">
              <h2 className="font-bold font-sofia text-xl journey_cards-title mb-3">
                Sign Up
              </h2>
              <p className="journey_cards-desc">
                Create your wallet and create your free account in just a few
                simple steps.
              </p>
            </div>
            <div className="w-1/3">
              <h2 className="font-bold font-sofia text-xl journey_cards-title mb-3">
                Start Reading or Writing
              </h2>
              <p className="journey_cards-desc">
                Explore a vast collection of blogs, write-ups, and articles
                across categories that interest you. Engage with the content,
                share your thoughts, or start publishing your own work
              </p>
            </div>
            <div className="w-1/3">
              <h2 className="font-bold font-sofia text-xl journey_cards-title mb-3">
                Earn Tokens and Redeem Rewards
              </h2>
              <p className="journey_cards-desc">
                Earn tokens based on your activity and engagement, and use them
                to redeem various rewards or cash out for money.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button icon={faArrowRight} desc="Get Started" color="yellow" />
        </div>
      </section>
      <section className="icp_blockchain container grid grid-cols-2">
        <div>
          <img src={icp} alt="ICP Blockchain logo" className="w-auto h-5/6" />
        </div>
        <div className="icp-text flex flex-col gap-5 py-4">
          <h2 className="icp-title font-bold text-5xl">
            Powered by ICP Blockchain
          </h2>
          <h3 className="journey_desc-title font-bold text text-2xl font-poppins mb-4">
            Experience Unmatched Security and Speed
          </h3>
          <p className="text-xl">
            Ink Worth leverages the power of the Internet Computer Protocol
            (ICP) blockchain to provide a secure, transparent, and efficient
            platform for our users. With ICP, your transactions and data are
            protected with top-tier security, ensuring peace of mind. Enjoy
            lightning-fast transaction speeds and a seamless user experience,
            all while benefiting from the decentralized nature of blockchain
            technology. Join us and be part of a future where your literary
            passions are supported by cutting-edge technology.
          </p>
        </div>
      </section>
      <section className=" guide container mt-0 flex flex-col gap-8">
        <div>
          <h2 className="guide_title font-bold text-5xl">
            Guide to Starting Your Writing Adventure
          </h2>
        </div>
        <div className="guide-desc flex justify-between items-center">
          <p>
            Get Started with Ink Worth and unlock your potential as a writer.
            Learn <br /> how to set up your account and begin earning from your
            passion.
          </p>
          <Button desc="Get Started" icon={faArrowRight} color="gray" />
        </div>
        <div className="flex justify-between gap-4">
          <GuideCard {...CardData.card1} />
          <GuideCard {...CardData.card2} />
          <GuideCard {...CardData.card3} />
        </div>
      </section>
      <section className="waitlist bg-dblue container rounded-3xl py-16 flex flex-col items-center -z-20">
        <h1 className="waitlist-title text-center font-bold text-5xl text-white">
          Ready to Start <br />
          <p className="mt-3">
            Your <span className="text-lyellow ">InkWorth</span> Journey?
          </p>
        </h1>
        <p className="waitlist-desc text-center mt-6 text-white">
          Become a part of the Ink Worth community and <br /> transform your
          love for literature into earnings.
        </p>
        <div className="w-full flex mt-6 justify-center">
          <input
            type="email"
            placeholder="Your Email Address"
            className=" w-1/3 bg-transparent px-9 py-1 inline rounded-l-lg border-2 border-solid border-mgray text-mgray focus:outline-none"
          />
          <button className=" bg-mgray text-sm rounded-l-none hover:bg-dgray transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>
      <section className="container flex justify-between gap-12">
        <div className="flex flex-col justify-between w-1/3">
          <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          <div className=" bg-creamy p-5 rounded-lg border-lyellow border-2">
            <p className="text-3xl mb-4">Send us an Email now</p>
            <p className="font-bold text-xl mb-10">Still have Questions?</p>
            <p>
              You can reach us by sending us a detailed email,{" "}
              <span>
                <a href="#contact" className="text-blue-500">Contact us.</a>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-2/3"><FAQ/></div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
