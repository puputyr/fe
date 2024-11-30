import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
const KelurahanList = ({ kecamatanId }) => {
  const [kelurahanList, setKelurahanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (kecamatanId) {
      const fetchKelurahan = async () => {
        try {
          const response = await axios.get(
            "https://api.binderbyte.com/wilayah/kelurahan",
            { params: { api_key: API_KEY, id_kecamatan: kecamatanId } }
          );
          setKelurahanList(response.data.value);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchKelurahan();
    }
  }, [kecamatanId]);
  if (!kecamatanId) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {" "}
      <h3>Daftar Kelurahan/Desa</h3>{" "}
      <ul>
        {" "}
        {kelurahanList.map((kelurahan) => (
          <li key={kelurahan.id}>{kelurahan.name}</li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};
export default KelurahanList;
