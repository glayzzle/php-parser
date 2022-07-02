// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_use_parameter_name.phpt
  it("Can't use name of lexical variable for parameter", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$fn = function ($a) use ($a) {\n    var_dump($a);\n};\n$fn(2);\n?>")).toMatchSnapshot();
  });
});
