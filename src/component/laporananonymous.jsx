function Laporananonymous() {
    return (
      <div className="Sidebar w-72 h-screen top-0 relative" style={{ transform: 'translateX(280px)' }}>
        {/* Background Navbar */}
        <div
          className="Rectangle8 w-72 left-[200] h-full top-0 absolute bg-cover"
          style={{ backgroundImage: "url('/navbar.png')" }}
        />
        {/* Judul */}
        <div className="Title w-36 h-20 relative">
          <div className="Laporan absolute left-0 top-0 text-stone-900 text-4xl font-medium font-['Poppins']">
            Laporan
          </div>
          <div className="Anonymous absolute left-0 top-[60px] text-stone-900 text-lg font-normal font-['Poppins']">
            Anonymous
          </div>
        </div>
  
        {/* Group Item */}
        <div className="Group21 w-64 h-14 relative flex items-center space-x-4">
          {/* Foto Profil */}
          <div className="Pic w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="Default w-12 h-12 rounded-full bg-gray-400" />
          </div>
  
          {/* Konten Laporan */}
          <div className="flex flex-col">
            <div className="Item w-28 h-7">
              <div className="Anonymous text-stone-900 text-lg font-normal font-['Poppins']">
                Anonymous
              </div>
            </div>
            <div className="SayaMelihatSeseorang text-stone-900 text-sm font-normal font-['Poppins'] text-center">
              Saya melihat seseorang ...
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Laporananonymous;
  