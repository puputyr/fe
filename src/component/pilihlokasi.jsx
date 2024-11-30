import React, { useState } from "react";
import ProvinsiList from "./provinsilist";
import KabupatenList from "./kabupatenlist";
import KecamatanList from "./kecamatanlist";
import KelurahanList from "./kelurahanlist";

function PilihLokasi() {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {" "}
        <h1>Data Wilayah Indonesia</h1>{" "}
        <h2>Selamat Datang di Aplikasi Data Wilayah</h2>{" "}
        <ProvinsiList onProvinsiSelect={setSelectedProvinsi} />{" "}
        {selectedProvinsi && (
          <KabupatenList
            provinsiId={selectedProvinsi}
            onKabupatenSelect={setSelectedKabupaten}
          />
        )}{" "}
        {selectedKabupaten && (
          <KecamatanList
            kabupatenId={selectedKabupaten}
            onKecamatanSelect={setSelectedKecamatan}
          />
        )}{" "}
        {selectedKecamatan && <KelurahanList kecamatanId={selectedKecamatan} />}{" "}
      </header>{" "}
    </div>
  );
}
export default PilihLokasi;
