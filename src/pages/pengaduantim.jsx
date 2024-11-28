import React from "react";
import Chat from "../component/chatbubble";
import ChatList from "../component/ChatList";
import Navbar_User from "../component/navbaruser";

function pengaduantim() {
  return (
    <div className="flex w-full">
      <div
        className="flex"
      >
        <Navbar_User />
        <ChatList />
      </div>
      <div className="w-full">
        <Chat />
      </div>
    </div>
  );
}
export default pengaduantim;
