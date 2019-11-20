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
    
   
}