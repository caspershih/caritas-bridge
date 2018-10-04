var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("messages", {
    // Giving the Messages model a name of type STRING
    mailto: {type: DataTypes.STRING},
    subject: {type: DataTypes.STRING},
    from: {type: DataTypes.STRING},
    message: {type: DataTypes.STRING},
    sent: {type: DataTypes.TINYINT},
    received: {type: DataTypes.TINYINT},
    replyreq: {type: DataTypes.TINYINT},
  });

  return Messages;
};
