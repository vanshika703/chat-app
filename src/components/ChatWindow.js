import React, { useEffect, useRef } from "react";

const ChatWindow = () => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const fetchAllMessagesOfChat = () => {
    
  }

  return (
    <div className="w-2/3 h-[100vh] bg-gray-100">
      <div className="flex justify-between items-center px-5 h-[10vh]">
        <div className="flex justify-start items-center gap-4">
          <img
            src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
            alt="pic"
            className="h-16 w-16 object-cover rounded-full"
          />{" "}
          <p>Chat Name</p>
        </div>
        <div className=" flex justify-end items-center gap-4">
          <i className="pi pi-search" />
          <i className="pi pi-ellipsis-v" />
        </div>
      </div>
      <div className="h-[80vh] message-window bg-gray-200 p-5 flex flex-col  gap-4 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <div className="flex">
            <span className="p-2 bg-green-200 rounded">Hello</span>
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
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
