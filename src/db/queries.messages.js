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
    },
    getMessage(id, callback){
        return Message.findById(id)
        .then((message) => {
            callback(null, message);
        }) 
        .catch((err) => {
            callback(err);
        })
    },
    updateMessage(id, updatedMessage, callback) {
        return Message.findById(id)
        .then((message) => {
            if(!message){
                return callback("Message not found");
            }
            message.update(updatedMessage, {
                fields: Object.keys(updatedMessage)
            })
            .then(() => {
                callback(null, message);
            })
            .catch((err) => {
                callback(err)
            });
        });
    }
    
   
}