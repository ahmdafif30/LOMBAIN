import Button from "../components/Button";

const DaftarLomba = (props) => {
  const { textColor = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent" } = props;
  return (
    <div className="flex justify-center mt-10 items-center">
      <div className="flex">
        <h1 className={`text-4xl text-center font-bold ${textColor}`}> INFORMASI LOMBA</h1>
        <Button title="Unggah Lomba" textColor="text-white" />
      </div>
    </div>
  );
};

export default DaftarLomba;
