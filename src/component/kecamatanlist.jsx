import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
const KecamatanList = ({ kabupatenId, onKecamatanSelect }) => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (kabupatenId) {
      const fetchKecamatan = async () => {
        try {
          const response = await axios.get(
            "https://api.binderbyte.com/wilayah/kecamatan",
            { params: { api_key: API_KEY, id_kabupaten: kabupatenId } }
          );
          setKecamatanList(response.data.value);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchKecamatan();
    }
  }, [kabupatenId]);
  if (!kabupatenId) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {" "}
      <h3>Pilih Kecamatan</h3>{" "}
      <select onChange={(e) => onKecamatanSelect(e.target.value)}>
        {" "}
        <option value="">Pilih Kecamatan</option>{" "}
        {kecamatanList.map((kecamatan) => (
          <option key={kecamatan.id} value={kecamatan.id}>
            {" "}
            {kecamatan.name}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
};
export default KecamatanList;