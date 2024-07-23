const Conversation = require("../models/conversation-model");
const Message = require("../models/message-model");
const { getReceiverSocketId, io } = require("../socketIO/server");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverid } = req.params;
    const senderid = req.user._id;

    //find conversation between sender and receiver if they had one
    let conversation = await Conversation.findOne({
      members: { $all: [senderid, receiverid] },
    });

    //if no conversation happend between sender and receiver then create one
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderid, receiverid],
      });
    }

    const newMessage = new Message({
      senderid,
      receiverid,
      message,
    });

    //if new message is created then push the message id on the conversation messages array
    //which stores all the messages id pf the conversation between the sender and receiver
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //save the conversation and new message
    await Promise.all([conversation.save(), newMessage.save()]);

    //send new message to the receiver
    const receiverSocketId=getReceiverSocketId(receiverid);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage",newMessage);
    }

    res.status(200).json({ message: "successfully", newMessage: newMessage });

  } catch (error) {
    console.log("Error in sending message ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;// receiver id
    const senderid = req.user._id;

    //find conversation between sender and receiver
    let conversation = await Conversation.findOne({
      members: { $all: [senderid, chatUser] },
    }).populate("messages");

    //if no conversation happend between sender and receiver then give empty array
    if (!conversation) {
      return res.status(200).json([]);
    }
    
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getting message ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
