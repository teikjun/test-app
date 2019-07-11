const Sequelize = require('sequelize');
const db = require('../config/database');

const Technologies = db.define('idea', { 
    techName: {
        type: Sequelize.STRING
    }
})

module.exports = Technologies;