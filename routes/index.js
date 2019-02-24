const express = require('express');

const router = express.Router();

const data = require('../data/data.json');
const projects = data.projects


router.get('/', (req, res) => {
    res.render('index', {projects});
}); // end homepage get

router.get('/about', (req, res) => {
    res.render('about');
}); // end about page get

router.get('/projects/:id', (req, res) => {
    const id = req.params.id
    if(id < projects.length){
    res.render('project', {id, projects});
    } else {
        res.redirect('/oops');
    }
}); // end projects get route

module.exports = router;