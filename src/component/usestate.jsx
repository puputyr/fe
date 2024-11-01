// AlertAbsent.js
import React from "react";

function AlertAbsent({ onClose }) {
  return (
    <div className="AlertAbsent w-80 h-80 relative bg-white rounded-2xl shadow">
      <div className="BodyText left-[86px] top-[223px] absolute text-center text-zinc-800 text-2xl font-semibold font-['Inter'] leading-none">
        Berhasil login
      </div>
      <div className="IcCheckBig w-40 h-40 left-[84px] top-[40px] absolute" />
      <div
        onClick={onClose}
        className="Btn w-72 px-4 py-1.5 left-[16px] top-[278px] absolute bg-purple-900 rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer"
      >
        <div className="Container justify-center items-center gap-2 flex">
          <div className="Text text-white text-sm font-semibold font-['Inter'] leading-normal">
            OK
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertAbsent;
