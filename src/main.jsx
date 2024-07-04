import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./Navbar/navbar.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import "boxicons";
import DaftarLomba from "./pages/daftarlomba.jsx";
import Lomba from "./components/Lomba.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
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
    path: "/daftarlomba",
    element: <DaftarLomba />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
