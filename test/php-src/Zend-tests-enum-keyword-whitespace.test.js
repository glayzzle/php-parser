// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/keyword-whitespace.phpt
  it("Enum keyword can be followed by arbitrary whitespaces", function () {
    expect(parser.parseCode("<?php\nenum A {}\nenum  B {}\nenum\tC {}\nenum\t E {}\nenum\nF {}\nenum\n G {}\n?>")).toMatchSnapshot();
  });
});
