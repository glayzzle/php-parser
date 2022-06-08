// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61095.phpt
  it("Bug #61095 (Lexing 0x00*+<NUM> incorrectly)", function () {
    expect(parser.parseCode("<?php\necho 0x00+2;\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
