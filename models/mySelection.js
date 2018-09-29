module.exports = function(sequelize, DataTypes) {
    var Selection = sequelize.define("Selection", {
      company_name: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
      company_category: {type: DataTypes.TEXT, allowNull: false, len: [1]}});
  
    Selection.associate = function(models) {
      // We're saying that a Product should belong to a User
      // A Product can't be created without an User due to the foreign key constraint
      Selection.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Selection;
  };