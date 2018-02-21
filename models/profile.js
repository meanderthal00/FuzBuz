module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        // Giving the Profile model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     // len: [1]
            // }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },

        beardStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1]
            // }
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