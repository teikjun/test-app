const Sequelize = require('sequelize');
const db = require('../config/database');

const Categories = db.define('categories', { 
    catName: {
        type: Sequelize.STRING
    },
})

module.exports = Categories;