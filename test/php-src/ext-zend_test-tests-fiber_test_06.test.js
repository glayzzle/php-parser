// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_06.phpt
  it("Fiber interaction with custom fiber implementation 6", function () {
    expect(parser.parseCode("<?php\n$test = new _ZendTestFiber(function (): void {\n    $fiber = new Fiber(function (): void {\n        var_dump(_ZendTestFiber::suspend(10)); // string(2) \"10\"\n        Fiber::suspend(20);\n        echo \"unreachable\\n\"; // Fiber is not resumed.\n    });\n    var_dump($fiber->start()); // int(20)\n});\n$fiber = new Fiber(function (): void {\n    var_dump(Fiber::suspend(1)); // string(1) \"1\"\n    var_dump(Fiber::suspend(2)); // string(1) \"2\"\n});\nvar_dump($test->start()); // int(10)\nvar_dump($fiber->start()); // int(1)\nvar_dump($fiber->resume('1')); // int(2)\nvar_dump($test->resume('10')); // NULL\nvar_dump($fiber->resume('2')); // NULL\n?>")).toMatchSnapshot();
  });
});
