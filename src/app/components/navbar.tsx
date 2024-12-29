"use client";
import Button from "./button";
import Burger from "./burger";
import Footer from "./footer";
import { useState, useEffect } from "react";
/* eslint-disable */
const Navbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  const [active, setActive] = useState("1");
  const values: string[] = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    values.forEach((item: string) => setInterval(checkVisible, 100, item));
  }, []);

  function checkVisible(id: string) {
    var rect = document.getElementById(id)?.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    rect && !(rect.bottom < 0 || rect.top - viewHeight >= 0) && setActive(id);
  }

  const onClick = () => {
    document.getElementById("0")?.scrollIntoView()
};

  return (
    <div className="w-full h-full flex flex-row items-justify text-center justify-between py-2 px-2 xl:px-8 shadow-xl bg-background">
      <button onClick={onClick}><img src="logo.png" alt="Logo" className="y-auto h-14 hover:scale-125 ease-out duration-300"/></button>
      <div className="flex flex-row justify-end gap-2 w-1/2 invisible xl:visible">
        <Button
          name="Esittely"
          reference="1"
          active={active == "1" ? true : false}
          color="bg-main"
        />
        <Button
          name="Palvelut"
          reference="2"
          active={active == "2" ? true : false}
          color="bg-main"
        />
        <Button
          name="Ajankohtaista"
          reference="3"
          active={active == "3" ? true : false}
          color="bg-main"
        />
        <Button
          name="Yhteystiedot"
          reference="4"
          active={active == "4" ? true : false}
          color="bg-main"
        />
        <Button
          name="Varaa aika"
          reference="4"
          color="bg-callToAction"
          highlight={true}
        />
      </div>
      {showMenu && (
        <div className="flex flex-col gap-6 w-full h-[calc(100dvh)] absolute px-4 py-10 top-16 right-0 visible xl:hidden bg-background">
          <div className="flex flex-col h-full justify-center gap-8 text-xl">
          <Button
            name="Esittely"
            reference="1"
            active={active == "1" ? true : false}
            state={showMenu}
            setState={setShowmenu}
            color="bg-main"
          />
          <Button
            name="Palvelut"
            reference="2"
            active={active == "2" ? true : false}
            state={showMenu}
            setState={setShowmenu}
            color="bg-main"
          />
          <Button
            name="Ajankohtaista"
            reference="3"
            active={active == "3" ? true : false}
            state={showMenu}
            setState={setShowmenu}
            color="bg-main"
          />
          <Button
            name="Yhteystiedot"
            reference="4"
            active={active == "4" ? true : false}
            state={showMenu}
            setState={setShowmenu}
            color="bg-main"
          />
          <Button
            name="Varaa aika"
            reference="4"
            state={showMenu}
            setState={setShowmenu}
            color="bg-callToAction"
          />
          </div>
          <div className="mt-auto mb-14">
            <Footer/>
          </div>
        </div>
      )}
      <button
        className="visible xl:hidden"
        onClick={() => setShowmenu(!showMenu)}
      >
        <Burger isOpen={showMenu} />
      </button>
    </div>
  );
};

export default Navbar;