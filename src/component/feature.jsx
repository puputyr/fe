import { Link } from "react-router-dom";

function Feature() {
  return (
    <div className="NewClasses w-96 h-96 relative justify-self-center">
      <div className="Fitur w-20 h-12 absolute text-stone-900 text-2xl font-medium font-['Poppins']">
        Fitur
      </div>

      {/* Peta Interaktif */}
      <div className="Item w-60 h-72 left-0 top-[89.85px] absolute">
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
          <div className="PetaInteraktif w-44 h-9 absolute text-stone-900 text-lg font-normal font-['Poppins'] text-center top-[234px] left-[8px]">
            Peta Interaktif
          </div>
        </Link>
      </div>

      {/* Histori */}
      <div className="Item w-60 h-72 left-[286.60px] top-[89.85px] absolute">
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
          <div className="HistoriInsiden w-44 h-9 absolute text-stone-900 text-lg font-normal font-['Poppins'] text-center top-[234px] left-[8px]">
            Histori Insiden
          </div>
        </Link>
      </div>

      {/* Dukungan */}
      <div className="Item w-60 h-72 left-[573.20px] top-[89.85px] absolute">
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
          <div className="PengaduanDanDukungan w-52 h-20 absolute text-center text-stone-900 text-lg font-normal font-['Poppins'] top-[205px] left-[4px]">
            Pengaduan dan <br /> Dukungan
          </div>
        </Link>
      </div>

      {/* Pola Perilaku */}
      <div className="Item w-60 h-72 left-[856.96px] top-[89.85px] absolute">
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
          <div className="PolaPerilaku w-40 h-9 absolute text-stone-900 text-lg font-normal font-['Poppins'] text-center top-[234px] left-[8px]">
            Pola Perilaku
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Feature;
