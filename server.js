// DEPENDENCIES
const express = require('express');
const app = express();
const marsMissions = require('./models/marsMissions.js');
const bodyParser = require('body-parser')

// Set View Engine
app.set('view engine', 'ejs');

// use Body parser
// app.use(bodyParser.urlencoded({extended: false}));

// Set controller
const missionControl = require('./controllers/missionControl.js');

// Use controller
app.use('/', missionControl);


// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)


// PORT
const port = 3000;

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
