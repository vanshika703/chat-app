import { useState, useEffect } from "react";
import MessagePreview from "./MessagePreview";
import { TabView, TabPanel } from "primereact/tabview";
import { getChats, markChatAsRead } from "../utils/api";

export default function MessagesSidebar({
  chats,
  setChats,
  setSelectedChatId,
  selectedChatId,
  fetchAllChats,
}) {
  const handleChatClick = async (chat) => {
    await markChatAsRead(chat.chat_id);
    setSelectedChatId(chat.chat_id);
    fetchAllChats();
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-1/3 h-[100vh] overflow-scroll">
      <div className="flex justify-between items-center p-5 py-2">
        <p className="font-semibold">Chats</p>
        <div className="flex justify-center gap-2 items-center">
          <i className="pi pi-envelope" />
          <i className="pi pi-bars" />
        </div>
      </div>
      <div className="px-5 flex justify-center items-center">
        <input
          className="p-2 border w-full rounded"
          type="text"
          placeholder="Search..."
        />
      </div>
      <TabView
        className="px-5 custom-tabview"
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="All" key={0}>
          {chats?.map((chat) => (
            <div
              key={chat?.chat_id}
              onClick={() => handleChatClick(chat)}
              className={`${
                selectedChatId === chat?.chat_id ? "bg-gray-100 " : ""
              }`}
            >
              <MessagePreview chat={chat} selectedChatId={selectedChatId}/>
            </div>
          ))}
        </TabPanel>
        <TabPanel header="Unread" key={1}>
          {chats
            ?.filter((chat) => chat.unread > 0)
            .map((chat) => (
              <div
                key={chat?.chat_id}
                onClick={() => handleChatClick(chat)}
                className={`${
                  selectedChatId === chat?.chat_id ? "bg-gray-100 " : ""
                }`}
              >
                <MessagePreview chat={chat}  selectedChatId={selectedChatId}/>
              </div>
            ))}
        </TabPanel>
        {/* <TabPanel header="Bookmarked">
          {chats?.map((chat) => (
            <div key={chat?.chat_id} onClick={() => handleChatClick(chat)}>
              <MessagePreview chat={chat} />
            </div>
          ))}
        </TabPanel> */}
      </TabView>
    </div>
  );
}
