// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/throw.phpt
  it("Test throwing into fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend('test');\n});\n$value = $fiber->start();\nvar_dump($value);\n$fiber->throw(new Exception('test'));\n?>")).toMatchSnapshot();
  });
});
