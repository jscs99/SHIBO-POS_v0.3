// models/billModel.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const BillModel = sequelize.define(
    "Bill",
    {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userAlias: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tax: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  subTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cartItems: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, { timestamps: true });

return BillModel;
};