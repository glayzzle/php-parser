// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_invoke_ref_warning.phpt
  it("Argument name for Closure::__invoke via call_user_func reference warning", function () {
    expect(parser.parseCode("<?php\n$test = function(&$arg) {};\ncall_user_func([$test, '__invoke'], null);\n?>")).toMatchSnapshot();
  });
});
