import Navbar from "../Navbar/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-bold mt-28 text-center bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent">About</h1>
      <div className="grid mx-40 grid-cols-2 mt-16">
        <p className="text-3xl font-semibold">Apa itu Lombain?</p>
        <p className="text-3xl font-semibold">LombaIN adalah platform inovatif yang diciptakan untuk membantu Anda menemukan berbagai kompetisi dan lomba menarik di seluruh Indonesia. Apakah Anda seorang pelajar, mahasiswa, profesional, atau hanya seseorang yang suka tantangan, LombaFinder adalah tempat yang tepat untuk Anda mencari dan berpartisipasi dalam berbagai lomba yang sesuai dengan minat dan bakat Anda.
        </p>
      </div>
    </div>
  );
};
export default About;
