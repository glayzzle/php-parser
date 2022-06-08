// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/suspend-in-nested-function.phpt
  it("Suspend within nested function call", function () {
    expect(parser.parseCode("<?php\nfunction suspend(): int\n{\n    return Fiber::suspend(1);\n}\n$fiber = new Fiber(function (): int {\n    $value = suspend();\n    return Fiber::suspend($value);\n});\nvar_dump($fiber->start());\nvar_dump($fiber->resume(2));\nvar_dump($fiber->resume(3));\nvar_dump($fiber->getReturn());\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
