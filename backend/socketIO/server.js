const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://expshare.onrender.com",
    methods: ["GET", "POST"],
  },
});

// realtime message
const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

//used to store connected userId along with socketId
const users = {};

//used to listen events on server side
io.on("connection", (socket) => {
  console.log("user connected ", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log(users);
  }
  //used to send th events to all connected clients
  io.emit("getOnlineUsers", Object.keys(users));

  //used to listen events on client side events emitted by server side and client side
  socket.on("disconnect", () => {
    console.log("user disconnected ", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

module.exports = { io, server, app, getReceiverSocketId };
