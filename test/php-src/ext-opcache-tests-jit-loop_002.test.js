// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/loop_002.phpt
  it("JIT HOT LOOP: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo($n) {\n  $res = 0;\n  for ($i = 1; $i < $n; $i++)\n    $res = $res + $i;\n  return $res;\n}\nprint foo(5);\n?>")).toMatchSnapshot();
  });
});
