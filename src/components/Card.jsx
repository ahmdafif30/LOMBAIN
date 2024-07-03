import Button from "./Button";

const Lomba = (props) => {
  const {title = "The 15th Business Case Competition", penyelenggara = "PT Perkasa", tanggal = "17 Agustus 1945", kategori = "Comedy"} = props

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow-lg">
        <div className="mb-3">
          <a href="#">
            <img src="./public/lomba/lomba1.jpg" className="rounded-lg border border-white w-full h-[300px]" alt="" />
          </a>
        </div>
        <div className="px-3">
          <Button title={kategori} textColor="text-black" color="bg-slate-200" size="lg"/>
        </div>
        <div className="p-3">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-slate-400">{penyelenggara}</p>
          <p className="font-semibold">{tanggal}</p>
        </div>
      </div>
    </div>
  );
};

export default Lomba;
