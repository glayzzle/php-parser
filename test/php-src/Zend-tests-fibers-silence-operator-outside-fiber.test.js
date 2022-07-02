// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/silence-operator-outside-fiber.phpt
  it("Silence operator does not leak into fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = @new Fiber(function (): void {\n    trigger_error(\"Warning A\", E_USER_WARNING);\n    Fiber::suspend();\n    trigger_error(\"Warning C\", E_USER_WARNING);\n});\n@$fiber->start();\ntrigger_error(\"Warning B\", E_USER_WARNING);\n@$fiber->resume();\ntrigger_error(\"Warning D\", E_USER_WARNING);\n?>")).toMatchSnapshot();
  });
});
