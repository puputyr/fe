import HistoryCard from "./histori-card";

function Histori() {
  return (
    <div className=" w-full h-screen overflow-scroll pb-10 space-y-10">
      {/* Judul */}

      <div className="Title pl-24 sticky top-0 bg-white/40 backdrop-blur-xl h-24 flex flex-col justify-center">
        <div className="History left-0 top-0  text-stone-900 text-4xl font-medium font-['Poppins']">
          History
        </div>
        <div className="DaftarPerilakuMencurigakan text-slate-500 text-lg font-normal font-['Poppins']">
          Daftar Perilaku Mencurigakan
        </div>
      </div>

      <div className="flex flex-col w-full gap-8 ">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}

export default Histori;
