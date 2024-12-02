import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import axios from "axios";

const PopupNotification = ({ popUp, type, setPopup, data, Callback }) => {
  if (!popUp) return null; // Jika popup tidak aktif, jangan render apa pun

  // Pesan dan ikon berdasarkan tipe popup
  const messageMap = {
    usernameEmpty: "Username belum diisi",
    passwordEmpty: "Password belum diisi",
    loginSuccess: "Berhasil Login",
    registerSuccess: "Berhasil Register",
    loginFailed: "Password atau Username salah",
    roleEmpty: "Role belum dipilih", // Menambahkan roleEmpty
  };
  
  const handleClose = () => {
    if (type == "registerSuccess") {
      handleLoginwhenregisterSuccess(data);
      Callback()
    }
    setPopup(false); // Menutup popup
  };
  const handleLoginwhenregisterSuccess = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Fungsi untuk mengirimkan permintaan POST
    axios
      .post(
        "http://localhost:5000/login",
        { name: data.name, password: data.password },
        config
      )
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  // Tentukan apakah ada error, termasuk roleEmpty dan loginFailed
  const isError =
    type === "loginFailed" ||
    type === "roleEmpty" ||
    type === "usernameEmpty" ||
    type === "passwordEmpty";

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Popup Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-80 text-center z-20">
        {/* Ikon berdasarkan tipe */}
        {isError ? (
          <FiAlertCircle className="text-5xl text-red-500 mx-auto mb-4" />
        ) : (
          <FaRegCircleCheck className="text-5xl text-green-500 mx-auto mb-4" />
        )}

        {/* Pesan */}
        <p className="text-lg font-semibold text-gray-800 mb-6">
          {messageMap[type]}
        </p>

        {/* Tombol OK */}
        <button
          onClick={handleClose}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          OK
        </button>
      </div>
    </>
  );
};

// Prop validation
PopupNotification.propTypes = {
  popUp: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    "usernameEmpty",
    "passwordEmpty",
    "loginSuccess",
    "registerSuccess",
    "loginFailed",
    "roleEmpty",
  ]).isRequired,
  setPopup: PropTypes.func.isRequired,
};

export default PopupNotification;
