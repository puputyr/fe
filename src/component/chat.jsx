function Chat() {
    return (
        <div className="ChatContainer">
            {/* Welcome Section */}
            <div className="Form w-96 h-16 relative">
                <div className="Rectangle2 w-96 h-16 absolute bg-stone-200" />
                <div className="SelamatDatangDiAisee w-80 h-7 absolute left-8 top-4 text-slate-500 text-base font-normal font-['Poppins']">
                    Selamat datang di Aisee
                </div>
                <div className="Rectangle1 w-40 h-14 absolute bg-stone-500 right-10 top-0" />
                <div className="Submit w-36 h-8 absolute right-10 top-4 text-center text-stone-200 text-lg font-semibold font-['Poppins']">
                    Submit
                </div>
            </div>

            {/* User Section */}
            <div className="Group31 w-64 h-32 relative mt-4">
                <div className="SayaMelihatSeseorang absolute left-20 top-24 text-center text-stone-900 text-sm font-normal font-['Poppins']">
                    Saya melihat seseorang ...
                </div>
                <div className="Item w-28 h-7 absolute left-16 top-4">
                    <div className="Anonymous text-stone-900 text-lg font-normal font-['Poppins']">
                        Anonymous
                    </div>
                </div>
                <div className="Pic w-14 h-14 absolute left-0 top-0">
                    <div className="Ellipse11 w-14 h-14 rounded-full border border-slate-500" />
                    <div className="Default w-12 h-12 absolute left-1 top-1">
                        <div className="Ellipse12 w-12 h-12 bg-slate-500 rounded-full" />
                        <div className="Ellipse14 w-12 h-12 bg-slate-500 rounded-full" />
                        <div className="Ellipse13 w-5 h-5 absolute left-3 top-1 bg-slate-500 rounded-full" />
                        <div className="Ellipse15 w-9 h-9 absolute left-1 top-6 bg-slate-500 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <div className="Group36 w-72 h-16 relative mt-4">
                <div className="Rectangle12 w-72 h-12 absolute bg-stone-200 rounded-lg" />
            </div>
            <div className="Group39 w-72 h-16 relative mt-4">
                <div className="Rectangle12 w-72 h-12 absolute bg-stone-200 rounded-lg origin-top-left rotate-180" />
            </div>
            <div className="Group37 w-96 h-32 relative mt-4">
                <div className="Rectangle12 w-72 h-12 absolute bg-stone-200 rounded-lg origin-top-left rotate-180" />
                <div className="SayaMelihatSeseorang absolute left-[-200px] top-3 text-center text-stone-900 text-sm font-normal font-['Poppins']">
                    Saya melihat seseorang ...
                </div>
                <div className="SelamatDatangDiAisee absolute left-[-80px] top-24 text-center text-stone-900 text-sm font-normal font-['Poppins']">
                    Selamat datang di Aisee!
                </div>
            </div>
            <div className="Group40 w-72 h-16 relative mt-4">
                <div className="Rectangle12 w-72 h-12 absolute bg-stone-200 rounded-lg" />
            </div>
            <div className="Group41 w-72 h-16 relative mt-4">
                <div className="Rectangle12 w-72 h-12 absolute bg-stone-200 rounded-lg" />
            </div>
        </div>
    );
}

export default Chat;
