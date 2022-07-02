// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fast-finish-fiber.phpt
  it("Fast finishing fiber does not leak", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => 'test');\nvar_dump($fiber->isStarted());\nvar_dump($fiber->start());\nvar_dump($fiber->getReturn());\nvar_dump($fiber->isTerminated());\n?>")).toMatchSnapshot();
  });
});
