import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  // Function to handle navigation based on the item clicked
  const handleNavClick = (path) => {
    navigate(path);
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Tentang Kami", 
      path: "/welcome.jsx",
      onClick: () => {
        const footer = document.getElementById("about");
        return footer?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      },},
    { name: "Partner", 
      path: "/partner.jsx",
      onClick: () => {
        const footer = document.getElementById("partner");
        return footer?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      },},
    { name: "Fitur", 
      path: "/feature.jsx",
      onClick: () => {
        const footer = document.getElementById("fitur");
        return footer?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      },
    },
    {
      name: "Contact",
      path: "/footer.jsx",
      onClick: () => {
        const footer = document.getElementById("footer");
        return footer?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      },
    },
  ];

  return (
    <div
      className="hero-container flex flex-col h-screen relative text-white bg-cover lg:bg-contain py-10"
      style={{ backgroundImage: `url('/header.png')` }}
    >
      {/* Navbar Section */}
      <nav className="navbar absolute top-0 w-full flex items-center justify-center px-12 py-6">
        <div className="flex space-x-12">
          {navigation.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                item.onClick ? item.onClick() : handleNavClick(item.path)
              }
              className="text-2xl font-medium text-stone-900 cursor-pointer hover:underline"
            >
              {item.name}
            </div>
          ))}
        </div>
        <button
          onClick={handleLoginClick}
          className="btn-login absolute w-36 h-12 bg-purple-900 text-white text-base font-semibold rounded-xl flex items-center justify-center right-7"
        >
          Login
        </button>
      </nav>
      {/* Tagline Section */}
      <div className="flex items-center justify-between px-12 mt-40">
        <div className="tagline text-left space-y-4 mb-8 max-w-md">
          <h1 className="text-6xl font-bold font-['Inter']">
            Selamat datang di Aisee
          </h1>
          <p className="text-xl font-light absolute max-w-2xl">
            Kami percaya pada kekuatan teknologi untuk menyelamatkan nyawa.
            Sistem canggih kami menggabungkan CCTV, AI, dan pemantauan waktu nyata 
            untuk mengidentifikasi dan mencegah upaya bunuh diri, 
            serta memberikan intervensi segera saat dibutuhkan.
          </p>
        </div>

        <div className="image-container flex-shrink-0">
          <img src="/pictcctv.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
