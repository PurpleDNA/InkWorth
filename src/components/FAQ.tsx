import React, { FC, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ: FC = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div>
      {data.map((e, num) => (
        <div className="px-4 py-6  bg-creamy p-5 rounded-lg border-lyellow border-2 [&:not(:last-child)]:mb-5">
          <div
            className="flex justify-between items-center font-semibold text-xl cursor-pointer"
            onClick={() => toggle(num)}
          >
            <p>{e.question}</p>
            <span className="">
              {selected === num ? (
                <FontAwesomeIcon icon={faMinusCircle} className="w-6 h-6 transition-all duration-300 ease-in-out" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="w-3 h-3 border rounded-full border-dblue p-1 transition-all duration-300 ease-in-out"/>
              )}
            </span>
          </div>
          <p
            className={`text-base font-light transition-all duration-300 ${
              selected === num ? "h-auto mt-4" : "h-0 overflow-hidden"
            }`}
          >
            {e.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

const data: { question: string; answer: string }[] = [
  {
    question: "How can I start earning by reading on InkWorth?",
    answer:
      "To start earning by reading on Ink Worth, sign up and create an account. Browse through our vast collection of literature and choose the pieces that interest you. Engage with the content by reading, commenting, and participating in discussions. Earn points based on your activity and convert them into earnings.",
  },
  {
    question: "How can I start earning by reading on InkWorth?",
    answer:
      "To start earning by reading on Ink Worth, sign up and create an account. Browse through our vast collection of literature and choose the pieces that interest you. Engage with the content by reading, commenting, and participating in discussions. Earn points based on your activity and convert them into earnings.",
  },
  {
    question: "How can I start earning by reading on InkWorth?",
    answer:
      "To start earning by reading on Ink Worth, sign up and create an account. Browse through our vast collection of literature and choose the pieces that interest you. Engage with the content by reading, commenting, and participating in discussions. Earn points based on your activity and convert them into earnings.",
  },
  {
    question: "How can I start earning by reading on InkWorth?",
    answer:
      "To start earning by reading on Ink Worth, sign up and create an account. Browse through our vast collection of literature and choose the pieces that interest you. Engage with the content by reading, commenting, and participating in discussions. Earn points based on your activity and convert them into earnings.",
  },
];
