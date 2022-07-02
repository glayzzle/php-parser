// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_print_backtrace_from_main.phpt
  it("Calling debug_print_backtrace() from main script", function () {
    expect(parser.parseCode("<?php\ndebug_print_backtrace();\n?>")).toMatchSnapshot();
  });
});
