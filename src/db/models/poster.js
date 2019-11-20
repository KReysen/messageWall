'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poster = sequelize.define('Poster', {
    posterName: DataTypes.STRING,
    messageId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Messages",
        key: "id",
        as: "messageId"
      }
    }
  }, {});
  Poster.associate = function(models) {
    Poster.belongsTo(models.Message, {
      foreignKey: "messageId",
      onDelete: "CASCADE",
    });
  };
  return Poster;
};