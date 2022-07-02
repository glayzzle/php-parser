// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/typehint_error.phpt
  it("Variadic arguments enforce types", function () {
    expect(parser.parseCode("<?php\nfunction test(array... $args) {\n    var_dump($args);\n}\ntest();\ntest([0], [1], [2]);\ntest([0], [1], 2);\n?>")).toMatchSnapshot();
  });
});
