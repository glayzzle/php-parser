// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/resume-running-fiber.phpt
  it("Resume running fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $self = Fiber::getCurrent();\n    $self->resume();\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
