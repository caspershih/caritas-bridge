var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    middleInitial: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    state: {type: DataTypes.STRING},
    zip: {type: DataTypes.INTEGER},
    phone: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
  });

  User.associate = function(models) {
    // Associating User with Products
    // When an User is deleted, also delete any associated Products
    User.hasMany(models.Selection, {
      onDelete: "cascade"
    });
  };

  return User;
};
