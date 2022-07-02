// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/get-return.phpt
  it("Test fiber return value", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): string {\n    $value = Fiber::suspend(\"x\");\n    return $value;\n});\n$value = $fiber->start();\nvar_dump($value);\nvar_dump($fiber->resume($value . \"y\"));\nvar_dump($fiber->getReturn());\n?>")).toMatchSnapshot();
  });
});
