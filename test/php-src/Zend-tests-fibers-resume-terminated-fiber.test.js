// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/resume-terminated-fiber.phpt
  it("Resume terminated fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => null);\n$fiber->start();\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
