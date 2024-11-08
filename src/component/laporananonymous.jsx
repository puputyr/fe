function Laporananonymous() {
  return (
    <div className="Sidebar flex-none w-72 h-screen pt-24 relative flex flex-col items-center gap-8 bg-gradient-to-b from-purple-200 to-purple-400">
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

      {/* Peta Interaktif dan Menu Lain */}

      {/* Log Out di bawah */}
    </div>
  );
}

export default Laporananonymous;
