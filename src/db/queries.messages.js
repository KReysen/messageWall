const Message = require("./models").Message;

module.exports = {
    getAllMessages(callback){
        return Message.findAll()
        .then((messages) => {
            callback(null, messages);
        })
        .catch((err) => {
            callback(err);
        })
    },
    addMessage(newMessage, callback){
        return Message.create({
            content: newMessage.content
        })
        .then((message) => {
            callback(null, message);
        })
        .catch((err) => {
            callback(err);
        })
    }
    
   
}