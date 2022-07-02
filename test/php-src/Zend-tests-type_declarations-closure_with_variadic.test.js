// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/closure_with_variadic.phpt
  it("Closure with variadic type declaration", function () {
    expect(parser.parseCode("<?php\n$f = function (stdClass ...$a) {\n    var_dump($a);\n};\n$f(new stdClass);\n?>")).toMatchSnapshot();
  });
});
