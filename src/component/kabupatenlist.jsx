import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
const KabupatenList = ({ provinsiId, onKabupatenSelect }) => {
  const [kabupatenList, setKabupatenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (provinsiId) {
      const fetchKabupaten = async () => {
        try {
          const response = await axios.get(
            "https://api.binderbyte.com/wilayah/kabupaten",
            { params: { api_key: API_KEY, id_provinsi: provinsiId } }
          );
          setKabupatenList(response.data.value);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchKabupaten();
    }
  }, [provinsiId]);
  if (!provinsiId) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {" "}
      <h3>Pilih Kabupaten/Kota</h3>{" "}
      <select onChange={(e) => onKabupatenSelect(e.target.value)}>
        {" "}
        <option value="">Pilih Kabupaten/Kota</option>20
        {kabupatenList.map((kabupaten) => (
          <option key={kabupaten.id} value={kabupaten.id}>
            {" "}
            {kabupaten.name}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
};
export default KabupatenList;
