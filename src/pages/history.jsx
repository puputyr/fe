import Histori from "../component/histori";
import React from "react";
import Navbar_User from "../component/navbaruser";

function History() {
  const halaman = "History"
  return (
    <div className="flex ">
      <Navbar_User halaman={halaman} />
      <Histori />
    </div>
  );
}

export default History;