// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/generators002.phpt
  it("Generator return type must be a supertype of Generator", function () {
    expect(parser.parseCode("<?php\nfunction test1() : StdClass {\n    yield 1;\n}\n?>")).toMatchSnapshot();
  });
});
