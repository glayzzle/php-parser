// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/exit-in-fiber.phpt
  it("Exit from fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n    echo \"resumed\\n\";\n    exit();\n});\n$fiber->start();\n$fiber->resume();\necho \"unreachable\\n\";\n?>")).toMatchSnapshot();
  });
});
