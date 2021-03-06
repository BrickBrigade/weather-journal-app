// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Setup Server
const server = app.listen(port, listening);
 function listening(){
	console.log(`running on localhost: ${port}`);
}

app.get('/all', sendData);
function sendData (req, res) {
	res.send(projectData);
};

// POST an entry
app.post('/add', addEntry);
function addEntry (req, res){
	projectData.push(req.body);
};
