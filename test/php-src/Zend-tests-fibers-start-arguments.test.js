// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/start-arguments.phpt
  it("Arguments to fiber callback", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (int $x): int {\n    return $x + Fiber::suspend($x);\n});\n$x = $fiber->start(1);\n$fiber->resume(0);\nvar_dump($fiber->getReturn());\n$fiber = new Fiber(function (int $x): int {\n    return $x + Fiber::suspend($x);\n});\n$fiber->start('test');\n?>")).toMatchSnapshot();
  });
});
