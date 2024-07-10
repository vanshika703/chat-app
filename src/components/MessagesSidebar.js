import MessagePreview from "./MessagePreview";

import { TabView, TabPanel } from "primereact/tabview";
import { getChats } from "../utils/api";
import { useState, useEffect } from "react";

const MessagesSidebar = () => {
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

  return (
    <div className="w-1/3 bg-red-500 h-[100vh] overflow-scroll">
      <TabView>
        <TabPanel header="All" className="">
          {chats?.map((chat) => (
            <MessagePreview key={chat?.chat_id} chat={chat} />
          ))}
        </TabPanel>
        <TabPanel header="Unread">
          {chats?.map((chat) => (
            <MessagePreview key={chat?.chat_id} chat={chat} />
          ))}
        </TabPanel>
        <TabPanel header="Bookmarked">
          {chats?.map((chat) => (
            <MessagePreview key={chat?.chat_id} chat={chat} />
          ))}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default MessagesSidebar;
