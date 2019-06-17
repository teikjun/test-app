const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Idea = require('../models/Idea');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Get ideas list
router.get('/', (req, res) =>
    Idea.findAll()
        .then(ideas => res.render('ideas', {
                ideas
            }))
        .catch(err => console.log(err)));

// Display add idea form
router.get('/add', (req, res) => res.render('add'));

// Add an idea 
router.post('/add', (req, res) => {
    let { title, technologies, description } = req.body;
    let errors = [];

    // Validate Fields
    if (!title) {
        errors.push({ text: 'Please add a title' });
    }
    if (!technologies) {
        errors.push({ text: 'Please add some technologies' });
    }
    if (!description) {
        errors.push({ text: 'Please add a description' });
    }


    //Check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            title,
            technologies,
            description,
        });
    } else {
        //Insert into table 
        Idea.create({
            title,
            technologies,
            description,
        })
            .then(idea => res.redirect('/ideas'))
            .catch(err => console.log(err));
    }
});

// Search for ideas 
router.get('/search', (req, res) => { 
    let { term } = req.query; 
    Idea.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } }) 
        .then(ideas => res.render('ideas', { ideas }))
        .catch(err => console.log(err));
});

module.exports = router;
