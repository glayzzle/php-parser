// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61225.phpt
  it("Bug #61225 (Lexing 0b0*+<NUM> incorrectly)", function () {
    expect(parser.parseCode("<?php\necho 0b00+1;\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
