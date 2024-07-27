import React, { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";

function useGetMessage() {
  const [loading,setLoading]=useState(true)
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation.id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation.id}`
          );
          setMessage(res.data);
          setLoading(false);
        } catch (error) {
          console.log("Error in getting messages ", error);
          setLoading(false);
        }
      }
    };

    getMessages();
  }, [selectedConversation, setMessage]);
  return {loading, messages };
}

export default useGetMessage;
