const Conversation = require("../models/conversation-model");
const User = require("../models/user-model");
const Profile = require("../models/profile-model");

exports.getMembers = async (req, res) => {
    try {
        const userId = req.user._id;

        // Find all conversations involving the user
        const conversations = await Conversation.find({ members: { $all: [userId] } }).populate('members', '-password -__v');

        if(conversations.length === 0 || !conversations) {
            return res.status(200).json([]);
        }

        // Extract all unique member IDs except the user's own ID
        const membersSet = new Set();
        conversations.forEach(conversation => {
            conversation.members.forEach(member => {
                if (!member._id.equals(userId)) {
                    membersSet.add(member._id.toString());
                }
            });
        });

        // Fetch user details for the unique member IDs
        const members = await User.find({ _id: { $in: Array.from(membersSet) } }).select('-password -__v');

        // Fetch profiles for each member
        const profiles = await Promise.all(members.map(member => Profile.findOne({ id: member._id })));

        res.status(200).json(profiles);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
