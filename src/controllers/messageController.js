const messageQueries = require("../db/queries.messages.js");

module.exports = {
    index(req, res, next){
      messageQueries.getAllMessages((err, messages) => {
        if(err){
          res.redirect(500, 'static/index');
        } else {
          res.render('messages/index', {messages});
        }
      })
    },
    new(req,res,next) {
      res.render("messages/new");
    },
    create(req, res, next){
      let newMessage = {
        content: req.body.content
      };
      messageQueries.addMessage(newMessage, (err, message) => {
        if(err){
          res.redirect(500, 'messages/new');
        } else {
          res.redirect(303, '/messages')
        }
      });
    },
    edit(req, res, next){
      messageQueries.getMessage(req.params.id, (err, message) => {
        if(err || message == null) {
          res.redirect(404, '/');
        } else {
          res.render('messages/edit', {message});
        }
      });
    },
    update(req, res, next){

      //#1
           messageQueries.updateMessage(req.params.id, req.body, (err, message) => {
      
      //#2
             if(err || message == null){
               res.redirect(404, `/messages/${req.params.id}/edit`);
             } else {
               res.redirect(`/messages/`);
             }
           });
         }
 
 

}