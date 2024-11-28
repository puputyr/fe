import React from "react";
import Chat from "../component/chatbubble";
import ChatList from "../component/ChatList";
import Opsichat from "../component/opsichat";
import Navbar_User from "../component/navbaruser";

function Pengaduananonymous() {
  return (
    <div className="flex w-full">
      <div
        className="flex
     "
      >
        <Navbar_User />
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
