"use client";

interface propTypes {
  backgroundImg: string;
  mainImg: string;
  title: string;
  text: string;
  pricing: string;
  pricing2?: string;
}

const card =(props: propTypes) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 shadow-lg shadow-hover border border-background rounded w-full min-h-64 md:h-48 overflow-hidden">
      <div className="flex justify-between flex-col col-span-3 text-pretty gap-4 p-4">
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <p className="text-text text-base">{props.text}</p>
          <h3 className="text-xl font-semibold">{props.pricing}<br/>{props.pricing2}</h3>
      </div>
      <div
        className="h-full bg-main opacity-50 invisible md:visible -z-10"
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