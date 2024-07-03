import Navbar from "../Navbar/navbar";
import Button from "../components/Button";
import Lomba from "../components/Card";

const DaftarLomba = (props) => {
  const { textColor = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent" } = props;
  return (
    <div className=" items-center">
      <Navbar />
      <div className="mt-28">
        <div className="flex justify-center">
          <h1 className={`text-4xl text-center font-bold ${textColor}`}> INFORMASI LOMBA</h1>
          <Button title="Unggah Lomba" textColor="text-white" />
        </div>
        <div className="mt-10 grid grid-cols-4 gap-7 mx-5">
          <Lomba />
          <Lomba />
          <Lomba />
          <Lomba />
          <Lomba />
          <Lomba />
          <Lomba />
          <Lomba />
        </div>
      </div>
    </div>
  );
};

export default DaftarLomba;
