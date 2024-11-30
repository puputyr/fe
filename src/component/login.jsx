import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupNotification from "./popuploginregister";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // Untuk menentukan tipe popup

  const postLogin = async (data) => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // Ganti API backend
    try {
      const response = await axios.post(url, data);
      if (response.data.password === "true") {
        localStorage.setItem("token", "puput");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return false;
    }
  };

  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setPopupType("usernameEmpty"); // Tampilkan popup jika username kosong
      setPopup(true);
      return; // Exit early to prevent further checks if username is empty
    } else if (!password) {
      setPopupType("passwordEmpty"); // Tampilkan popup jika password kosong
      setPopup(true);
      return; // Exit early to prevent further checks if password is empty
    }
    
    const isSuccessLogin = await postLogin({ username, password });

    if (isSuccessLogin) {
      setPopupType("loginSuccess");
      setPopup(true);
    } else {
      setPopupType("loginFailed");
      setPopup(true);
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
             
              placeholder="Username"
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
            <button
              type="submit"
              className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-900"
            >
              Login
            </button>
          </form>
          <div className="space-y-4 text-center">
            <p className="text-white">
              Belum punya akun?{" "}
              <a href="/halregister" className="underline hover:text-purple-300">
                Daftar sekarang
              </a>
            </p>
            <a
              onClick={() => navigate("/landing")}
              href="/landingpage"
              className="text-white underline hover:text-purple-300"
            >
              Continue as Guest
            </a>
          </div>
        </div>
      </div>

      {/* Popup Notification */}
      {popup && (
        <PopupNotification
          popUp={popup}
          type={popupType}
          setPopup={setPopup}
        />
      )}
    </>
  );
}

export default Login;
