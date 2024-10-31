function Navbar() {
  return (
    <div className="Sidebar w-72 h-screen pt-24 relative flex flex-col items-center gap-8 bg-gradient-to-b from-purple-200 to-purple-400">
      {/* Background Navbar */}

      {/* Foto Profil */}
      <div className="Pic w-28 h-28">
        <img
          src="/lgakun.png"
          alt="Foto Profil"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Build With Angga */}
      <div className="BuildwithAngga text-center text-stone-900 text-xl font-medium font-['Poppins']">
        BuildWith Angga
      </div>

      {/* Tim Medis */}
      <div className="TimMedis text-center text-stone-900 text-sm font-normal font-['Poppins']">
        Tim Medis
      </div>

      {/* Peta Interaktif */}
      <div className="space-y-4">
        <div className="Item  ">
          <div className="PetaInteraktif text-stone-900 text-lg font-normal">
            Peta Interaktif
          </div>
        </div>

        {/* Pengaduan dan Dukungan */}
        <div className="Item ">
          <div className="PengaduanDanDukungan text-stone-900 text-lg font-normal">
            Pengaduan dan Dukungan
          </div>
        </div>

        {/* History Section */}
        <div className="Item">
          <div className="History text-stone-900 text-lg font-normal">
            History
          </div>
        </div>

        {/* Settings */}
        <div className="Item ">
          <div className="Settings text-stone-900 text-lg font-normal">
            Settings
          </div>
        </div>

        {/* Log Out */}
        <div className="Item ">
          <div className="LogOut text-stone-900 text-lg font-normal">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
