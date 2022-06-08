// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fatal-error-in-fiber.phpt
  it("Fatal error in new fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    trigger_error(\"Fatal error in fiber\", E_USER_ERROR);\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
