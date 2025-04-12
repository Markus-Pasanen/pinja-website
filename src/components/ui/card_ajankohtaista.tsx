"use client";
import { useState, PropsWithChildren } from "react";

interface propTypes {
  title: string;
  backgroundImg: string;
  pvm: string;
}

/* eslint-disable */
const card_ajankohtaista = (props: propTypes & PropsWithChildren<{}>) => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <button className="text-left" onClick={() => setShowmenu(!showMenu)}>
      <div className="shadow-lg shadow-hover border border-background rounded w-full overflow-hidden relative hover:scale-105 ease-out duration-300">
        <div className="shadow-lg  absolute left-0 top-0 rounded-br-lg py-2 px-8 bg-main z-10">
          {props.pvm}
        </div>
        <div className="flex flex-col justify-between text-pretty gap-4 pb-20">
          <div
            className="h-36 bg-main opacity-50"
            style={{
              backgroundImage: `url(${props.backgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h2 className="text-xl font-semibold p-4">{props.title}</h2>
          <div className="flex flex-col justify-between text-pretty gap-8 px-4 h-8"
              style={{
                height: showMenu ? "auto" : "0px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.children}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center hover:bg-background ease-out duration-300">
            <div className="flex flex-col justify-between w-[20px] h-[20px] ease-out duration-300 origin-center overflow-hidden">
              {!showMenu && (
                <div className="relative flex items-center justify-center w-5 h-5">
                  <div className="absolute bg-text h-[2px] w-10 rotate-45 translate-y-[9.5px]"></div>
                  <div className="absolute bg-text h-[2px] w-10 -rotate-45 translate-y-[9.5px]"></div>
                </div>
              )}

              {showMenu && (
                <div className="relative flex items-center justify-center w-5 h-5">
                  <div className="absolute bg-text h-[2px] w-10 rotate-45 -translate-y-[10px]"></div>
                  <div className="absolute bg-text h-[2px] w-10 -rotate-45 -translate-y-[10px]"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default card_ajankohtaista;
