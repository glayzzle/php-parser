// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_bindTo_preserves_used_variables.phpt
  it("Closure::bindTo() should preserve used variables", function () {
    expect(parser.parseCode("<?php\n$var = 0;\n$fn = function() use($var) {\n    var_dump($var);\n};\n$fn();\n$fn = $fn->bindTo(null, null);\n$fn();\n?>")).toMatchSnapshot();
  });
});
