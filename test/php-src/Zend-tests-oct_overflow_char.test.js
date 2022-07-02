// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/oct_overflow_char.phpt
  it("Octal overflow in string interpolation", function () {
    expect(parser.parseCode("<?php\n// \"abc\", ordinarily 'b' would be \\142, but we'll deliberately overflow the value by \\400\necho \"\\141\\542\\143\\n\";\n?>")).toMatchSnapshot();
  });
});
