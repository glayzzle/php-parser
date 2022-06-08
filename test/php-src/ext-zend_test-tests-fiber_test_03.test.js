// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_03.phpt
  it("Fiber interaction with custom fiber implementation 3", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): int {\n    $test = new _ZendTestFiber(function (): void {\n        $value = Fiber::suspend(1);\n        var_dump($value); // int(2)\n        Fiber::suspend(3);\n    });\n    var_dump($test->start()); // NULL\n    echo \"unreachable\\n\"; // Test fiber throws.\n    return 1;\n});\n$value = $fiber->start();\nvar_dump($value); // int(1)\n$value = $fiber->resume(2 * $value);\nvar_dump($value); // int(3)\n$value = $fiber->throw(new Exception('test'));\n?>")).toMatchSnapshot();
  });
});
