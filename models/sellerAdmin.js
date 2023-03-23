const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const SellerAdmin = sequelize.define('sellerAdmin',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    choosePrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    chooseProduct: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = SellerAdmin;