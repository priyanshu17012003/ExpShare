import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: JSON.parse(localStorage.getItem('selectedConversation')) || null,
  setSelectedConversation: (selectedConversation) => {
    localStorage.setItem('selectedConversation', JSON.stringify(selectedConversation));
    set({ selectedConversation });
  },
  messages: [],
  setMessage: (messages) => set({ messages }),
}));

export default useConversation;
