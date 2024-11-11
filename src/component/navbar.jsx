import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Peta Interaktif", path: "/halpeta" },
    { name: "Pengaduan dan Dukungan", path: "/pengaduantim" },
    { name: "History", path: "/history" },
    { name: "Settings", path: "/settings" },
  ];

  const handleNavigation = (name, path) => {
    setActiveItem(name);
    navigate(path);
  };

  return (
    <div className="Sidebar flex-none w-72 h-screen pt-20 relative flex flex-col items-center gap-8 bg-gradient-to-b from-purple-200 to-purple-900">
      <div className="Pic w-28 h-28">
        <img
          src="/lgakun.png"
          alt="Foto Profil"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="BuildwithAngga text-center text-stone-900 text-xl font-medium font-['Poppins']">
        BuildWith Angga
      </div>

      <div className="TimMedis text-center text-stone-900 text-sm font-normal font-['Poppins']">
        Tim Medis
      </div>

      <div className="space-y-2 flex-grow w-full relative">
        {menuItems.map(({ name, path }) => (
          <div key={name} className="relative">
            <div
              className={`Item w-full duration-500 px-4 py-3 flex justify-between items-center cursor-pointer ${
                activeItem === name ? "bg-stone-500 text-white" : "text-stone-900"
              } text-lg font-normal`}
              onClick={() => handleNavigation(name, path)}
            >
              {name}
              {activeItem === name && (
                <div className="Rectangle11 w-2 h-full bg-stone-200 absolute right-0" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Log Out at the bottom */}
      <div
        className={`relative w-full duration-500 px-4 py-3 mb-10 cursor-pointer ${
          activeItem === "Log Out" ? "bg-stone-500 text-white" : "text-stone-900"
        }`}
        onClick={() => handleNavigation("Log Out", "/landingpage")}
      >
        <div className="LogOut text-lg font-normal">Log Out</div>
        {activeItem === "Log Out" && (
          <div className="Rectangle11 w-2 h-full bg-stone-200 absolute right-0 top-0" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
