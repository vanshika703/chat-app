import React, { useEffect, useRef, useState } from "react";
import {
  getMessages,
  sendMessage,
  getUserViaChatId,
  markChatAsUnRead,
  getChats,
} from "../utils/api";

const ChatWindow = ({ selectedChatId, setChats, fetchAllChats, chats }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const [userDetails, setUserDetails] = useState(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedChatId) {
      fetchMessages(selectedChatId, 0);
      handleReceiveMessage();

      const user = getUserViaChatId(selectedChatId);
      setUserDetails(user);
      console.log("Received user", user);
    }
  }, [selectedChatId]);

  const fetchMessages = async (chatId, page) => {
    const data = await getMessages(chatId, page);
    setMessages((prev) =>
      page === 0 ? data.messages : [...data.messages, ...prev]
    );
    setPage(page);
    setHasMore(data.hasMore);
    if (page === 0) scrollToBottom();
  };

  //SEND MESSAGE EVENT THROUGH MOCK SENDING API
  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const message = await sendMessage(selectedChatId, newMessage, "sent");
      setMessages((prev) => [...prev, message]);
      const newChats = chats.reduce((acc, chat) => {
        if (chat.chat_id === selectedChatId) {
          const updatedChat = { ...chat, last_message: message };
          return [updatedChat, ...acc];
        } else {
          return [...acc, chat];
        }
      }, []);
      setChats(newChats);
      setNewMessage("");
      scrollToBottom();
    }
  };

  const messagesArray = [
    "Hello",
    "How are you?",
    "What's up?",
    "Good morning",
    "Good night",
  ];

  // RECEIVE MESSAGE EVENT THROUGH MOCK API POLING
  const handleReceiveMessage = async () => {
    let c = 0;

    const interval = setInterval(async () => {
      c = c + 1;
      const randomMessage =
        messagesArray[Math.floor(Math.random() * messagesArray.length)];

      const message = await sendMessage(
        selectedChatId,
        randomMessage,
        "received"
      );

      setMessages((prev) => [...prev, message]);
      markChatAsUnRead(selectedChatId);
      setNewMessage("");
      // fetchAllChats();
      const newChats = chats.reduce((acc, chat) => {
        if (chat.chat_id === selectedChatId) {
          const updatedChat = { ...chat, last_message: message };
          return [updatedChat, ...acc];
        } else {
          return [...acc, chat];
        }
      }, []);
      console.log("newChat", newChats, chats);
      setChats(newChats);
      scrollToBottom();
      if (c >= 2) clearInterval(interval);
    }, 10000);
  };

  return (
    <div className="w-2/3 h-[100vh] bg-gray-100">
      <div className="flex justify-between items-center px-5 h-[10vh]">
        {userDetails && (
          <div className="flex justify-start items-center gap-4">
            <img
              src={
                "https://xsgames.co/randomusers/assets/avatars/male/" +
                Math.round(Math.abs(userDetails.chat_id - 10000)) +
                ".jpg"
              }
              alt="pic"
              className="h-16 w-16 object-cover rounded-full"
            />
            <p>
              {userDetails.sender_details.profile_data.first_name +
                " " +
                userDetails.sender_details.profile_data.last_name}
            </p>
          </div>
        )}
        <div className="flex justify-end items-center gap-4">
          <i className="pi pi-search" />
          <i className="pi pi-ellipsis-v" />
        </div>
      </div>
      <div
        className="h-[80vh] message-window bg-gray-200 p-5 flex flex-col gap-4 overflow-scroll"
        onScroll={(e) => {
          if (e.target.scrollTop === 0 && hasMore) {
            fetchMessages(selectedChatId, page + 1);
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
