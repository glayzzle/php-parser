const fs = require("fs");
const fixtures = __dirname + "/fixtures/";
const parser = require("../src/index");

describe('fixtures', () => {
  fs.readdirSync(fixtures).forEach((name) => {
    describe("Testing " + name, () => {
      fs.readdirSync(fixtures + name).forEach((file) => {
        if (file.substring(file.length - 4) === ".php") {
          it("check " + file.substring(0, file.length - 4), () => {
            const filename = fixtures + name + '/' + file;
            const buffer = fs.readFileSync(filename).toString();
            let options = {};
            // read custom options
            if (buffer[0] === '{') {
              let offset = buffer.indexOf('\n}');
              if (offset > 0) {
                options = JSON.parse(buffer.substring(0, offset + 2));
              }
            }
            let original, ast;
            try {
              // parse the file
              ast = parser.parseCode(buffer, filename, options);
              ast = JSON.stringify(ast, null, 2);
            } catch(e) {
              console.error(e);
              // convert error to JSON
              ast = JSON.stringify(e);
            }
            try {
              original = fs.readFileSync(filename + '.json').toString();
            } catch(e) {
              console.log('Generating ' + filename + ' (' + e.message + ')')
              // GENERATE THE OUTPUT (IF FILE DOES NOT EXISTS)
              original = ast;
              fs.writeFileSync(filename + '.json', original);
            }
            original.should.be.exactly(ast, "Fail " + filename);
          });
        }
      });
    });
  });
});
