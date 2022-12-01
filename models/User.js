// For this model we should be able to ref #23>models>User.js in the 14-MVC class section
// I think it would be a good idea to have a user id (number), user name, email, and password.
//additionally we might condsider allowing users to add their gamer tag as well

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passphrase: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    },
  );

module.exports = User;