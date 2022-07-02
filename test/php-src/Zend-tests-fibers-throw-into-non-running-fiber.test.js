// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/throw-into-non-running-fiber.phpt
  it("Throw into non-running fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => null);\n$fiber->throw(new Exception('test'));\n?>")).toMatchSnapshot();
  });
});
