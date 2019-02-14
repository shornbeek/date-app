module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        
        isLoggedIn: {
            type: DataTypes.BOOLEAN,  
            },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2],
              
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        interests: {
            type: DataTypes.STRING
        },
        findMan: {
            type: DataTypes.BOOLEAN
        },
        findWoman: {
            type: DataTypes.BOOLEAN
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }

    }, {
        timestamps: false
    });
    return User;
}