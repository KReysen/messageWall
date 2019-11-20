const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController")

router.get("/messages", messageController.index);
// router.post("/messages/create", messageController.create);

module.exports = router;