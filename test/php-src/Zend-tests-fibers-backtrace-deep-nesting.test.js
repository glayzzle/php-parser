// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/backtrace-deep-nesting.phpt
  it("Backtrace in deeply nested function call", function () {
    expect(parser.parseCode("<?php\nfunction suspend_fiber(int $level): void\n{\n    if ($level >= 10) {\n        $value = \\Fiber::suspend($level);\n        failing_function($value);\n    }\n    suspend_fiber($level + 1);\n}\nfunction failing_function(string $value): never\n{\n    throw_exception();\n}\nfunction throw_exception(): never\n{\n    throw new Exception;\n}\n$fiber = new Fiber(function (): void {\n    suspend_fiber(0);\n});\n$fiber->start();\n$fiber->resume('test');\n?>")).toMatchSnapshot();
  });
});
