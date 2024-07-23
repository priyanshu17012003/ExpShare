import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from '../context/useSendMessage';

function TypeSend() {
 const [message,setMessage]=useState("")
 const {loading,sendMessages}=useSendMessage();

 const handleSubmit=async (e)=>{
   e.preventDefault();
   await sendMessages(message);
   setMessage("");
 }

  return (
    <form onSubmit={handleSubmit}>
    <div className='flex items-center justify-center space-x-3'>
        <input
        type="text"
        placeholder='Type a message...'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className='w-1/2 bg-green-100 p-2 rounded-lg outline-none text-black border hover:border-green-500'
        ></input>
        <button>
        <IoSendSharp className='text-3xl text-green-500'/>
        </button>
    </div>
    </form>
  )
}

export default TypeSend