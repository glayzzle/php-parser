// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/sub_001.phpt
  it("JIT SUB: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $res = $var - 1;\n  var_dump($res);\n}\nfoo(42);\n?>")).toMatchSnapshot();
  });
});
