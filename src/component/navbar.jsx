import React, { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="Sidebar flex-none w-72 h-screen pt-20 relative flex flex-col items-center gap-8 bg-gradient-to-b from-purple-200 to-purple-400">
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
        {[
          "Peta Interaktif",
          "Pengaduan dan Dukungan",
          "History",
          "Settings",
        ].map((item) => (
          <div key={item} className="relative">
            <div
              className={`Item w-full duration-1000 px-4 py-3 flex justify-between items-center ${
                activeItem === item
                  ? "bg-stone-500 text-white"
                  : "text-stone-900"
              } text-lg font-normal`}
              onClick={() => setActiveItem(item)}
            >
              {item}
              {activeItem === item && (
                <div className="Rectangle11 w-2 h-full bg-stone-200 absolute right-0" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Log Out di bawah */}
      <div
        className={`relative w-full duration-1000 px-4 py-3 mb-10 ${
          activeItem === "Log Out"
            ? "bg-stone-500 text-white"
            : "text-stone-900"
        }`}
        onClick={() => setActiveItem("Log Out")}
      >
        <div className="LogOut text-lg font-normal">Log Out</div>
        {activeItem === "Log Out" && (
          <div className="Rectangle11 w-2 h-full  bg-stone-200 absolute right-0 top-0" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
