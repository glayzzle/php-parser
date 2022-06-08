// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/generators006.phpt
  it("Generator return type must be a supertype of Generator (with union types)", function () {
    expect(parser.parseCode("<?php\nfunction test1() : StdClass|ArrayObject|array {\n    yield 1;\n}\n?>")).toMatchSnapshot();
  });
});
