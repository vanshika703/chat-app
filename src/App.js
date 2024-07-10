import logo from "./logo.svg";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";

import MessagesSidebar from "./components/MessagesSidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="App flex gap-2">
      <MessagesSidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
