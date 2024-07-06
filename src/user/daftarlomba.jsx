import Navbar from "../Navbar/navbar";
import Button from "../components/Button";
import Lomba from "../components/Lomba";

const daftarLomba = [
  {
    id: 1,
    image: "./public/lomba/lomba1.jpg",
    kategori: "Comedy",
    namaLomba: "The 15th Business Case Competition",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi: "",
  },
  {
    id: 2,
    image: "./public/lomba/lomba1.jpg",
    kategori: "Comedy",
    namaLomba: "The 15th Business Case Competition",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi : "",
  },
  {
    id: 2,
    image: "./public/lomba/lomba1.jpg",
    kategori: "Comedy",
    namaLomba: "The 15th Business Case Competition",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi : "",
  },
  {
    id: 2,
    image: "./public/lomba/lomba1.jpg",
    kategori: "Comedy",
    namaLomba: "The 15th Business Case Competition",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi : "",
  },
];

const DaftarLomba = (props) => {
  return (
    <div className=" items-center">
      <Navbar />
      <div className="mt-28 min-h-screen">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent"> INFORMASI LOMBA</h1>
        <div className="mt-5 grid grid-cols-4 gap-7 mx-5">
          {daftarLomba.map((lomba) => (
            <Lomba>
              <Lomba.Header image={lomba.image} />
              <Lomba.Category category={lomba.kategori} />
              <Lomba.Body namaLomba={lomba.namaLomba} penyelenggara={lomba.penyelenggara} tanggal={lomba.tanggal} />
            </Lomba>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarLomba;
