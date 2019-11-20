'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {

    content: {
      type:DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Message.associate = function(models) {
    Message.hasOne(models.Poster, {
      foreignKey: "messageId",
      as: "posterName"
    });
  };
  return Message;
};