// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/resume.phpt
  it("Test resume", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $value = Fiber::suspend(1);\n    var_dump($value);\n});\n$value = $fiber->start();\nvar_dump($value);\n$fiber->resume($value + 1);\n?>")).toMatchSnapshot();
  });
});
