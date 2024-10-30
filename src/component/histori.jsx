function Histori() {
    return (
      <div className="HistoriContainer space-y-4">
        {/* Judul */}
        <div className="Title w-64 h-20 relative">
          <div className="History absolute left-0 top-0 text-stone-900 text-4xl font-medium font-['Poppins']">
            History
          </div>
          <div className="DaftarPerilakuMencurigakan absolute left-0 top-[60px] text-slate-500 text-lg font-normal font-['Poppins']">
            Daftar Perilaku Mencurigakan
          </div>
        </div>
  
        {/* Item Daftar Perilaku */}
        <div className="Item w-full h-24 relative flex items-center bg-white shadow-md rounded-lg">
          {/* Gambar */}
          <div className="Pic w-36 h-24 relative">
            <div className="Rectangle5 w-full h-full bg-neutral-100 rounded-md" />
            <img
              className="Image7 absolute inset-0 w-40 h-28 object-cover -left-[5px] -top-[2px]"
              src="https://via.placeholder.com/157x112"
              alt="Perilaku"
            />
          </div>
  
          {/* Deskripsi Perilaku */}
          <div className="Content ml-6 flex flex-col">
            <div className="MencobaMelompat text-stone-900 text-xl font-normal font-['Poppins']">
              Mencoba melompat
            </div>
            <div className="Lokasi flex items-center gap-1 text-xs font-medium text-neutral-800 mt-1">
              <div className="IcLocationFilled w-4 h-4 bg-purple-900 rounded-full"></div>
              <div>CCTV Tegowanu</div>
            </div>
          </div>
  
          {/* Waktu dan Tanggal */}
          <div className="flex ml-auto space-x-6 pr-6">
            <div className="Tanggal text-stone-900 text-xl font-normal font-['Poppins']">
              08-10-2024
            </div>
            <div className="Waktu text-stone-900 text-xl font-normal font-['Poppins']">
              10:50:50
            </div>
          </div>
  
          {/* Tombol Lihat CCTV */}
          <button className="Btn bg-purple-900 text-white rounded-xl px-6 py-2.5 ml-4 flex items-center justify-center">
            <span className="Text text-base font-semibold font-['Inter']">
              Lihat CCTV
            </span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Histori;
  