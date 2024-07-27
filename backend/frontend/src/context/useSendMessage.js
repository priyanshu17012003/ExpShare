import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import axios from 'axios';

function useSendMessage() {
    const [loading,setLoading]=useState(true)
    const { messages, setMessage, selectedConversation } = useConversation();

    const sendMessages = async (message) => {
        setLoading(true);
        
          try {
            const res = await axios.post(
              `/api/message/send/${selectedConversation.id}`,{message}
            );
            setMessage([...messages, res.data.newMessage]);
            setLoading(false);
          } catch (error) {
            console.log("Error in sending messages ", error);
            setLoading(false);
          }
        
      };
  
  
  return {loading, sendMessages }
}

export default useSendMessage