// reverse-fountain.js 1.0
// GNU GENERAL PUBLIC LICENSE
// Copyright (c) 2017 Ian Adiwibowo
// https://github.com/ianadiwibowo/reverse-fountain.js

module.exports = {
  parse: function(fountainJsHtml, callback) {

    // Scene Heading
    var fountain = fountainJsHtml.replace(/<h3>/g, '')
    .replace(/<\/h3>/g, '\n\n')

    // Character
    .replace(/<h4>/g, '')
    .replace(/<\/h4>/g, '\n')

    // Parentheses
    .replace(/<p class="parenthetical">(.*?)<\/p>/g, '$1\n')

    // Action (& Dialog)
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n\n')

    // Dialog
    .replace(/<div class="dialogue">/g, '')
    .replace(/<\/div> /g, '')

    // Dual Dialog
    .replace(/<div class="dual-dialogue"><div class="dialogue left">/g, '')
    .replace(/<div class="dialogue right">(.*?)\n/g, '$1 ^\n')

    // Transition
    .replace(/<h2>/g, '')
    .replace(/<\/h2>/g, '\n\n')

    // Others
    .replace(/<br \/>/g, '\n');

    callback(fountain); // DEBUG
  }
};
