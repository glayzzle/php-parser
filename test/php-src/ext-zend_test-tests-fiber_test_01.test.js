// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_01.phpt
  it("Fiber interaction with custom fiber implementation 1", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): int {\n    $test = new _ZendTestFiber(function (): int {\n        $value = Fiber::suspend(123);\n        var_dump($value); // int(246)\n        return $value;\n    });\n    var_dump($test->start()); // NULL\n    return 1;\n});\n$value = $fiber->start();\nvar_dump($value); // int(123)\n$value = $fiber->resume(2 * $value);\nvar_dump($value); // NULL\nvar_dump($fiber->getReturn()); // int(1)\n?>")).toMatchSnapshot();
  });
});
