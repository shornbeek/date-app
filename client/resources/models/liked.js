module.exports = function(sequelize, DataTypes) {
    var Liked = sequelize.define("Post", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        liked: {
            type: DataTypes.INTEGER,
            allowNull: false 
        }
    });
    return Liked;
}