// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/get-return-from-unstarted-fiber.phpt
  it("Fiber::getReturn() from unstarted fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => Fiber::suspend(1));\n$fiber->getReturn();\n?>")).toMatchSnapshot();
  });
});
