const Sequelize = require('sequelize');
const db = require('../config/database');

const Resource = db.define('resource', { 
    link: {
        type: Sequelize.STRING
    },
    decription: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
})

module.exports = Resource;