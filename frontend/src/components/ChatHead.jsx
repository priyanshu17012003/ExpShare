import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../context/SocketContext';

function ChatHead() {
  const {onlineUsers}=useSocketContext();
  const {selectedConversation}=useConversation();
  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)? "Online" : "Offline";
  }

  return (
    <div className='flex space-x-3 justify-center'>
        <div className="avatar">
            <div className="w-12 rounded-xl">
                <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1718279448~exp=1718283048~hmac=c8f69237246c4edaed512b0eee5b8c202a23c13f6a00716aca2bb63f272f9634&w=826" />
            </div>
        </div>
        <div>
            <h1 className='text-xl'>{selectedConversation?.name}</h1>
            <span className='text-sm'>{getOnlineUsersStatus(selectedConversation.id)}</span>
        </div>
    </div>
    
  )
}

export default ChatHead