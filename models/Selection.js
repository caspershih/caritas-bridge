module.exports = function(sequelize, DataTypes) {
    var Selection = sequelize.define("Selection", {
      ein: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      charityName: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      mission: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      url: {type: DataTypes.TEXT, allowNull: true, len: [1]},
      cause: {type: DataTypes.TEXT, allowNull: true, len: [1]}
    
    });
  
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