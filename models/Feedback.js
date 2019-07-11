const Sequelize = require('sequelize');
const db = require('../config/database');

const Feedback = db.define('feedback', { 
    techName: {
        type: Sequelize.STRING
    }
})

module.exports = Feedback;