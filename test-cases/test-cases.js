// Fountain.js (https://github.com/mattdaly/Fountain.js) to parse
// fountain to HTML.
fountain = require('./fountain.js');

// Reverse-Fountain.js to parse HTML to fountain
reverseFountain = require('./../reverse-fountain.js');

// Module to handle file system i/o
const fs = require('fs');

// These are fountain screenplays that are used for test cases.
// All of them are downloaded from https://fountain.io/syntax/.
// To add more test cases, simply add more fountain screenplays to the
// 'testScreenplays' array and put the files on 'test-cases' folder.

var testScreenplays = [];
testScreenplays[0] = 'Big-Fish.fountain';
testScreenplays[1] = 'Brick & Steel.fountain';
testScreenplays[2] = 'The Last Birthday Card.fountain';
// testScreenplays[3] = 'Add more fountain test script here, etc.';

// Convert each fountain screenplays to HTML using fountain.js, and then
// convert back to fountain using reverse-fountain.js. If the results are
// matched, then we're good.

for (var i = 0; i < testScreenplays.length; i++) {
  console.log('Test Case #' + (i + 1) + ': ' + testScreenplays[i]);

  var originalScreenplay = fs.readFileSync('./' + testScreenplays[i]);
  // console.log('Fountain screenplay length: ' + originalScreenplay.length.toLocaleString() + ' chars'); // DEBUG

  // Fountain.js: Parse fountain to HTML
  fountain.parse(originalScreenplay.toString(), function(fountainJsHtml) {
    // console.log('Fountain.js HTML length: ' + fountainJsHtml.html.script.length.toLocaleString() + ' chars'); // DEBUG

    // Reverse-Fountain.js: Parse HTML to fountain
    reverseFountain.parse(fountainJsHtml.html.script, function(result) {
      if (result === originalScreenplay)
        console.log('Result: passed');
      else {
        console.log('Result: not passed');
      }
    });
  });

  console.log('--');
}
