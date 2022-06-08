// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/debug-backtrace.phpt
  it("Print backtrace in fiber", function () {
    expect(parser.parseCode("<?php\nfunction inner_function(): void\n{\n    debug_print_backtrace();\n}\n$fiber = new Fiber(function (): void {\n    inner_function();\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
