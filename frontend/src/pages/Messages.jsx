import React, { useEffect, useRef } from 'react'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import useGetMessage from '../context/useGetMessage'
import ChatHead from '../components/ChatHead'
import TypeSend from '../components/TypeSend'
import useGetSocketMessage from '../context/useGetSocketMessage'

function Messages() {

  const {loading,messages}=useGetMessage();
  useGetSocketMessage(); //listening incoming messages

  const lastMsgRef=useRef(); //For scrolling to last message
  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    },100);
  },[messages])

  
  return ( 
    <>
    <Navbar></Navbar>
    <ChatHead></ChatHead>
    <div className='min-h-screen max-w-screen-2xl container px-5 md:px-5'>
    {loading? (
      <Loading></Loading>
    ):(
      messages.length>0 && messages.map((message)=>(
        <div key={message._id} ref={lastMsgRef}>
        <Message message={message} ></Message>
        </div>
      )) 
    )}    
    {!loading && messages.length===0 &&(
      <div>
        <p className="text-center text-xl font-bold mt-40 text-green-500">Say! Hi to start chatting</p>
      </div>
    )}
    </div>
    <TypeSend></TypeSend>
    <Footer></Footer>
    </>
  )
}

export default Messages