import React from "react";
import { useAuth } from "../context/AuthProvider";

function Message({ message }) {
  const [authUser, setAuthUser] = useAuth();
  const itsMe=message.senderid===authUser.user._id;

  const chatName=itsMe?"chat-end":"chat-start";
  const chatColor=itsMe?"bg-green-400":"bg-blue-400";
  return (
    <>
    <div className="p-4">
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
      </div>

    </div> 
    </>
  );
}

export default Message;
