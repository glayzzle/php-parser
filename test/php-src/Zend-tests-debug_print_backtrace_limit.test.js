// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_print_backtrace_limit.phpt
  it("debug_print_backtrace limit", function () {
    expect(parser.parseCode("<?php\nfunction a() {\n    b();\n}\nfunction b() {\n    c();\n}\nfunction c() {\n    debug_print_backtrace(0, 1);\n    echo \"\\n\";\n    debug_print_backtrace(0, 2);\n    echo \"\\n\";\n    debug_print_backtrace(0, 0);\n    echo \"\\n\";\n    debug_print_backtrace(0, 4);\n}\na();\n?>")).toMatchSnapshot();
  });
});
