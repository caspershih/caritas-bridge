module.exports = function(sequelize, DataTypes) {
  var Charity = sequelize.define("charity", {
    name: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
    address1: {type: DataTypes.STRING, allowNull: false},
    address2: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    state: {type: DataTypes.STRING, allowNull: false},
    zip: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    webURL: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    ein: {type: DataTypes.INTEGER, allowNull: false},


  });

  return Charity;
};
