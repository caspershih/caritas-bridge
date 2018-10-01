module.exports = function(sequelize, DataTypes) {
  var nonProfit = sequelize.define("nonProfit", {
    charityName: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
    address1: {type: DataTypes.STRING, allowNull: false},
    address2: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    state: {type: DataTypes.STRING, allowNull: false},
    zip: {type: DataTypes.STRING, allowNull: false},
    mission: {type: DataTypes.BLOB, allowNull: true},
    webURL: {type: DataTypes.STRING, allowNull: true},
    ein: {type: DataTypes.INTEGER, allowNull: false},


  });

  return nonProfit;
};
