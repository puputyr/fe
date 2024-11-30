import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../config';

const ProvinsiList = ({ onProvinsiSelect }) => {
  const [provinsiList, setProvinsiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        const response = await axios.get('https://api.binderbyte.com/wilayah/provinsi', {
          params: { api_key: API_KEY },
        });
        setProvinsiList(response.data.value);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinsi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Select Provinsi</h2>
      <ul>
        {provinsiList.map((provinsi) => (
          <li key={provinsi.id} onClick={() => onProvinsiSelect(provinsi)}>
            {provinsi.nama}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvinsiList;
