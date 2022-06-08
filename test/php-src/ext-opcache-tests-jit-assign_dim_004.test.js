// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_004.phpt
  it("JIT ASSIGN_DIM: 004", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess {\n    function offsetExists($x): bool {}\n    function offsetGet($x): mixed {}\n    function offsetSet($x, $y): void {\n        echo \"offsetSet($x, $y)\\n\";\n    }\n    function offsetUnset($x): void {}\n}\nfunction test() {\n    $obj = new Test;\n    $obj[$undef] = 1;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
