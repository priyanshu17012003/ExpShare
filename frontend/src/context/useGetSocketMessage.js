import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation';
import { useSocketContext } from './SocketContext';

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();

    useEffect(() => {
        if (socket) {
            const handleNewMessage = (newMessage) => {
                setMessage([...messages, newMessage]);
            };

            socket.on("newMessage", handleNewMessage);

            // Clean up the event listener on unmount
            return () => {
                socket.off("newMessage", handleNewMessage);
            };
        }
    }, [socket, messages, setMessage]);

    return null;
}

export default useGetSocketMessage;
