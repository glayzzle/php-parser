// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_zend_call_function_01.phpt
  it("Observer: Calls that go through zend_call_function are observed", function () {
    expect(parser.parseCode("<?php\nfunction sum($carry, $item) {\n    $carry += $item;\n    return $carry;\n}\n$a = [1, 2, 3, 4, 5];\n// array_reduce() calls zend_call_function() under the hood\nvar_dump(array_reduce($a, 'sum'));\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
