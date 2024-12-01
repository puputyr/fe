import { useState } from "react";
import PopupNotification from "./popuploginregister";
// import ProvinsiList from "./ProvinsiList";

function Register() {
  // State untuk input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  // const [provinsi, setProvinsi] = useState(""); // Tambahkan state untuk provinsi
  const [popupRegister, setPopupRegister] = useState(false);
  const [popupType, setPopupType] = useState(""); // Menyimpan tipe popup

  // Handler untuk perubahan input
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  // Handler untuk pemilihan provinsi
  // const handleProvinsiSelect = (selectedProvinsi) => {
  //   setProvinsi(selectedProvinsi.nama); // Menyimpan nama provinsi
  // };

  // Handler untuk form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Validasi input
    if (username === "") {
      setPopupRegister(true);
      setPopupType("usernameEmpty");
      return; // Menghentikan eksekusi lebih lanjut
    } else if (password === "") {
      setPopupRegister(true);
      setPopupType("passwordEmpty");
      return; // Menghentikan eksekusi lebih lanjut
    } else if (role === "") {
      setPopupRegister(true);
      setPopupType("roleEmpty");
      return; // Menghentikan eksekusi lebih lanjut
    // } else if (provinsi === "") {
    //   setPopupRegister(true);
    //   setPopupType("provinsiEmpty");
      return; // Validasi provinsi
    }

    // Jika registrasi berhasil
    setPopupRegister(true);
    setPopupType("registerSuccess"); // Menampilkan popup registrasi sukses

    // Implementasi pengiriman data ke server atau logika lainnya
    console.log({ username, password, role });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-purple-200 to-purple-900 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-b from-purple-200 p-8 rounded-xl shadow-lg w-full max-w-md sm:p-6 md:p-8 space-y-4">
          <h2 className="text-white text-2xl font-bold text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
            <select
              value={role}
              onChange={handleRoleChange}
              className="w-full p-3 rounded-lg bg-beige-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="psikolog">Psikolog</option>
            </select>
            {/* Provinsi List
            <ProvinsiList onProvinsiSelect={handleProvinsiSelect} /> */}
            <button
              type="submit"
              className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-900"
            >
              Register
            </button>
          </form>
          <p className="text-center text-white">
            <a href="landingpage" className="underline hover:text-purple-300">
              Continue as Guest
            </a>
          </p>
        </div>
      </div>
      {/* Popup untuk registrasi */}
      {popupRegister && (
        <PopupNotification
          popUp={popupRegister}
          type={popupType}
          setPopup={setPopupRegister}
        />
      )}
    </>
  );
}

export default Register;
