import React, { useEffect, useRef, useState } from "react";
import { getMessages, sendMessage } from "../utils/api";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatId) {
      fetchMessages(chatId, 0);
    }
  }, [chatId]);

  const fetchMessages = async (chatId, page) => {
    const data = await getMessages(chatId, page);
    setMessages((prev) =>
      page === 0 ? data.messages : [...data.messages, ...prev]
    );
    setPage(page);
    setHasMore(data.hasMore);
    if (page === 0) scrollToBottom();
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const message = await sendMessage(chatId, newMessage);
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
      scrollToBottom();
    }
  };

  return (
    <div className="w-2/3 h-[100vh] bg-gray-100">
      <div className="flex justify-between items-center px-5 h-[10vh]">
        <div className="flex justify-start items-center gap-4">
          <img
            src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
            alt="pic"
            className="h-16 w-16 object-cover rounded-full"
          />
          <p>Chat Name</p>
        </div>
        <div className="flex justify-end items-center gap-4">
          <i className="pi pi-search" />
          <i className="pi pi-ellipsis-v" />
        </div>
      </div>
      <div
        className="h-[80vh] message-window bg-gray-200 p-5 flex flex-col gap-4 overflow-scroll"
        onScroll={(e) => {
          if (e.target.scrollTop === 0 && hasMore) {
            fetchMessages(chatId, page + 1);
          }
        }}
      >
        {messages.map((message, index) => (
          <div
            className={`flex ${
              message.type === "sent" ? " justify-end " : " justify-start "
            }`}
            key={index}
          >
            <span
              className={`p-2 rounded ${
                message.type === "sent" ? " bg-green-200 " : "bg-gray-300"
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="message-bar w-full flex justify-center items-center gap-4 px-5 h-[10vh]">
        <i className="pi pi-paperclip" />
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
