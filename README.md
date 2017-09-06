# Reverse-Fountain.js

A JavaScript library to convert Fountain.js formatted html back to fountain format.

## Why Reverse-Fountain.js was Created?

[Matt Daly](https://github.com/mattdaly) created [Fountain.js](https://github.com/mattdaly/Fountain.js), a JavaScript library to convert [fountain](https://fountain.io/) (film script open format) to formatted html. This is the library that I included in [Ubud](https://github.com/ianadiwibowo/ubud), a film scriptwriting software that I'm currently writing.

Fountain.js currently lacks one thing: a way to convert its formatted html back to fountain. Until then, Reverse-Fountain.js provides this function.

**NOTE**: This library isn't finished yet (as long as this line exists).

## Installation

Copy and require `reverse-fountain.js` in your file. Put it on the same structure/folder as `fountain.js` for easy organization.

To convert from `fountain.js` html to plain fountain text, see example below:

```javasacript
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
