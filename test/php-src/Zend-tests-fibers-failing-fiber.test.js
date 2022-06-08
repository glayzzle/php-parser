// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/failing-fiber.phpt
  it("Test throwing from fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend('test');\n    throw new Exception('test');\n});\n$value = $fiber->start();\nvar_dump($value);\n$fiber->resume($value);\n?>")).toMatchSnapshot();
  });
});
