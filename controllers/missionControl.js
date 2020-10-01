const router = require('express').Router();

const marsMissions = require('../models/marsMissions.js');

router.get('/', (req, res) => {
    req.render('index', {marsMissions: marsMissions});
});

router.get('/:mission', (req, res) => {
    req.render('show', {marsMissions: marsMissions})
})
