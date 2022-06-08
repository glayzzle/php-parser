// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/backtrace-nested.phpt
  it("Backtrace in nested function call", function () {
    expect(parser.parseCode("<?php\nfunction suspend_fiber(): void\n{\n    \\Fiber::suspend();\n    throw new Exception;\n}\n$fiber = new Fiber(function (): void {\n    suspend_fiber();\n});\n$fiber->start();\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
