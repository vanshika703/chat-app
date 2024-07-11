# Chat Application

This project is a chat application built using React. The application allows users to send and receive messages, and it dynamically updates the chat list to show the most recent messages at the top.

## Features

- Display a list of chats.
- Send and receive messages.
- Automatically move chats with new messages to the top of the list.
- Filter chats to show all or only unread messages.
- UI is clean and minimal using TailwindCSS


## How to run :
Clone the repository:
git clone https://github.com/vanshika703/chat-app.git

Navigate to the project directory:
cd chat-application

Install dependencies:
npm install

Start the development server:
npm start

Open your browser and go to http://localhost:3000 to see the application.

## Main Componenets and Features :

- MessagesSidebar

![image](https://github.com/vanshika703/chat-app/assets/50284087/6ee2d0fc-d0c9-4b32-868e-061736a38609)

- Containing 2 tabs - All, Unread
- Displays paginated list of users, profile photo, last message and no. of unread messages(if any)
- Mock API used for fetching list of chats
- Chats become read on clicking any 1 chat
- New messages in open chat do not show unread messages indication
- Unread tab has all messages which are unread, which gets removed from the unread tab on opening
- Search bar is given(functionality can be added in future)

- Chat Window

![image](https://github.com/vanshika703/chat-app/assets/50284087/aee54248-cd92-4119-b4e7-1dc01f52eb0c)

- Contains list of messages, sent/received from the particukar user
- Scrolls to bottom i.e. the latest message and scrolling up loads previos messages with pagination
- Typing and sending message will add it to messages list
- Messages are also received after an interval of 10s to mock receiving messages and 10s fixed interval to mock poling.

- Currently data is restored to original state on refresh as its not stored in a database/backend.




