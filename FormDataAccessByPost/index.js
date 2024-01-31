// const express = require('express');
// var app = express();

// var bodyparser = require('body-parser');

// app.use(bodyparser.json());;
// app.use(bodyparser.urlencoded({extended:true}));

// app.get('/register',function (req, res) {
//     res.sendFile(__dirname+'/register.html');    
// });

// app.post('/formSubmit',function(req,res){
//     res.send("Your Name is <b>"+req.body.name+"</b> and Your city is <b>"+req.body.city+"</b>");
// });

// app.listen(7091);

const express = require('express');
var app = express();

// Import the body-parser module to parse incoming JSON and URL-encoded form data
var bodyparser = require('body-parser');

// Use the body-parser.json() middleware to parse JSON data
app.use(bodyparser.json());

// Use the body-parser.urlencoded({extended:true}) middleware to parse URL-encoded form data
app.use(bodyparser.urlencoded({ extended: true }));

// Define a route handler for the '/register' GET request
app.get('/register', function (req, res) {
  // Send the 'register.html' file from the current directory ('__dirname')
  res.sendFile(__dirname + '/register.html');
});

// Define a route handler for the '/formSubmit' POST request
app.post('/formSubmit', function (req, res) {
  // Extract the user's input from the request body
  const name = req.body.name;
  const city = req.body.city;

  // Send a response message using the extracted user input, emphasizing the name and city using HTML tags
  res.send("Your Name is <b>" + name + "</b> and Your city is <b>" + city + "</b>");
});

// Start the Express application and listen on port 7091
app.listen(7091);
