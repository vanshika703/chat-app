import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import MessagesSidebar from "./components/MessagesSidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="App flex gap-2">
      <MessagesSidebar
        setSelectedChatId={setSelectedChatId}
        selectedChatId={selectedChatId}
      />
      <ChatWindow selectedChatId={selectedChatId} />
    </div>
  );
}

export default App;
