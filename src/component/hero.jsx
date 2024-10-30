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

  return (
    <div
      className="hero-container flex flex-col min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/header.png')` }}
    >
      {/* Navbar Section */}
      <nav className="navbar absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6">
        <div className="flex space-x-12">
          {[
            { name: "Home", path: "/" },
            { name: "Tentang Kami", path: "/welcome.jsx" },
            { name: "Partner", path: "/partner.jsx" },
            { name: "Fitur", path: "/features.jsx" },
            { name: "Contact", path: "/footer.jsx" }
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(item.path)} // Add onClick for navigation
              className="text-2xl font-medium text-stone-900 cursor-pointer hover:underline"
            >
              {item.name}
            </div>
          ))}
        </div>
        <button
          onClick={handleLoginClick}
          className="btn-login w-36 h-12 bg-purple-900 text-white text-base font-semibold rounded-xl flex items-center justify-center"
        >
          Login
        </button>
      </nav>
      {/* Tagline Section */}
      <div className="flex items-center justify-between px-12 mt-40">
        {/* Text Content */}
        <div className="tagline text-left space-y-4 mb-8 max-w-lg">
          <h1 className="text-6xl font-bold font-['Inter']">
            Selamat datang di Aisee
          </h1>
          <p className="text-xl font-light leading-relaxed">
            Kami percaya pada kekuatan teknologi untuk menyelamatkan nyawa.
            Sistem canggih kami menggabungkan CCTV, AI, dan pemantauan waktu
            nyata untuk mengidentifikasi dan mencegah upaya bunuh diri, serta
            memberikan intervensi segera saat dibutuhkan.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-container flex-shrink-0">
          <img
            src="/pictcctv.png"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
