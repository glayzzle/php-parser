// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fatal-error-in-nested-fiber.phpt
  it("Fatal error within a nested fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $fiber = new Fiber(function (): void {\n        \\Fiber::suspend(2);\n        trigger_error(\"Fatal error in nested fiber\", E_USER_ERROR);\n    });\n    var_dump($fiber->start());\n    \\Fiber::suspend(1);\n    $fiber->resume();\n});\nvar_dump($fiber->start());\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
