function Partner() {
  return (
    <div
      id="partner"
      className="partner-container flex flex-col gap-10 items-center"
    >
      <div className="component flex gap-6 justify-center items-start overflow-hidden">
        <div className="frame flex-1 bg-white p-4 flex justify-center items-center animate-slide-loop">
          <img
            className="infografis w-full h-auto max-w-xs"
            src="/lgtimmedis.png"
            alt="Tim medis"
          />
        </div>
        <div className="frame flex-1 bg-white p-4 flex justify-center items-center animate-slide-loop delay-150">
          <img
            className="infografis w-full h-auto max-w-xs"
            src="/lgpsikolog.png"
            alt="Psikolog"
          />
        </div>
        <div className="frame flex-1 bg-white p-4 flex justify-center items-center animate-slide-loop delay-300">
          <img
            className="infografis w-full h-auto max-w-xs"
            src="/lgkeamanan.png"
            alt="Tim keamanan"
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;
