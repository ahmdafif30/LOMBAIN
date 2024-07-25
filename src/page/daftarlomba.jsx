import { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Button from "../components/Button";
import Lomba from "../components/Lomba";
import axios from "axios";
import { Link } from "react-router-dom";

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
    kategori: "Kerapihan",
    namaLomba: "Menulis",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi: "",
  },
  {
    id: 3,
    image: "./public/lomba/lomba1.jpg",
    kategori: "keterampilan",
    namaLomba: "Menggambar",
    penyelenggara: "PT Perkasa",
    tanggal: "17 Agustus 1945",
    deskripsi: "",
  },
  {
    id: 4,
    image: "./public/lomba/lomba1.jpg",
    kategori: "Kreatifitas",
    namaLomba: "Lomba Mewarnai",
    penyelenggara: "Tadika Mesra",
    tanggal: "17 Agustus 2024",
    deskripsi: "",
  },
];

const DaftarLomba = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [daftarLomba, setDaftarLomba] = useState([]);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLomba = daftarLomba.filter(
    (lomba) => lomba.namaLomba.toLowerCase().includes(searchQuery.toLowerCase()) || lomba.kategori.toLowerCase().includes(searchQuery.toLowerCase()) || lomba.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    axios
      .get("http://localhost:3000/daftarLomba")
      .then((response) => {
        setDaftarLomba(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" items-center">
      <Navbar />
      <div className="mt-28 min-h-screen">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent"> INFORMASI LOMBA</h1>
        <div className="flex justify-end px-10">
          <Link to={"/buatlomba"}><Button title="Unggah Lomba" textColor="text-white" /></Link>
        </div>
        <div className="flex justify-center mt-10">
          <input 
          type="text" 
          placeholder="Cari lomba..." 
          value={searchQuery} 
          onChange={handleSearch} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mt-5 grid grid-cols-4 gap-7 mx-5">
          {filteredLomba.map((lomba) => (
            <Lomba key={lomba.id}>
              <Lomba.Header image={lomba.image} />
              <Lomba.Category category={lomba.kategori} />
              <Lomba.Body namaLomba={lomba.namaLomba} penyelenggara={lomba.penyelenggara} tanggal={lomba.tanggalMulai} deskripsi={lomba.deskripsi} />
            </Lomba>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarLomba;
