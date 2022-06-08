// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/backtrace-object.phpt
  it("Backtrace in with object as fiber callback", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    public function __invoke(string $arg): void\n    {\n        Fiber::suspend();\n        throw new Exception($arg);\n    }\n}\n$fiber = new Fiber(new Test);\n$fiber->start('test');\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
