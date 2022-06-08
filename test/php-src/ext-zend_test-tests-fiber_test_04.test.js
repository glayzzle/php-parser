// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_04.phpt
  it("Fiber interaction with custom fiber implementation 4", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): int {\n    $test = new _ZendTestFiber(function (): void {\n        $value = Fiber::suspend(1);\n        var_dump($value); // int(2)\n        $value = _ZendTestFiber::suspend(3);\n        var_dump($value); // int(6)\n        $value = Fiber::suspend(4);\n        var_dump($value); // int(8)\n        _ZendTestFiber::suspend(5);\n        echo \"unreachable\\n\"; // Test fiber is not resumed.\n    });\n    $value = $test->start();\n    var_dump($value); // int(3)\n    var_dump($test->resume(2 * $value)); // int(5)\n    return -1;\n});\n$value = $fiber->start();\nvar_dump($value); // int(1)\n$value = $fiber->resume(2 * $value);\nvar_dump($value); // int(4)\n$value = $fiber->resume(2 * $value);\nvar_dump($value); // NULL\nvar_dump($fiber->getReturn()); // int(-1)\n?>")).toMatchSnapshot();
  });
});
