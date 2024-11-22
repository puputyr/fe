import { useState } from "react";
import { Link } from "react-router-dom";

function Feature() {
  // State to track which item is hovered
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to handle mouse enter and leave for each item
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div id="fitur" className="w-full h-fit relative">
      <div className="text-left h-12 ml-44 text-stone-900 text-2xl font-medium font-['Poppins']" style={{ marginLeft: '27rem' }}>
        Fitur
      </div>

      <div className="flex gap-8 justify-center w-full">
        {/* Peta Interaktif */}
        <div
          className="Item w-60 h-72 relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter("PetaInteraktif")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/halpeta">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              {/* Dark overlay on hover */}
              <div
                className={`absolute inset-0 transition-opacity ${
                  hoveredItem === "PetaInteraktif" ? "bg-black opacity-25" : "opacity-0"
                }`}
              ></div>
              <img
                src="/lgpeta.png"
                alt="Logo Peta"
                className="w-16 h-16 object-contain relative"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0 text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Peta Interaktif
            </div>
          </Link>
        </div>

        {/* Histori */}
        <div
          className="Item w-60 h-72 relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter("Histori")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/history">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <div
                className={`absolute inset-0 transition-opacity ${
                  hoveredItem === "Histori" ? "bg-black opacity-25" : "opacity-0"
                }`}
              ></div>
              <img
                src="/lghistori.png"
                alt="Logo Histori"
                className="w-16 h-16 object-contain relative"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0 text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Histori Insiden
            </div>
          </Link>
        </div>

        {/* Dukungan */}
        <div
          className="Item w-60 h-72 relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter("Dukungan")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/pengaduantim">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <div
                className={`absolute inset-0 transition-opacity ${
                  hoveredItem === "Dukungan" ? "bg-black opacity-25" : "opacity-0"
                }`}
              ></div>
              <img
                src="/lgcs.png"
                alt="Logo Dukungan"
                className="w-16 h-16 object-contain relative"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0 text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Pengaduan dan <br /> Dukungan
            </div>
          </Link>
        </div>

        {/* Pola Perilaku */}
        <div
          className="Item w-60 h-72 relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter("PolaPerilaku")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/history">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <div
                className={`absolute inset-0 transition-opacity ${
                  hoveredItem === "PolaPerilaku" ? "bg-black opacity-25" : "opacity-0"
                }`}
              ></div>
              <img
                src="/lgperilaku.png"
                alt="Logo Perilaku"
                className="w-16 h-16 object-contain relative"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0 text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Pola Perilaku
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feature;
