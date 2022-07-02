// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/resume-previous-fiber.phpt
  it("Resume previous fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $fiber1 = Fiber::getCurrent();\n    $fiber2 = new Fiber(function () use ($fiber1): void {\n        $fiber1->resume();\n    });\n    $fiber2->start();\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
