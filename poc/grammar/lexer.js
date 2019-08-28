/**
 * This module open a lexer file and extract it's parts
 */
const lexer = require('jison-gho').lexParser;
const fs = require('fs');
module.exports = function(filename, destination) {
    fs.readFile(filename, function(err, contents) { 
        contents = contents.toString();
        // remove header / footer
        let header = contents.indexOf('/*!re2c');
        let footer = contents.indexOf('\n*/\n', header);
        contents = contents.substring(header + 7, footer);
        // remove macro
        contents = contents.replace('re2c:yyfill:check = 0;', '');
        // remove trigger on states
        contents = contents.replace(/\<\!\*\>[^;]+;\n*/g, '');
        // handle script blocks
        contents = contents.replace(/(\<[^\>]+[^\n]+)\s+{\n*/g, '$1 %{\n');
        contents = contents.replace(/\n+\}\n/g, '\n%}\n');
        // locate macros
        let macro = contents.indexOf('\n<');
        contents = contents.substring(0, macro - 1) + '\n%%\n' + contents.substring(macro + 1);
        // migrate each macro
        contents = contents.replace(/^(\<.*?\>)([^\n]+)\s+\%\{(.*?)\%\}/gms, function(text, state, tag, script) {
            return state + tag + '\treturn null /* @todo ' + tag + '*/ ;';
        });
        try {
            const ast = lexer.parse(contents);
            console.log(ast);    
        } catch(e) {
            console.error(e.message);
        }
    });
};