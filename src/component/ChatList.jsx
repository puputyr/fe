import ChatProfile from "./ChatProfile";

const ChatList = () => {
  return (
    <div className="Sidebar p-4 space-y-8 flex-none w-80 h-screen relative bg-gradient-to-b from-purple-200 to-purple-900">
      <div>
        <p className="text-2xl font-bold">Laporan</p>
        <p>Anonymous</p>
      </div>
      <div className="space-y-2">
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
      </div>
    </div>
  );
};

export default ChatList;
