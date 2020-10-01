const router = require('express').Router();

const marsMissions = require('../models/marsMissions.js');

router.get('/', (req, res) => {
    res.render('index', {marsMissions: marsMissions});
});

router.get('/:mission', (req, res) => {
    let mission = req.params.mission;
    res.render('missions/show', {
        marsMissions: marsMissions,
        mission: mission
    })
})

module.exports = router;
