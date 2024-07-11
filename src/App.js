import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import MessagesSidebar from "./components/MessagesSidebar";
import ChatWindow from "./components/ChatWindow";
import { getChats } from "./utils/api";

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchAllChats();
  }, []);

  // FUNCTION TO FETCH ALL CHATS, GETCHATS IS THE MOCK API CALL
  const fetchAllChats = async () => {
    console.log("fetching");
    try {
      const data = await getChats();
      setChats(data?.chats);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App flex gap-2">
      <MessagesSidebar
        chats={chats}
        setChats={setChats}
        setSelectedChatId={setSelectedChatId}
        selectedChatId={selectedChatId}
        fetchAllChats={fetchAllChats}
      />
      <ChatWindow
        selectedChatId={selectedChatId}
        setChats={setChats}
        chats={chats}
        fetchAllChats={fetchAllChats}
      />
    </div>
  );
}

export default App;
