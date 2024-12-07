import React, { useState } from "react";

function Settings() {
  const [formData, setFormData] = useState({
    username: "ciskek12_",
    whatsapp: "********6172",
    password: "********",
    profilePic: null, // Menyimpan gambar profil
  });

  // Menyimpan status edit untuk setiap field
  const [editMode, setEditMode] = useState({
    username: false,
    whatsapp: false,
    password: false,
  });

  // Fungsi untuk mengedit data pengguna
  const handleEdit = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Fungsi untuk mengubah foto profil
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePic: reader.result, // Menyimpan gambar sebagai data URL
        }));
      };
      reader.readAsDataURL(file); // Membaca file gambar sebagai URL
    }
  };

  return (
    <div className="bg-purple-200 w-full h-screen flex items-center justify-center p-15">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            {/* Menampilkan gambar profil jika ada */}
            <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center overflow-hidden">
              {formData.profilePic ? (
                <img
                  src={formData.profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl text-white font-bold">SA</span>
              )}
            </div>
            {/* Tombol untuk mengganti foto profil */}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
              id="profilePicInput"
            />
            <label
              htmlFor="profilePicInput"
              className="cursor-pointer text-purple-500 hover:underline text-lg"
            >
              Ubah foto Profil
            </label>
          </div>
        </div>

        {/* Settings Fields */}
        <div className="space-y-6">
          {/* Username */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md text-gray-500">USERNAME</h3>
              {editMode.username ? (
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  className="font-medium p-3 border placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded w-full"
                />
              ) : (
                <p className="font-medium text-lg">{formData.username}</p>
              )}
            </div>
            {editMode.username ? (
              <button
                onClick={() => handleSave("username")}
                className="text-purple-500 hover:underline text-lg"
              >
                Simpan
              </button>
            ) : (
              <button
                onClick={() => handleEdit("username")}
                className="text-purple-500 hover:underline text-lg"
              >
                Edit
              </button>
            )}
          </div>

          {/* WhatsApp Number */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md text-gray-500">WHATSAPP NUMBER</h3>
              {editMode.whatsapp ? (
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="font-medium p-3 border placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded w-full"
                />
              ) : (
                <p className="font-medium text-lg">{formData.whatsapp}</p>
              )}
            </div>
            {editMode.whatsapp ? (
              <button
                onClick={() => handleSave("whatsapp")}
                className="text-purple-500 hover:underline text-lg"
              >
                Simpan
              </button>
            ) : (
              <button
                onClick={() => handleEdit("whatsapp")}
                className="text-purple-500 hover:underline text-lg"
              >
                Edit
              </button>
            )}
          </div>

          {/* Password */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md text-gray-500">PASSWORD</h3>
              {editMode.password ? (
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="font-medium p-3 border placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900 rounded w-full"
                />
              ) : (
                <p className="font-medium text-lg">********</p>
              )}
            </div>
            {editMode.password ? (
              <button
                onClick={() => handleSave("password")}
                className="text-purple-500 hover:underline text-lg"
              >
                Simpan
              </button>
            ) : (
              <button
                onClick={() => handleEdit("password")}
                className="text-purple-500 hover:underline text-lg"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
