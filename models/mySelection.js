module.exports = function(sequelize, DataTypes) {
    var Selection = sequelize.define("Selection", {
      nonProfit_ein: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      nonProfit_charityName: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      nonProfit_mission: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      nonProfit_websiteURL: {type: DataTypes.TEXT, allowNull: false, len: [1]}});
  
    Selection.associate = function(models) {
      // We're saying that content should belong to a User
      // Content can't be created without a User due to the foreign key constraint
      Selection.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Selection;
  };