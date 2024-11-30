import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BerhasilLogin from "./berhasillogin";
import GagalLogin from "./gagallogin";
import axios from "axios";

function Login() {
  // State untuk input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupGagalLogin, setPopupGagalLogin] = useState(false);

  const postLogin = async (data) => {
    let isSuccesLogin = false
    const url = 'https://jsonplaceholder.typicode.com/posts'; //  ganti api backend
    try {
      const response = await axios.post(url, data);
      console.log(response.data.password);
      if(response.data.password == "true"){ 
        localStorage.setItem("token", "puput");
        return true
      }else{
        return false
      }
      if (response) {
        // kalo login berhasil
        isSuccesLogin = true
      } else {
        // kalo login gagal password salah atau yg lain
        isSuccesLogin = false
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      isSuccesLogin = false
    } finally {
      // return isSuccesLogin
    }
  }

  // Hook navigasi
  const navigate = useNavigate();

  // Handler untuk perubahan input
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handler untuk form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Validasi input sebelum melanjutkan
    if (!username || !password) {
      alert("Harap isi username dan password.");
      return;
    }

    // Tampilkan nilai state (debugging)
    console.log({ username, password });
    let isSuccesLoginHandle = await postLogin({ username, password })
    console.log("🚀 ~ handleSubmit ~ isSuccesLoginHandle:", isSuccesLoginHandle)
    if (isSuccesLoginHandle) {
      setPopupLogin(true);
    }else{
      setPopupGagalLogin(true)
    }

  };

  return (
    <>
      <div className="bg-gradient-to-b from-purple-200 to-purple-900 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-b from-purple-200 p-8 rounded-xl shadow-lg w-full max-w-md sm:p-6 md:p-8 space-y-4">
          <h2 className="text-white text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Login
            </button>
          </form>
          <div className="space-y-4 text-center">
            <p className="text-white">
              Belum punya akun?{" "}
              <a
                href="/halregister"
                className="underline hover:text-purple-300"
              >
                Daftar sekarang
              </a>
            </p>
            <a
              onClick={() => navigate("/landing")} // Arahkan ke halaman landing

              href="/landingpage"
              className="text-white underline hover:text-purple-300"
            >
              Continue as Guest
            </a>

          </div>
        </div>
      </div>
      {popupGagalLogin && (
        <GagalLogin popUp={popupGagalLogin} setPopupLogin={setPopupGagalLogin} />
      )}
      {popupLogin && (
        <BerhasilLogin popUp={popupLogin} setPopupLogin={setPopupLogin} />
      )}
    </>
  );
}

export default Login;
