'use strict';

const fs = require('fs');
const path = require('path');
const documentation = require('documentation');

const config = [
  {
    files: './src/index.js',
    format: "md",
    filename: "README.md",
    destination: path.resolve(__dirname, 'docs'),
    options: {
      shallow: true
    }
  },
  {
    files: ["./src/ast.js", "./src/ast"],
    format: "md",
    filename: "AST.md",
    destination: path.resolve(__dirname, 'docs'),
    options: {
      shallow: false
    }
  },
  {
    files: ["./src/parser.js", "./src/parser"],
    format: "md",
    filename: "parser.md",
    destination: path.resolve(__dirname, 'docs'),
    options: {
      shallow: false
    }
  },
  {
    files: ["./src/lexer.js", "./src/lexer"],
    format: "md",
    filename: "lexer.md",
    destination: path.resolve(__dirname, 'docs'),
    options: {
      shallow: false
    }
  }
];

config.reduce((p, obj) => {
  return p.then(() => {
    return documentation.build(obj.files, obj.options)
      .then(documentation.formats[obj.format])
      .then(output => {
        console.log(`File ${obj.filename} has been written.`);
        fs.writeFileSync(path.join(obj.destination, obj.filename), output);
      });
  })
}, Promise.resolve()).then(() => {
  console.log('All files has been written.');
}).catch(err => {
  console.error(err);
})
