// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/return-by-ref.phpt
  it("Fiber function may return by ref, but getReturn() always returns by val", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function &() {\n    Fiber::suspend();\n    return $var;\n});\n$fiber->start();\n$fiber->resume();\nvar_dump($fiber->getReturn());\n?>")).toMatchSnapshot();
  });
});
