// reverse-fountain.js 1.0
// GNU GENERAL PUBLIC LICENSE
// Copyright (c) 2017 Ian Adiwibowo
// https://github.com/ianadiwibowo/reverse-fountain.js

module.exports = {
  parse: function(fountainJsHtml, callback) {

    // Scene Heading
    var fountain = fountainJsHtml.replace(/<h3>(.*?)<\/h3>/g, '.$1\n\n')
    .replace(/\.INT\. /g, 'INT. ')
    .replace(/\.EXT\. /g, 'EXT. ')
    /// `.I/E ` rules here

    // Character
    .replace(/<h4>(.*?)<\/h4>/g, '$1\n')

    // Parentheses
    .replace(/<p class="parenthetical">(.*?)<\/p>/g, '$1\n')

    // Centered
    .replace(/<p class="centered">(.*?)<\/p>/g, '> $1 <\n')

    // Action (& Dialog)
    .replace(/<\/p>\n<p>/g, '</p><p>')
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')

    // Dialog
    .replace(/<div class="dialogue">/g, '')
    .replace(/<\/div> /g, '')

    // Dual Dialog
    .replace(/<div class="dual-dialogue"><div class="dialogue left">/g, '')
    .replace(/<div class="dialogue right">(.*?)\n/g, '$1 ^\n')

    // Transition
    .replace(/<h2>(.*?)<\/h2>/g, '$1\n\n')

    // Simple newline
    .replace(/<br \/>/g, '\n')

    // Italic
    .replace(/<span class="italic">(.*?)<\/span>/g, '*$1*')

    // Underline
    .replace(/<span class="underline">(.*?)<\/span>/g, '_$1_');

    callback(fountain); // DEBUG
  }
};
