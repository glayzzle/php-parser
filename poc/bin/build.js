#!/usr/bin/node


const http = require('https');
const fs = require('fs');
const lexer = require('../grammar/lexer');

// 1. Downloading lexer files from PHP
const files = {
    "php7": {
        "lexer.l": "https://raw.githubusercontent.com/php/php-src/master/Zend/zend_language_scanner.l",
        "grammar.y": "https://raw.githubusercontent.com/php/php-src/master/Zend/zend_language_parser.y"
    },
    "php5": {
        "lexer.l": "https://raw.githubusercontent.com/php/php-src/PHP-5.6.40/Zend/zend_language_scanner.l",
        "grammar.y": "https://raw.githubusercontent.com/php/php-src/PHP-5.6.40/Zend/zend_language_parser.y"
    }
};
const target = __dirname + '/../zend';
const dl = [];
for(let ver in files) {
    for(let type in files[ver]) {
        dl.push(new Promise(function(version, filename, url, done, reject) {
            return done(true); // disable the download
            console.log('Downloading ' + filename + ' for ' + version);
            const file = fs.createWriteStream(target + '/' + version + '/' + filename);
            const request = http.get(url, function(response) {
              response.pipe(file);
              response.on('end', function() {
                  done(true);
              });
              response.on('error', function(e) {
                  reject(e);
              });
            });
        }.bind(this, ver, type, files[ver][type])));
    }
}
Promise.all(dl).then(function() {
    console.log('Download is ready');
    // upgrading the lexer
    lexer(target + '/php7/lexer.l', null);
}).catch(function(e) {
    console.error(e);
    process.exit(1);
});
