import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const yhteystiedot = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-lvh flex justify-center items-center text px-10"
    >
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <h1 className="text-5xl text-center">Ota yhteyttä</h1>
        <h1 className="text-2xl text-center font-semibold">
          <a
            href="tel:0451032606"
            className="flex items-center justify-center gap-4 hover:scale-105 ease-out duration-300"
          >
            <FaPhone />
            0451032606
          </a>
        </h1>
        <h1 className="text-2xl text-center font-semibold">
          <a
            href="mailto: jalkaterapia.pinja@gmail.com"
            className="flex items-center justify-center gap-4 hover:scale-105 ease-out duration-300"
          >
            <MdEmail />
            jalkaterapia.pinja@gmail.com
          </a>
        </h1>

        <p className="text-lg">
          Jos sinulla on kysymyksiä tai haluat varata ajan, älä epäröi ottaa
          yhteyttä. Olen täällä auttamassa sinua ja tarjoamassa parasta
          mahdollista jalkaterapiaa.
        </p>
        <p className="text-lg">Lämpimästi tervetuloa vastaanotolleni!</p>
        <p className="text-lg font-bold">
          Pinja Pasanen
          <br />
          Jalkaterapeuttiopiskelija
        </p>
      </div>
    </div>
  );
};

export default yhteystiedot;
