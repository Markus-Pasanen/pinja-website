import Button from "../components/button";

const koti = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-lvh bg-hover bg-cover flex flex-col justify-center items-center text-center px-10"
    >
      <h1 className="text-5xl text-nowrap">Pinja Pasanen</h1>
      <h2 className="text-xl pb-10">Jalkaterapeuttiopiskelija</h2>
      <Button reference="4" name="Varaa aika" color="bg-callToAction" />
    </div>
  );
};

export default koti;
