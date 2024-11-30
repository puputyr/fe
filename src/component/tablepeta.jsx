import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from 'react-icons/fa';


const TablePeta = () => {
  const initialPeta = [
    { id: 1, lokasi: "CCTV Jembatan Suramadu", koordinat: "7.1565, 112.7182" },
    { id: 2, lokasi: "CCTV Taman Bungkul", koordinat: "7.2804, 112.7389" },
  ];

  const [petaData, setPetaData] = useState(initialPeta);
  const [form, setForm] = useState({ id: null, lokasi: "", koordinat: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Fungsi untuk menangani input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Fungsi untuk menambah atau memperbarui data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPetaData(
        petaData.map((peta) => (peta.id === form.id ? { ...form } : peta))
      );
      setIsEditing(false);
    } else {
      setPetaData([...petaData, { ...form, id: petaData.length + 1 }]);
    }
    setForm({ id: null, lokasi: "", koordinat: "" });
  };

  // Fungsi untuk mengedit data
  const handleEdit = (id) => {
    const petaToEdit = petaData.find((peta) => peta.id === id);
    setForm(petaToEdit);
    setIsEditing(true);
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    setPetaData(petaData.filter((peta) => peta.id !== id));
  };

  return (
    <div className="p-6 w-full h-screen overflow-scroll">
      <h1 className="text-2xl font-semibold mb-4">Data Peta</h1>
      <form onSubmit={handleFormSubmit} className="mb-6 flex gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-1">Lokasi</label>
          <input
            type="text"
            name="lokasi"
            value={form.lokasi}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Masukkan Lokasi"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Koordinat</label>
          <input
            type="text"
            name="koordinat"
            value={form.koordinat}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Masukkan Koordinat"
            required
          />
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            isEditing ? "bg-purple-900 text-white" : "bg-purple-900 text-white"
          }`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Lokasi</th>
            <th className="border border-gray-300 px-4 py-2">Koordinat</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {petaData.map((peta) => (
            <tr key={peta.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{peta.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {peta.lokasi}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {peta.koordinat}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleEdit(peta.id)}
                  className="text-blue-600 px-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(peta.id)}
                  className="text-red-600 px-2"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePeta;
