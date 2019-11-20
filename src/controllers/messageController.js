const messageQueries = require("../db/queries.messages.js");

module.exports = {
    index(req, res, next){
        messageQueries.getAllMessages((err, messages) => {
            if(err){
                console.log('err');
                res.redirect(500, "static/index");
            } else {
                console.log('yes');
                res.render("messages/index", {messages});
            }
        })
    }
}