import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar_Admin({ halaman }) {
  const [activeItem, setActiveItem] = useState(halaman);
  const [isOpen, setIsOpen] = useState(true); // State untuk mengontrol sidebar
  const navigate = useNavigate();
  const menuItems = [
    { name: "Peta Interaktif", path: "/halpeta", icon: "/lgpeta.png" },
    {
      name: "Pengaduan dan Dukungan",
      path: "/pengaduantim",
      icon: "/lgcs.png",
    },
    { name: "History", path: "/history", icon: "/lghistori.png" },
    { name: "Settings", path: "/settings", icon: "/setting.png" },
  ];

  const handleNavigation = (name, path) => {
    if (activeItem !== name) {
      setActiveItem(name);
      navigate(path); // redirect ke halaman yang dipilih
    }
  };
  useEffect(() => {
    console.log("Active item updated:", activeItem);
  }, [activeItem]);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`Sidebar flex-none h-screen pt-20 relative flex flex-col items-center gap-8 bg-gradient-to-b from-purple-200 to-purple-900 duration-500 ${
          isOpen ? "w-72" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-5 left-5 text-white px-2 py-1 rounded"
        >
          {isOpen ? (
            <IoClose className="w-6 h-6 text-gray-500" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6 text-gray-500" />
          )}
        </button>

        {/* Profile Picture */}
        {isOpen && (
          <div className="Pic w-70 h-50">
            <img src="/logo.png" alt="Foto Profil" className="w-full h-full" />
          </div>
        )}

        {/* User Info */}
        {isOpen && (
          <div className="text-center text-stone-900">
            <div className="text-xl font-medium font-['Poppins']">AISEE</div>
            {/* nama pengguna */}
            <div className="text-sm font-normal font-['Poppins']">
              Tim Medis
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="space-y-2 flex-grow w-full relative">
          {menuItems.map((item) => (
            <div
              key={`${item.name}`} // Key menggabungkan nama dan activeItem untuk memaksa re-render
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(item.name, item.path);
              }}
            >
              <div
                className={`Item w-full duration-500 px-4 py-3 flex items-center gap-4 cursor-pointer ${
                  activeItem == item.name
                    ? "bg-stone-700 text-white"
                    : " text-stone-900"
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-6 h-6"
                />
                {isOpen ? item.name : <span>{}</span>}
                {/* Rectangle sebelah kanan */}
                {activeItem === item.name && isOpen && (
                  <div className="Rectangle11 w-2 h-full bg-stone-200 absolute right-0 top-0" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Log Out */}
        <div
          className={`relative w-full duration-500 px-4 py-3 mb-10 cursor-pointer flex items-center gap-4 ${
            activeItem === "Log Out"
              ? "bg-stone-500 text-white"
              : "text-stone-900"
          }`}
          onClick={() => {
            localStorage.removeItem("token"); // menghapus token saat logout
            navigate("/landingpage");
          }}
        >
          {/* Log Out Icon */}
          <img src="/keluar.png" alt="Log Out icon" className="w-6 h-6" />
          <div className="LogOut text-lg font-normal">
            {isOpen ? "Log Out" : ""}
          </div>
          {activeItem === "Log Out" && isOpen && (
            <div className="Rectangle11 w-2 h-full bg-stone-200 absolute right-0 top-0" />
          )}
        </div>
      </div>
    </div>
  );
}
