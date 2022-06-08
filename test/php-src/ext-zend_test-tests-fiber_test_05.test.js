// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_05.phpt
  it("Fiber interaction with custom fiber implementation 5", function () {
    expect(parser.parseCode("<?php\n$test = new _ZendTestFiber(function (): void {\n    $fiber = new Fiber(function (): int {\n        $value = Fiber::suspend(1);\n        var_dump($value); // int(2)\n        $value = _ZendTestFiber::suspend(3);\n        var_dump($value); // int(6)\n        $value = Fiber::suspend(4);\n        var_dump($value); // int(8)\n        return 2 * $value;\n    });\n    $value = $fiber->start();\n    var_dump($value); // int(1)\n    $value = $fiber->resume(2 * $value);\n    var_dump($value); // int(4)\n    $value = $fiber->resume(2 * $value);\n    var_dump($value); // NULL\n    var_dump($fiber->getReturn()); // int(16)\n});\n$value = $test->start();\nvar_dump($value); // int(3)\n$value = $test->resume(2 * $value);\n?>")).toMatchSnapshot();
  });
});
