// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/get-return-in-unfinished-fiber.phpt
  it("Fiber::getReturn() in unfinished fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => Fiber::suspend(1));\nvar_dump($fiber->start());\n$fiber->getReturn();\n?>")).toMatchSnapshot();
  });
});
