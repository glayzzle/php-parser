// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_022.phpt
  it("Closure 022: Closure properties", function () {
    expect(parser.parseCode("<?php\n$a = 0;\n$foo = function() use ($a) {\n};\n$foo->a = 1;\n?>")).toMatchSnapshot();
  });
});
