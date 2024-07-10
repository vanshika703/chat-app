const MessagePreview = ({ chat }) => {
  console.log("chat", chat);
  return (
    <>
      <div className="flex justify-between items-center p-2 m-2 cursor-pointer hover:bg-gray-100 transition-all">
        <div className="flex gap-4 items-center justify-start">
          {/* <img
            src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
            alt="person"
            className=" h-16 w-16 object-cover rounded-full"
          /> */}
          <div className="h-14 w-14 rounded-full bg-gray-200 flex justify-center items-center">
            <p className="text-xl font-semibold">
              {chat?.sender_details?.profile_data?.first_name?.charAt(0)}
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p>
              {chat?.sender_details?.profile_data?.first_name}{" "}
              {chat?.sender_details?.profile_data?.last_name}
            </p>
            <p className="text-sm">{chat?.last_message?.content}</p>
            <p className="text-xs">{chat?.last_message?.created_at}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end text-xs h-full">
          {chat?.unread !== 0 ? (
            <p className="text-xs p-1 px-2 bg-green-200 rounded-full flex justify-center items-center w-5 h-5">
              {chat?.unread}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default MessagePreview;
