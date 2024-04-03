// models/Feedback.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');


const Feedback = sequelize.define('Feedback', {
  FeedbackID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Comments: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Feedback.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Feedback;
