module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", {
        user1Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user2Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user1Waved: {
            type: DataTypes.Boolean
        },
        user2Waved: {
            type: DataTypes.Boolean
        },
        user1Active: {
            type: DataTypes.Boolean
        },
        user2Active: {
            type: DataTypes.Boolean
        },
        canCall: {
            type: DataTypes.Boolean
        }
    });
    return Matches;
}