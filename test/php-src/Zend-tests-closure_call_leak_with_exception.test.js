// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_call_leak_with_exception.phpt
  it("Closure must not leak during a dynamic call interrupted by an exception", function () {
    expect(parser.parseCode("<?php\n(function() {\n    $closure = function($foo) { var_dump($foo); };\n    $closure(yield);\n})()->valid(); // start\n?>\n==DONE==")).toMatchSnapshot();
  });
});
