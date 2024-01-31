// Require the 'fs' (File System) module to work with files.
var fs = require('fs');

// Create a Readable Stream to read the file 'demofile.txt'.
var readStream = fs.createReadStream('./demofile.txt');

// Set up an event listener for the 'open' event on the Readable Stream.
readStream.on('open', function () {
    console.log('The file is open'); // Print a message when the file is opened.
    
    // Read the file 'demofile.txt' using the 'fs.readFile' method.
    // The 'utf8' encoding is specified to read the file as a text file.
    fs.readFile('demofile.txt', 'utf8', function (err, data) {
        if (err) {
            throw err; // If an error occurs, throw an error.
        }
        console.log('Reading File'); // Print a message indicating file reading.
        console.log(data); // Print the content of the file.
    });
});
