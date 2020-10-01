const router = require('express').Router();

const marsMissions = require('../models/marsMissions.js');

router.get('/', (req, res) => {
    res.render('index', {marsMissions: marsMissions});
});

router.get('/:mission', (req, res) => {
    res.render('show', {marsMissions: marsMissions})
})

module.exports = router;
