const Sequelize = require('sequelize');
const db = require('../config/database');

const Idea = db.define('idea', { 
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
})

module.exports = Idea;