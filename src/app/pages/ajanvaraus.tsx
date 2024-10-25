"use client";
import Calendar from "react-calendar";
import "../thirdparty/Calendar.css";
import { useState, useEffect } from "react";

const Ajanvaraus = () => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const onDateClick = (value: string) => setDate(value);

  return (
    <div className="flex w-full h-full flex-col mx-auto max-w-4xl gap-6 px-10">
      <h1 className="text-5xl text-center p-10">Ajanvaraus</h1>
      <div className="col-span-2">
          <label className="block text-text text-sm font-bold mb-2">
            Palvelu:
          </label>
          <select
            name="cars"
            id="cars"
            className="shadow-hover border border-background w-full p-2 shadow rounded"
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Valitse palvelu, niin näet vapaat ajat</option>
            <option value="volvo">Kliininen jalkahoito</option>
            <option value="saab">Kynsien lyhennys</option>
            <option value="mercedes">Kynnenoikaisu</option>
            <option value="audi">Silikoniortoosit</option>
            <option value="audi">Alaraajahieronta</option>
          </select>
        </div>
      <div className={`grid grid-cols-1 xl:grid-cols-4 gap-4 -z-10 ${service === "" ? "blur-sm" : ""}`}>
        <div className="shadow appearance-none shadow-hover border border-background rounded w-full text-text leading-tight focus:outline-none focus:shadow-outline col-span-3">
          <Calendar
            minDetail="month"
            next2Label={null}
            prev2Label={null}
            minDate={new Date()}
            onClickDay={(value) => onDateClick(value.toString())}
            locale="fi-FI"
            defaultView="month"
          />
        </div>
        <div className="flex flex-col gap-4 justify-evenly col-span-3 xl:col-span-1">
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center bg-background blur-sm text-text">
            8:00 - 9:00
          </div>
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center">
            9:00 - 10:00
          </div>
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center">
            10:00 - 11:00
          </div>
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center bg-background blur-sm text-text">
            13:00 - 14:00
          </div>
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center bg-background blur-sm text-text">
            14:00 - 15:00
          </div>
          <div className="shadow-hover border border-background w-full p-2 shadow rounded text-center">
            15:00 - 16:00
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Nimi
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Nimi"
          />
        </div>
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Puhelin
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Puhelin"
          />
        </div>
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Sähköposti
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Sähköposti"
          />
        </div>
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Osoite
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Osoite"
          />
        </div>
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Postinumero
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Postinumero"
          />
        </div>
        <div className="col-span-2 xl:col-span-1">
          <label className="block text-text text-sm font-bold mb-2">
            Postitoimipaikka
          </label>
          <input
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            id="username"
            type="text"
            placeholder="Postitoimipaikka"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-text text-sm font-bold mb-2">
            Lisätietoa
          </label>
          <textarea
            className="shadow appearance-none shadow-hover border border-background rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline placeholder-main"
            name="comment"
            form="usrform"
            placeholder="Lisätietoa esimerkiksi maskin käytöstä tai erityistarpeista"
          />
        </div>
      </div>
      <button className="shadow-hover w-full p-4 shadow rounded text-center text-background bg-active hover:bg-hover ">
        Varaa aika
      </button>
      <div className="text-sm mb-6">
        <p className="font-semibold">HUOM!</p>
        <p>
          Peruutus tulee tehdä vähintään 24 tuntia ennen vastaanottoajan alkua
          puhelimitse. Mikäli varattua palvelua ei peruta peruutusajan
          puitteissa, veloitetaan 40,00 €.
        </p>
        <p className="mt-2">
          Yksilöllisesti valmistettavilla tuotteilla on 3kk takuu, jonka aikana
          muokkauksia voidaan tehdä veloituksetta. Yksilöllisesti
          valmistettavilla tuotteilla ei ole vaihto- eikä palautusoikeutta.
        </p>
        <p className="mt-2">Pidätämme oikeuden hinnanmuutoksiin.</p>
      </div>
    </div>
  );
};

export default Ajanvaraus;