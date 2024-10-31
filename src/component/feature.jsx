import { Link } from "react-router-dom";

function Feature() {
  return (
    <div className="w-full h-fit relative">
      <div className="text-center h-12  text-stone-900 text-2xl font-medium font-['Poppins']">
        Fitur
      </div>

      <div className="flex gap-8 justify-center w-full">
        {/* Peta Interaktif */}
        <div className="Item w-60 h-72 relative">
          <Link to="/halpeta">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <img
                src="/lgpeta.png"
                alt="Logo Peta"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0  text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Peta Interaktif
            </div>
          </Link>
        </div>

        {/* Histori */}
        <div className="Item w-60 h-72 relative">
          <Link to="/history">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <img
                src="/lghistori.png"
                alt="Logo Histori"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0  text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Histori Insiden
            </div>
          </Link>
        </div>

        {/* Dukungan */}
        <div className="Item w-60 h-72 relative">
          <Link to="/pengaduantim">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <img
                src="/lgcs.png"
                alt="Logo Dukungan"
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="PetaInteraktif absolute bottom-4 left-0 right-0  text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Pengaduan dan <br /> Dukungan
            </div>
          </Link>
        </div>

        {/* Pola Perilaku */}
        <div className="Item w-60 h-72 relative">
          <Link to="/perilaku">
            <div
              className="Bg w-60 h-72 flex items-center justify-center"
              style={{
                backgroundImage: 'url("/bgfitur.png")',
                backgroundSize: "cover",
              }}
            >
              <img
                src="/lgperilaku.png"
                alt="Logo Perilaku"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="PetaInteraktif absolute bottom-4 left-0 right-0  text-stone-900 text-lg font-normal font-['Poppins'] text-center">
              Pola Perilaku
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feature;
