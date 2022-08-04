module.exports = (sequelize, DataTypes) => {

    const OnBoarding = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        fcm_token: {
            type: DataTypes.STRING
        },
        date_of_birth: {
            type: DataTypes.STRING,
        },
        user_type: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jwt_token: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.INTEGER
        },
        user_verified: {
            type: DataTypes.BOOLEAN
        },
        image: {
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    })

    return OnBoarding

}
