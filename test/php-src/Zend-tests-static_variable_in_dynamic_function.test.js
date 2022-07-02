// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_variable_in_dynamic_function.phpt
  it("Static variables in dynamically declared function (first use before dynamic def dtor)", function () {
    expect(parser.parseCode("<?php\n$code = <<<'CODE'\nif (1) {\n    function test() {\n        static $x = 0;\n        var_dump(++$x);\n    }\n    test();\n}\nCODE;\neval($code);\ntest();\n?>")).toMatchSnapshot();
  });
});
