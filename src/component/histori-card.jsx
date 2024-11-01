const HistoryCard = () => {
  return (
    <div className="Item w-full h-24  bg-white flex items-center justify-around">
      <div className="flex items-center gap-4 text-stone-900 text-xl font-normal font-['Poppins']">
        <div className="Pic w-36 h-24">
          <img
            className="Image7 w-40 h-28 left-[-5.51px] top-[-1.76px] "
            src="/histori.png"
          />
        </div>
        <div>
          <p> Mencoba melompat</p>
          <div className="CctvTegowanu text-center text-neutral-800 text-xs font-medium font-['Inter']">
            CCTV Tegowanu
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="102024  text-stone-900 text-xl font-normal font-['Poppins']">
          08-10-2024
        </div>
        <div className="5050  text-stone-900 text-xl font-normal font-['Poppins']">
          10:50:50
        </div>
      </div>
      <div className="Btn w-36 h-12 px-4 py-2.5 left-[866px] top-[25px]  bg-purple-900 rounded-xl justify-center items-center gap-2 inline-flex">
        <div className="Container justify-center items-center gap-3 flex">
          <div className="Text text-white font-semibold font-['Inter'] leading-7">
            Lihat Cctv
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
