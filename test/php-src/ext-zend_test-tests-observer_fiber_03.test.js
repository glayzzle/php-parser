// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_fiber_03.phpt
  it("Observer: Nested fibers", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n    var_dump(1);\n    $fiber = new Fiber(function (): void {\n        Fiber::suspend();\n        var_dump(3);\n        Fiber::suspend();\n        var_dump(5);\n    });\n    $fiber->start();\n    Fiber::suspend();\n    var_dump(2);\n    $fiber->resume();\n    Fiber::suspend();\n    var_dump(4);\n    $fiber->resume();\n});\n$fiber->start();\n$fiber->resume();\n$fiber->resume();\n$fiber->resume();\n?>")).toMatchSnapshot();
  });
});
