function Navbar() {
      return (
        <div className="Sidebar w-72 h-screen relative">
          {/* Background Navbar */}
          <div
            className="Rectangle8 w-72 h-full top-0 absolute bg-cover"
            style={{ backgroundImage: "url('/navbar.png')" }}
          />
    
          {/* Foto Profil */}
          <div className="Pic w-28 h-28 left-[85px] top-[70px] absolute">
            <img
              src="/lgakun.png"
              alt="Foto Profil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
    
          {/* Build With Angga */}
          <div className="BuildwithAngga left-[56px] top-[196px] absolute text-center text-stone-900 text-xl font-medium font-['Poppins']">
            BuildWith Angga
          </div>
    
          {/* Tim Medis */}
          <div className="TimMedis left-[105px] top-[232px] absolute text-center text-stone-900 text-sm font-normal font-['Poppins']">
            Tim Medis
          </div>
    
          {/* Peta Interaktif */}
          <div className="Item w-32 h-7 left-[24px] top-[330px] absolute">
            <div className="PetaInteraktif text-stone-900 text-lg font-normal">
              Peta Interaktif
            </div>
          </div>
    
          {/* Pengaduan dan Dukungan */}
          <div className="Item w-60 h-7 left-[24px] top-[390px] absolute">
            <div className="PengaduanDanDukungan text-stone-900 text-lg font-normal">
              Pengaduan dan Dukungan
            </div>
          </div>
    
          {/* History Section */}
          <div className="Item w-72 h-14 left-0 top-[433px] absolute">
            <div className="History left-[24px] top-[17px] absolute text-stone-900 text-lg font-normal">
              History
            </div>
          </div>
    
          {/* Settings */}
          <div className="Item w-20 h-7 left-[24px] top-[510px] absolute">
            <div className="Settings text-stone-900 text-lg font-normal">
              Settings
            </div>
          </div>
    
          {/* Log Out */}
          <div className="Item w-20 h-7 left-[24px] top-[900px] absolute">
            <div className="LogOut text-stone-900 text-lg font-normal">
              Log Out
            </div>
          </div>
        </div>
  );
}

export default Navbar;
