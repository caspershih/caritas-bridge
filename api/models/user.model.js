module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
        username: DataTypes.TEXT,
        hash: DataTypes.BLOB,
        salt: DataTypes.BLOB
    });
}