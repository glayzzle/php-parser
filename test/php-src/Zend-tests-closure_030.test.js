// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_030.phpt
  it("Closure 030: Using lambda with variable variables", function () {
    expect(parser.parseCode("<?php\n$b = function() { return func_get_args(); };\n$a = 'b';\nvar_dump($$a(1));\nvar_dump($$a->__invoke(2));\n?>")).toMatchSnapshot();
  });
});
