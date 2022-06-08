// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_fiber_01.phpt
  it("Observer: Basic fiber switching", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n});\n$fiber->start();\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
