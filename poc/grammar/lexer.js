/**
 * This module open a lexer file and extract it's parts
 */
const lexer = require('jison-gho').lexParser;
const fs = require('fs');
const tokenize = require('./ctok');
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
        contents = contents.substring(0, macro) + '\n%options case-insensitive\n\n%%\n\n' + contents.substring(macro + 1);
        
        // migrate each macro
        let lexerTokens = [];
        contents = contents.replace(/^(\<.*?\>)([^\n]+)\s+\%\{(.*?)\%\}/gms, function(text, state, tag, script) {
            console.log(script);
            let src = '';
            const tokens = tokenize(script);
            for(let i = 0; i < tokens.length; i++) {
                let token = tokens[i];
                switch(token[1]) {
                    case 'RETURN_TOKEN':
                        let tok = tokens[i + 2][1];
                        src += 'return ' + tok + ';';
                        if (lexerTokens.indexOf(tok) === -1)  {
                            lexerTokens.push(tok);
                        }
                        i += 4;
                        break;
                    case 'goto':
                        // ignore goto
                        i += 3;
                        break;
                    default:
                        src += token[1];
                }                
            }
            return state + tag + '\t{ \n ' + src + '\n}';
        });
        try {
            const ast = lexer.parse(contents);
            console.log(ast);    
        } catch(e) {
            console.error(e.message);
        }
    });
};