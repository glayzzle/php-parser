// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_02.phpt
  it("Fiber interaction with custom fiber implementation 2", function () {
    expect(parser.parseCode("<?php\n$test = new _ZendTestFiber(function (): void {\n    $fiber = new Fiber(function (): int {\n        $value = _ZendTestFiber::suspend(1);\n        var_dump($value); // int(2)\n        return $value;\n    });\n    $fiber->start();\n});\nvar_dump($test->start()); // int(1)\nvar_dump($test->resume(2)); // NULL\n?>")).toMatchSnapshot();
  });
});
