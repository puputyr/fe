function Opsichat() {
    return (
        <div>
            <div className="Btn w-72 h-7 px-2 py-0.5 bg-white rounded border border-stone-700 justify-center items-center gap-1 inline-flex">
                <div className="Container grow shrink basis-0 h-5 justify-center items-center gap-1 flex">
                    <div className="Text text-stone-700 text-lg font-normal font-['Inter'] leading-tight">
                        Chat dengan Psikolog
                    </div>
                </div>
            </div>
            <div className="Btn w-72 h-7 px-2 py-0.5 bg-stone-200 rounded border border-stone-700 justify-center items-center gap-1 inline-flex">
                <div className="Container grow shrink basis-0 h-5 justify-center items-center gap-1 flex">
                    <div className="Text text-stone-700 text-lg font-normal font-['Inter'] leading-tight">
                        Chat dengan Tim Medis
                    </div>
                </div>
            </div>
            <div className="Btn w-80 h-7 px-2 py-0.5 bg-stone-200 rounded border border-stone-700 justify-center items-center gap-1 inline-flex">
                <div className="Container grow shrink basis-0 h-5 justify-center items-center gap-1 flex">
                    <div className="Text text-stone-700 text-lg font-normal font-['Inter'] leading-tight">
                        Chat dengan Tim Petugas Keamanan
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opsichat;
