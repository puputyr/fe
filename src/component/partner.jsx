function Partner() {
    return (
      <div className="partner-container flex flex-col gap-10 items-center">
        <div className="component flex gap-6 justify-center items-start">
          <div className="frame flex-1 bg-white p-4 flex justify-center items-center">
            <img
              className="infografis w-full h-auto max-w-xs"
              src="/lgtimmedis.png"
              alt="Tim medis"
            />
          </div>
          <div className="frame flex-1 bg-white p-4 flex justify-center items-center">
            <img
              className="infografis w-full h-auto max-w-xs"
              src="/lgpsikolog.png"
              alt="Psikolog"
            />
          </div>
          <div className="frame flex-1 bg-white p-4 flex justify-center items-center">
            <img
              className="infografis w-full h-auto max-w-xs"
              src="/lgtimkeamanan.png"
              alt="Tim keamanan"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Partner;
  