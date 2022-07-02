// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_007.phpt
  it("Using lambda with list()", function () {
    expect(parser.parseCode("<?php\nlist($x, $y) = function() { };\nvar_dump($x, $y);\n?>")).toMatchSnapshot();
  });
});
