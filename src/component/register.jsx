import { useState } from "react";

import BerhasilRegister from "./berhasilregister";

function Register() {
  // State untuk input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [popupRegister, setPopupRegister] = useState(false);

  // Handler untuk perubahan input
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  // Handler untuk form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Tampilkan nilai state
    console.log({ username, password, role });

    // Implementasi pengiriman data ke server atau logika lainnya
    // Example: send data to API endpoint using fetch or axios
  };
  return (
    <><div className="bg-gradient-to-b from-purple-200 to-purple-900 min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-purple-200 p-8 rounded-xl shadow-lg w-full max-w-md sm:p-6 md:p-8 space-y-4">
        <h2 className="text-white text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-3 rounded-lg bg-beige-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="psikolog">Psikolog</option>
            <option value="psikolog">Psikolog</option>
            <option value="psikolog">Psikolog</option>
          </select>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault(); // Menghindari refresh halaman
              handleSubmit(e); // Panggil fungsi handleSubmit
              setPopupRegister(true)
              console.log(popupRegister)
              // Tambahkan logika lain jika perlu
            } }
            className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
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
    { popupRegister &&
    <BerhasilRegister popUp={popupRegister} setPopupRegister={setPopupRegister} />
  }
  </>
  );
}

export default Register;
