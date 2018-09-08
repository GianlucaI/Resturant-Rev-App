// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Characters (DATA)
// =============================================================
var reservations = [
  {
    routeName: 'djc ',
    name: 'David',
    phone: '5198313325',
    email: 'duke6am@hotmail.com',
    uniqueID: 2000
  }
];
// console.log(reservations);
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/table', function(req, res) {
//   res.sendFile(path.join(__dirname, 'table.html'));
// });

// app.get('/makereservations', function(req, res) {
//   res.sendFile(path.join(__dirname, 'makereservations.html'));
// });

// Displays all tables
app.get('/api/tables', function(req, res) {
  return res.json(reservations);
});

app.get('/api/waitlist', function(req, res) {
  return res.json(waitlist);
});

// // Displays a single character, or returns false
// app.get('/api/characters/:character', function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New reservation - takes in JSON input

app.post('/api/makereservations', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  console.log(req.body);
  var newreservation = req.body;
  // newreservation.routeName = newreservation.name
  //   .replace(/\s+/g, '')
  //   .toLowerCase();
  console.log(newreservation);
  reservations.push(newreservation);
  res.json(newreservation);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
});

//test

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
