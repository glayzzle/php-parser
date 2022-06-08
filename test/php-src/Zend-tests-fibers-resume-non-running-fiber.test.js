// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/resume-non-running-fiber.phpt
  it("Resume non-running fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => null);\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
