// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_032.phpt
  it("Closure 032: Testing Closure and debug_backtrace", function () {
    expect(parser.parseCode("<?php\nfunction test(closure $a) {\n        $a(23);\n}\n$c = function($param) { print_r(debug_backtrace()); debug_print_backtrace(); };\n$c(23);\ntest($c);\n?>")).toMatchSnapshot();
  });
});
