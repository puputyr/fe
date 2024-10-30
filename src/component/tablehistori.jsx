function Tablehistori() {
    return (
      <div className="table-history-container flex flex-col gap-6 items-center">
        {/* Title Section */}
        <div className="title w-full max-w-2xl">
          <h1 className="text-stone-900 text-4xl font-medium font-['Poppins']">
            History
          </h1>
          <p className="text-slate-500 text-lg font-normal font-['Poppins'] mt-2">
            Daftar Perilaku Mencurigakan
          </p>
        </div>
  
        {/* History Item Section */}
        <div className="item flex w-full max-w-4xl bg-white rounded-lg shadow-md p-4">
          {/* Image Section */}
          <div className="pic w-36 h-24 flex-shrink-0 relative">
            <div className="rectangle bg-neutral-100 w-full h-full absolute"></div>
            <img
              className="image w-40 h-28 absolute -left-1 top-0"
              src="https://via.placeholder.com/157x112"
              alt="Suspicious behavior"
            />
          </div>
  
          {/* Details Section */}
          <div className="details flex flex-col justify-between ml-6 flex-grow">
            <div className="info flex justify-between items-center">
              <span className="text-stone-900 text-xl font-normal font-['Poppins']">
                Mencoba melompat
              </span>
              <span className="text-stone-900 text-xl font-normal font-['Poppins']">
                08-10-2024
              </span>
              <span className="text-stone-900 text-xl font-normal font-['Poppins']">
                10:50:50
              </span>
            </div>
  
            <div className="location flex items-center gap-2 mt-2">
              <div className="icon w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-neutral-800 text-xs font-medium font-['Inter']">
                CCTV Tegowanu
              </span>
            </div>
          </div>
  
          {/* Button Section */}
          <div className="btn ml-6">
            <button className="bg-purple-900 text-white text-base font-semibold font-['Inter'] px-4 py-2.5 rounded-xl">
              Lihat CCTV
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tablehistori;
  