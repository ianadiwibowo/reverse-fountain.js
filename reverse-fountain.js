// reverse-fountain.js 1.0
// GNU GENERAL PUBLIC LICENSE
// Copyright (c) 2017 Ian Adiwibowo
// https://github.com/ianadiwibowo/reverse-fountain.js

module.exports = {
  // TODO: For now we support only the script body, need to support the header/title also
  parse: function(fountainJsHtml, callback) {

    // Scene Heading
    var fountain = fountainJsHtml.replace(/<h3>(.*?)<\/h3>/g, '.$1\n\n')
    .replace(/\.INT/gi, 'INT') // These are standard headings
    .replace(/\.EXT/gi, 'EXT')
    .replace(/\.EST/gi, 'EST')
    .replace(/\.INT\.\/EXT/gi, 'INT./EXT')
    .replace(/\.INT\/EXT/gi, 'INT/EXT')
    .replace(/\.I\/E/gi, 'I/E')

    // Character
    .replace(/<h4>(.*?)<\/h4>/g, '$1\n')

    // Parentheses
    .replace(/<p class="parenthetical">(.*?)<\/p>/g, '$1\n')

    // Centered text
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
    .replace(/<h2>(.*?)<\/h2>/g, '> $1\n\n')
    .replace(/> CUT TO/g, 'CUT TO') // These are standard transitions
    .replace(/> SMASH CUT TO/g, 'SMASH CUT TO')

    // Simple newline
    .replace(/<br \/>/g, '\n')

    // Italics
    .replace(/<span class="italic">(.*?)<\/span>/g, '*$1*')

    // Bold
    // TODO: Put bold rule here
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')

    // Bold italics
    // TODO: Need bold italics rule?

    // Underline
    .replace(/<span class="underline">(.*?)<\/span>/g, '_$1_');

    callback(fountain); // DEBUG
  }
};
