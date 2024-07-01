import Navbar from "./Navbar/navbar";
import Button from "./components/Button";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center w-full min-h-screen">
        <Home />
      </div>
    </div>
  );
}

export default App;
