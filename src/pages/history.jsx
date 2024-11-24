import Navbar from "../component/navbar";
import Histori from "../component/histori";
import React from "react";

function History() {
  const halaman = "History"
  return (
    <div className="flex ">
      <Navbar halaman={halaman} />
      <Histori />
    </div>
  );
}

export default History;