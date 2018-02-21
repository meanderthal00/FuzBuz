module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        // Giving the Profile model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6,20]
            }
        },

        beardStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aboutMe: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    // Profile.associate = function (models) {
    //     // Associating Profile with Posts
    //     // When an Profile is deleted, also delete any associated Posts
    //     Profile.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };

    //leaving this here in case we want to do this with a seperate author table, but connecting it with a profile seems less intuitive


    return Profile;
};