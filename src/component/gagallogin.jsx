import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const GagalLogin = ({ popUp, setPopupLogin }) => {
    if (!popUp) return null; // Jika popup tidak aktif, jangan render apa pun

    const handleClose = () => {
        setPopupLogin(false); // Menutup popup
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-80 text-center z-20">
                <FaRegCircleCheck className="text-green-500 text-5xl mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800 mb-6">Password atau username Salah</p>
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

export default GagalLogin;