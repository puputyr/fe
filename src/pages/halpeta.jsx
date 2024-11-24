import React from "react";
import Peta from "../component/peta";
import Navbar from "../component/navbar";
import Judulpeta from "../component/judulpeta";

function Halpeta() {
  const halaman = "Peta Interaktif"

  return (
    <div className="flex">
      <Navbar halaman={halaman} />
      <div className="w-full h-screen">
        <div className="h-24 flex items-center fixed z-50 bg-white/50 top-0 px-24 w-full">
          <Judulpeta />
        </div>
        <div className="relative w-full h-full">
          <div className="z-10 w-full h-full absolute">
            <Peta />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halpeta;
