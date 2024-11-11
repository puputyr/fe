import React from "react";
import Navbar from "../component/navbar";
import Chat from "../component/chatbubble";
import ChatList from "../component/ChatList";
import Opsichat from "../component/opsichat";

function Pengaduananonymous() {
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
      <Opsichat />
    </div>
  );
}
export default Pengaduananonymous;
