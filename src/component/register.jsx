import { useState } from "react";
import PopupNotification from "./popuploginregister";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import ProvinsiList from "./ProvinsiList";

function Register() {
  // State untuk input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [no_whatsapp, setNo_whatsapp] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const [popupRegister, setPopupRegister] = useState(false);
  const [popupType, setPopupType] = useState(""); // Menyimpan tipe popup

  // Handler untuk perubahan input
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleNo_whatsappChange = (e) => setNo_whatsapp(e.target.value);
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const navigate = useNavigate();

  const handleCallbackRegister = () => {
    if (role === "psikolog") {
      navigate("/halpeta");
    } else if (role === "tim medis") {
      navigate("/halpeta"); // Sesuaikan dengan rute yang relevan
    } else if (role === "tim keamanan") {
      navigate("/halpeta"); // Sesuaikan dengan rute yang relevan
    } else if (role === "umum") {
      navigate("/pengaduananonymous"); // Sesuaikan dengan rute yang relevan
    }
  };
  
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
      return;
    } else if (no_whatsapp === "") {
      setPopupRegister(true);
      setPopupType("no_whatsappEmpty");
      return;
    }

    // Jika registrasi berhasil
    setPopupRegister(true);
    setPopupType("registerSuccess"); // Menampilkan popup registrasi sukses

    // Implementasi pengiriman data ke server atau logika lainnya
    console.log({ username, password, role });
    //
    // Konfigurasi endpoint API expressjs
    console.log(profilePicture);
    const formData = new FormData();
    formData.append("name", username);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("no_whatsapp", no_whatsapp);

    if (true) {
      formData.append("img", profilePicture);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Fungsi untuk mengirimkan permintaan POST
    axios
      .post("http://localhost:5000/register", formData, config)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-purple-200 to-purple-900 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-b from-purple-200 p-8 rounded-xl shadow-lg w-full max-w-md sm:p-6 md:p-8 space-y-4">
          <h2 className="text-white text-2xl font-bold text-center">
            Register
          </h2>
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
            <input
              type="text"
              placeholder="No whatsapp aktif"
              value={no_whatsapp}
              onChange={handleNo_whatsappChange}
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
              <option value="tim medis">Tim Medis</option>
              <option value="tim keamanan">Tim Keamanan</option>
              <option value="psikolog">Psikolog</option>
              <option value="umum">Umum</option>
            </select>
            <label
              htmlFor="profilePicInput"
              className="w-full p-3 bg-white rounded-lg bg-beige-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-900 flex items-center justify-between"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                id="profilePicInput"
                className="w-full h-full bg-white bg-beige-200 text-gray-700"
              />
              <span className="text-gray-700 ml-3">Tambahkan Foto Profil</span>
            </label>

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
          data={{ name: username, password: password, role: role }}
          Callback={handleCallbackRegister}
        />
      )}
    </>
  );
}

export default Register;
