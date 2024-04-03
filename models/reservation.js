const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
  ReservationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ReservationTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  PartySize: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TableNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Reservation;
