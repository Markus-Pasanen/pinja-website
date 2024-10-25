import { GiFootprint } from "react-icons/gi";

const footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center bg-background gap-6 py-6">
      <div className="relative flex items-center w-full">
        <div className="flex-grow border-t border-main"></div>
        <span className="flex flex-row mx-4 gap-4 font-semibold">
        <div className="hover:scale-150 ease-in duration-1000"><GiFootprint /></div>
        </span>
        <div className="flex-grow border-t border-main"></div>
      </div>
      <div>
        <p>Copyright 2024 @ Pinja Pasanen</p>
      </div>
    </div>
  );
};

export default footer;

