// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_fiber_04.phpt
  it("Observer: Nested fibers with unfinished fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n    $fiber = new Fiber(function (): void {\n        Fiber::suspend();\n    });\n    $fiber->start();\n    Fiber::suspend();\n});\n$fiber->start();\n$fiber->resume();\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
