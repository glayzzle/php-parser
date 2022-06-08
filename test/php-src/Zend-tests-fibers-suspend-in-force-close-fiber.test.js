// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/suspend-in-force-close-fiber.phpt
  it("Suspend in force-closed fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    try {\n        Fiber::suspend();\n    } finally {\n        Fiber::suspend();\n    }\n});\n$fiber->start();\nunset($fiber);\n?>")).toMatchSnapshot();
  });
});
