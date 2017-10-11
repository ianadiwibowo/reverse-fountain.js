# Reverse-Fountain.js

Reverse-Fountain.js is a Node.js library to convert Fountain.js html to plain fountain format.

## Why Reverse-Fountain.js was Created?

[Matt Daly](https://github.com/mattdaly) created [Fountain.js](https://github.com/mattdaly/Fountain.js), a JavaScript library to convert [fountain](https://fountain.io/) (film script open format) to html. This is the library that I used in [Ubud](https://github.com/ianadiwibowo/ubud), a film scriptwriting software that I'm currently writing.

Up until now Fountain.js lacks one thing: a way to convert its html back to plain fountain. Until Matt provides the functionality, Reverse-Fountain.js is here to fix this situation.

**NOTE**: This library isn't finished yet.

## Installation

Copy and require `reverse-fountain.js` in your file. Put it on the same structure/folder as `fountain.js` for easier organization.

To convert from `fountain.js` html to plain fountain text:

```javascript
// Require both Fountain.js and Reverse-Fountain.js
fountain = require('./fountain.js');
reverseFountain = require('./reverse-fountain.js');

// Get the original fountain text (by any means)
var originalScreenplay = "INT. DRAGONSTONE (PORT) - DAY";

// Fountain.js: Parse fountain to HTML
fountain.parse(originalScreenplay.toString(), function(fountainJsResult) {

  // Reverse-Fountain.js: Parse HTML to fountain
  reverseFountain.parse(fountainJsResult.html.script, function(result) {
    // This is the final fountain result
    // "INT. DRAGONSTONE (PORT) - DAY"
    console.log(result);
  });
});
```
