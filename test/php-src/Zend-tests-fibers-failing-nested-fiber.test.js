// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/failing-nested-fiber.phpt
  it("Test throwing from fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $fiber = new Fiber(function (int $x, int $y): void {\n        Fiber::suspend($x + $y);\n        throw new Exception('test');\n    });\n    $value = $fiber->start(1, 2);\n    var_dump($value);\n    $fiber->resume($value);\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
