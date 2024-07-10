import { useState, useEffect } from "react";
import MessagePreview from "./MessagePreview";
import { TabView, TabPanel } from "primereact/tabview";
import { getChats, markChatAsRead } from "../utils/api";

const MessagesSidebar = ({ onChatClick }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchAllChats();
  }, []);

  const fetchAllChats = async () => {
    try {
      const data = await getChats();
      setChats(data?.chats);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChatClick = async (chat) => {
    await markChatAsRead(chat.chat_id);
    onChatClick(chat.chat_id);
    fetchAllChats(); // Refresh chats to update unread count
  };

  return (
    <div className="w-1/3 bg-red-500 h-[100vh] overflow-scroll">
      <TabView>
        <TabPanel header="All">
          {chats?.map((chat) => (
            <div key={chat?.chat_id} onClick={() => handleChatClick(chat)}>
              <MessagePreview chat={chat} />
            </div>
          ))}
        </TabPanel>
        <TabPanel header="Unread">
          {chats
            ?.filter((chat) => chat.unread > 0)
            .map((chat) => (
              <div key={chat?.chat_id} onClick={() => handleChatClick(chat)}>
                <MessagePreview chat={chat} />
              </div>
            ))}
        </TabPanel>
        <TabPanel header="Bookmarked">
          {chats?.map((chat) => (
            <div key={chat?.chat_id} onClick={() => handleChatClick(chat)}>
              <MessagePreview chat={chat} />
            </div>
          ))}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default MessagesSidebar;
