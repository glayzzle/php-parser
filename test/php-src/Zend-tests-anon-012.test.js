// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/012.phpt
  it("Ensure correct unmangling of private property names for anonymous class instances", function () {
    expect(parser.parseCode("<?php\nvar_dump(new class { private $foo; });\n?>")).toMatchSnapshot();
  });
});
