import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/home.jsx";
import Navbar from "./Navbar/navbar.jsx";
import About from "./page/about.jsx";
import Contact from "./page/contact.jsx";
import "boxicons";
import Lomba from "./components/Lomba.jsx";
import BuatLomba from "./admin/buatlomba.jsx";
import DaftarLomba from "./page/daftarlomba.jsx";
import Authlayout from "./layout/Authlayout.jsx";
import InputForm from "./Input/InputForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/lomba",
    element: <Lomba />,
  },
  {
    path: "/buatlomba",
    element: <BuatLomba />,
  },
  {
    path: "/daftarlomba",
    element: <DaftarLomba />,
  },
  {
    path: "/login",
    element: <InputForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
