const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation-controller');
const secureRoute = require('../middleware/secureRoute');

router.get('/members', secureRoute, conversationController.getMembers);

module.exports = router;
