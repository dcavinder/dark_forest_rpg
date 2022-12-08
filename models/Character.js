const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    constitution: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    intellegence: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    charisma: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;
