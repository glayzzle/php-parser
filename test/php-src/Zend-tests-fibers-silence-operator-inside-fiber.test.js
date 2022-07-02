// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/silence-operator-inside-fiber.phpt
  it("Silence operator does not leak out of fiber", function () {
    expect(parser.parseCode("<?php\nfunction suspend_with_warnings(): void {\n    trigger_error(\"Warning A\", E_USER_WARNING); // Should be silenced.\n    Fiber::suspend();\n    trigger_error(\"Warning B\", E_USER_WARNING); // Should be silenced.\n}\n$fiber = new Fiber(function (): void {\n    @suspend_with_warnings();\n});\n$fiber->start();\ntrigger_error(\"Warning C\", E_USER_WARNING);\n$fiber->resume();\ntrigger_error(\"Warning D\", E_USER_WARNING);\n?>")).toMatchSnapshot();
  });
});
