const chats = [
  {
    chat_id: 10000,
    sender_details: {
      user_id: -100,
      profile_data: {
        first_name: "Rohit",
        last_name: "Sharma",
        profile_picture: "",
        headline: "",
        followers: "8787878",
      },
    },
    last_message: {
      id: "kjfds;kljf;kjsadklfn",
      content: "Doing great! Any plans for today?",
      created_at: "29/05 04:14",
      status: "DELIVERED",
    },
    unread: 3,
  },
  {
    chat_id: 10001,
    sender_details: {
      user_id: -101,
      profile_data: {
        first_name: "Virat",
        last_name: "Kohli",
        profile_picture: "",
        headline: "",
        followers: "9999999",
      },
    },
    last_message: {
      id: "dfgdfgdfgdfgdfgdfg",
      content: "Great, thanks!",
      created_at: "28/05 08:20",
      status: "DELIVERED",
    },
    unread: 2,
  },
  {
    chat_id: 10002,
    sender_details: {
      user_id: -102,
      profile_data: {
        first_name: "Sachin",
        last_name: "Tendulkar",
        profile_picture: "",
        headline: "",
        followers: "10000000",
      },
    },
    last_message: {
      id: "wertwertwertwert",
      content: "Perfect, see you soon.",
      created_at: "27/05 12:15",
      status: "DELIVERED",
    },
    unread: 5,
  },
  {
    chat_id: 10003,
    sender_details: {
      user_id: -103,
      profile_data: {
        first_name: "MS",
        last_name: "Dhoni",
        profile_picture: "",
        headline: "",
        followers: "9800000",
      },
    },
    last_message: {
      id: "zxcvzxvczxvczxvc",
      content: "Here it is, thanks!",
      created_at: "26/05 14:10",
      status: "DELIVERED",
    },
    unread: 0,
  },
  {
    chat_id: 10004,
    sender_details: {
      user_id: -104,
      profile_data: {
        first_name: "Yuvraj",
        last_name: "Singh",
        profile_picture: "",
        headline: "",
        followers: "8500000",
      },
    },
    last_message: {
      id: "asdfasdfsadfsadf",
      content: "Got it, thanks!",
      created_at: "25/05 18:05",
      status: "DELIVERED",
    },
    unread: 1,
  },
  {
    chat_id: 10005,
    sender_details: {
      user_id: -105,
      profile_data: {
        first_name: "Sourav",
        last_name: "Ganguly",
        profile_picture: "",
        headline: "",
        followers: "7700000",
      },
    },
    last_message: {
      id: "qwerqwerqwerqwer",
      content: "See you soon!",
      created_at: "24/05 20:00",
      status: "DELIVERED",
    },
    unread: 4,
  },
  {
    chat_id: 10006,
    sender_details: {
      user_id: -106,
      profile_data: {
        first_name: "Kapil",
        last_name: "Dev",
        profile_picture: "",
        headline: "",
        followers: "7000000",
      },
    },
    last_message: {
      id: "tyuityuityuityui",
      content: "I'll be there in 10 minutes.",
      created_at: "23/05 22:00",
      status: "DELIVERED",
    },
    unread: 2,
  },
  {
    chat_id: 10007,
    sender_details: {
      user_id: -107,
      profile_data: {
        first_name: "Rahul",
        last_name: "Dravid",
        profile_picture: "",
        headline: "",
        followers: "8900000",
      },
    },
    last_message: {
      id: "iopuiopuiopuiopu",
      content: "Thanks for the update.",
      created_at: "22/05 02:45",
      status: "DELIVERED",
    },
    unread: 0,
  },
  {
    chat_id: 10008,
    sender_details: {
      user_id: -108,
      profile_data: {
        first_name: "Anil",
        last_name: "Kumble",
        profile_picture: "",
        headline: "",
        followers: "7200000",
      },
    },
    last_message: {
      id: "jkljkljkljkljkl",
      content: "See you at the event.",
      created_at: "21/05 06:30",
      status: "DELIVERED",
    },
    unread: 3,
  },
  {
    chat_id: 10009,
    sender_details: {
      user_id: -109,
      profile_data: {
        first_name: "VVS",
        last_name: "Laxman",
        profile_picture: "",
        headline: "",
        followers: "6500000",
      },
    },
    last_message: {
      id: "mnbmnmbmnmbmnmb",
      content: "I'll call you later.",
      created_at: "20/05 08:25",
      status: "DELIVERED",
    },
    unread: 1,
  },
  {
    chat_id: 10010,
    sender_details: {
      user_id: -110,
      profile_data: {
        first_name: "Zaheer",
        last_name: "Khan",
        profile_picture: "",
        headline: "",
        followers: "7800000",
      },
    },
    last_message: {
      id: "plkplkplkplkplk",
      content: "Looking forward to it.",
      created_at: "19/05 10:20",
      status: "DELIVERED",
    },
    unread: 4,
  },
  {
    chat_id: 10011,
    sender_details: {
      user_id: -111,
      profile_data: {
        first_name: "Harbhajan",
        last_name: "Singh",
        profile_picture: "",
        headline: "",
        followers: "7600000",
      },
    },
    last_message: {
      id: "uiouiouiouiouio",
      content: "I'll be there soon.",
      created_at: "18/05 12:15",
      status: "DELIVERED",
    },
    unread: 0,
  },
  {
    chat_id: 10012,
    sender_details: {
      user_id: -112,
      profile_data: {
        first_name: "Gautam",
        last_name: "Gambhir",
        profile_picture: "",
        headline: "",
        followers: "6900000",
      },
    },
    last_message: {
      id: "tyutyutyutyutyu",
      content: "Noted, thanks!",
      created_at: "17/05 14:10",
      status: "DELIVERED",
    },
    unread: 1,
  },
  {
    chat_id: 10013,
    sender_details: {
      user_id: -113,
      profile_data: {
        first_name: "Suresh",
        last_name: "Raina",
        profile_picture: "",
        headline: "",
        followers: "6700000",
      },
    },
    last_message: {
      id: "asdfasdfsadf",
      content: "Sounds good!",
      created_at: "16/05 16:05",
      status: "DELIVERED",
    },
    unread: 5,
  },
  {
    chat_id: 10014,
    sender_details: {
      user_id: -114,
      profile_data: {
        first_name: "Ravindra",
        last_name: "Jadeja",
        profile_picture: "",
        headline: "",
        followers: "7300000",
      },
    },
    last_message: {
      id: "zxcvzxcvzxcvzxcv",
      content: "Will get back to you.",
      created_at: "15/05 18:00",
      status: "DELIVERED",
    },
    unread: 2,
  },
  {
    chat_id: 10015,
    sender_details: {
      user_id: -115,
      profile_data: {
        first_name: "Shikhar",
        last_name: "Dhawan",
        profile_picture: "",
        headline: "",
        followers: "7100000",
      },
    },
    last_message: {
      id: "qwertyuqwerty",
      content: "Thanks for letting me know.",
      created_at: "14/05 20:00",
      status: "DELIVERED",
    },
    unread: 3,
  },
  {
    chat_id: 10016,
    sender_details: {
      user_id: -116,
      profile_data: {
        first_name: "Rohit",
        last_name: "Sharma",
        profile_picture: "",
        headline: "",
        followers: "9000000",
      },
    },
    last_message: {
      id: "yuiopyuiopyuio",
      content: "I'll update you soon.",
      created_at: "13/05 22:05",
      status: "DELIVERED",
    },
    unread: 4,
  },
  {
    chat_id: 10017,
    sender_details: {
      user_id: -117,
      profile_data: {
        first_name: "Hardik",
        last_name: "Pandya",
        profile_picture: "",
        headline: "",
        followers: "6700000",
      },
    },
    last_message: {
      id: "asdfghasdfgh",
      content: "Let's discuss this later.",
      created_at: "12/05 02:00",
      status: "DELIVERED",
    },
    unread: 1,
  },
  {
    chat_id: 10018,
    sender_details: {
      user_id: -118,
      profile_data: {
        first_name: "KL",
        last_name: "Rahul",
        profile_picture: "",
        headline: "",
        followers: "6900000",
      },
    },
    last_message: {
      id: "zxcvbnzxcvbn",
      content: "I'll be there in a bit.",
      created_at: "11/05 04:00",
      status: "DELIVERED",
    },
    unread: 0,
  },
  {
    chat_id: 10019,
    sender_details: {
      user_id: -119,
      profile_data: {
        first_name: "Jasprit",
        last_name: "Bumrah",
        profile_picture: "",
        headline: "",
        followers: "6700000",
      },
    },
    last_message: {
      id: "qwertyasdfgh",
      content: "Thanks for the reminder.",
      created_at: "10/05 06:00",
      status: "DELIVERED",
    },
    unread: 5,
  },
];

const messages = {
  10000: [
    {
      id: "msg10000_1",
      content: "Hey, how are you?",
      created_at: "2024-05-29T04:14:45.614Z",
      type: "received",
    },
    {
      id: "msg10000_2",
      content: "I'm good, thanks! How about you?",
      created_at: "2024-05-29T04:15:45.614Z",
      type: "sent",
    },
    {
      id: "msg10000_3",
      content: "Doing great! Any plans for today?",
      created_at: "2024-05-29T04:16:45.614Z",
      type: "received",
    },
  ],
  10001: [
    {
      id: "msg10001_1",
      content: "Did you finish the report?",
      created_at: "2024-05-28T08:20:30.123Z",
      type: "sent",
    },
    {
      id: "msg10001_2",
      content: "Yes, I sent it to your email.",
      created_at: "2024-05-28T08:25:30.123Z",
      type: "received",
    },
    {
      id: "msg10001_3",
      content: "Great, thanks!",
      created_at: "2024-05-28T08:26:30.123Z",
      type: "sent",
    },
  ],
  10002: [
    {
      id: "msg10002_1",
      content: "Are we still on for the meeting?",
      created_at: "2024-05-27T12:15:22.456Z",
      type: "sent",
    },
    {
      id: "msg10002_2",
      content: "Yes, I'll be there in 10 minutes.",
      created_at: "2024-05-27T12:16:22.456Z",
      type: "received",
    },
    {
      id: "msg10002_3",
      content: "Perfect, see you soon.",
      created_at: "2024-05-27T12:17:22.456Z",
      type: "sent",
    },
  ],
  10003: [
    {
      id: "msg10003_1",
      content: "Can you review my code?",
      created_at: "2024-05-26T14:10:12.789Z",
      type: "sent",
    },
    {
      id: "msg10003_2",
      content: "Sure, send it over.",
      created_at: "2024-05-26T14:11:12.789Z",
      type: "received",
    },
    {
      id: "msg10003_3",
      content: "Here it is, thanks!",
      created_at: "2024-05-26T14:12:12.789Z",
      type: "sent",
    },
  ],
};

export const getChats = async () => {
  return { chats };
};

export const getUserViaChatId = (chatId) => {
  return chats.find((chat) => chat.chat_id === chatId);
};

export const getMessages = async (chatId, page) => {
  const pageSize = 10;
  const allMessages = messages[chatId] || [];
  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedMessages = allMessages.slice(start, end);
  return { messages: paginatedMessages, hasMore: end < allMessages.length };
};

export const sendMessage = async (chatId, message, type) => {
  const newMessage = {
    id: Date.now().toString(),
    content: message,
    created_at: new Date().toISOString(),
    type: type,
  };
  if (!messages[chatId]) messages[chatId] = [];
  messages[chatId].push(newMessage);
  chats.forEach((chat, i) => {
    if (chat.chat_id === chatId) {
      chat.last_message.content = message;
    }
  });
  return newMessage;
};

export const markChatAsRead = async (chatId) => {
  const chat = chats.find((chat) => chat.chat_id === chatId);
  if (chat) chat.unread = 0;
  return chat;
};

export const markChatAsUnRead = async (chatId) => {
  const chat = chats.find((chat) => chat.chat_id === chatId);
  if (chat) chat.unread = chat.unread + 1;
  console.log("chat unread: " + chat.unread);
  return chat;
};
