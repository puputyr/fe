import ChatProfile from "./ChatProfile";

function Chatbubble() {
  return (
    <div className="  w-full flex flex-col justify-between h-full">
      <div className="w-full p-8 h-full space-y-8">
        <ChatProfile />
        <div className="space-y-2 w-full">
          <div className="flex w-full justify-start">
            <div className="bg-orange-100 p-4 rounded">
              <p>Saya melihat seseorang mas.</p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div className="bg-orange-100 p-4 rounded">
              <p>Apa sih mas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <input
          className="p-4 bg-orange-100 w-full"
          placeholder="Selamat datang di Aisee"
        />
        <button className="bg-[#697565] p-4 text-white">Submit</button>
      </div>
    </div>
  );
}

export default Chatbubble;
