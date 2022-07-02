// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/out-of-memory-in-fiber.phpt
  it("Out of Memory in a fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $buffer = '';\n    while (true) {\n        $buffer .= str_repeat('.', 1 << 10);\n    }\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
