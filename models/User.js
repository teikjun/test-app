// import node modules
const sequelize = require("sequelize");
const db = require('../config/database');

const User = db.define('user', { 
    name: {
        type: Sequelize.STRING
    },
    googleid: {
        type: Sequelize.STRING
    },
    profileImage: {
        type: Sequelize.STRING
    },
})

module.exports = User;
