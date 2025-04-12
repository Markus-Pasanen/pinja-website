"use client";

import { FaClock } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

interface propTypes {
  backgroundImg: string;
  mainImg: string;
  title: string;
  text: string;
  time?: string;
  pricing: string;
  pricingTitle?: string;
}

const card = (props: propTypes) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 shadow-lg shadow-hover border border-background rounded w-full min-h-64 md:h-48 overflow-hidden relative hover:scale-105 ease-out duration-300">
      <div className="flex flex-col col-span-3 text-pretty gap-4 p-4 pb-10">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-text text-base">{props.text}</p>
        <div className="shadow-lg absolute left-0 bottom-0 md:rounded-tr-lg px-4 py-2 w-full md:w-auto bg-main bg-opacity-75 flex flex-row items-center align-center justify-between gap-10 text-xl text-text">
          {props.time && (
            <div className="flex flex-row items-center gap-2 text-nowrap">
              <p className="font-semibold">{props.time}</p>
              <FaClock />
            </div>
          )}

          <div className="flex flex-row items-center gap-2 text-nowrap">
            <div className="font-semibold text-">{props.pricing}</div>
            <div>
              <FaEuroSign />
            </div>
            {props.pricingTitle && (
              <>
                <div>/</div>
                <div
                  className="flex flex-row w-full align-middle items-center gap-2 text-nowrap"
                  style={{
                    display: props.pricingTitle ? "" : "none",
                  }}
                >
                  <p className="font-semibold">{props.pricingTitle}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="h-full bg-main opacity-50 invisible md:visible"
        style={{
          backgroundImage: `url(${props.backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default card;
