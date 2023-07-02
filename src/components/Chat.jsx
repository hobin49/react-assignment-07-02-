import React, { useState, useEffect } from 'react'
import io from "socket.io-client"

const socket = io("http://localhost:3001")

function Chat() {
  const [username, setUsername] = useState("");
  const [chat, setChat] = useState("");
  const [message, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messages", handleMessage)
    return () => {
      socket.off("messages", handleMessage);
    }
  }, [])

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  }

  const handleSubmit = () => {
    if (chat.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("messages", {
        username,
        content: chat,
        time : currentTime
      })
      setChat("");
      setUsername("");
    }
  }

  return (
    <>
     <h1>실시간 채팅</h1>
     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
     <input type="text" value={chat} onChange={(e) => setChat(e.target.value)} />
     <div>
      {message.map((message, index) => (
        <p key={index}>{message.username} : {message.content} - {message.time}</p>
      ))}
     </div>
     <button onClick={handleSubmit}>전송</button>
    </>
  )

}

export default Chat
