// Importing the mongoose library
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/skynetsocial', {
    //if you are having issues with mongoose, try adding these options
    //mongodb://127.0.0.1/skynetsocial
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Store the connection object
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Export the connection to the database as a module
module.exports = db;
