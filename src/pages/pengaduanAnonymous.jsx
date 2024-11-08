import React from "react";
import Navbar from "../component/navbar";
import Chat from "../component/chatbubble";
import ChatList from "../component/ChatList";

function PengaduanAnonymous() {
  return (
    <div className="flex w-full">
      <div
        className="flex
     "
      >
        <Navbar />
        <ChatList />
      </div>
      <div className="w-full">
        <Chat />
      </div>
    </div>
  );
}
export default PengaduanAnonymous;
