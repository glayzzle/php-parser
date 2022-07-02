// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_029.phpt
  it("Closure 029: Testing lambda with instanceof operator", function () {
    expect(parser.parseCode("<?php\nvar_dump(function() { } instanceof closure);\nvar_dump(function(&$x) { } instanceof closure);\nvar_dump(@function(&$x) use ($y, $z) { } instanceof closure);\n?>")).toMatchSnapshot();
  });
});
