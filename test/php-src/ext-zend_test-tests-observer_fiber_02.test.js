// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_fiber_02.phpt
  it("Observer: Unfinished fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
