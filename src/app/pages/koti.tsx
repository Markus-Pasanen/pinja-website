import Button from "../components/button";

const koti = () => {
  return (
    <div className="w-screen min-h-[calc(100dvh)] bg-hover bg-cover flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-5xl text-nowrap">Pinja Pasanen</h1>
        <h2 className="text-xl pb-10">Jalkaterapeuttiopiskelija</h2>
        <Button reference="4" name="Varaa aika" secondary={true} />
    </div>
  );
};

export default koti;
