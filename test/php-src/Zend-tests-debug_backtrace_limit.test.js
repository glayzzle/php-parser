// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_backtrace_limit.phpt
  it("debug_backtrace limit", function () {
    expect(parser.parseCode("<?php\nfunction a() {\n    b();\n}\nfunction b() {\n    c();\n}\nfunction c() {\n    print_r(debug_backtrace(0, 1));\n    print_r(debug_backtrace(0, 2));\n    print_r(debug_backtrace(0, 0));\n    print_r(debug_backtrace(0, 4));\n}\na();\n?>")).toMatchSnapshot();
  });
});
